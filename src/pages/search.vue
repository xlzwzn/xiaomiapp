<template>
	<div class="search">

		<div class="se_header">
			<div v-on:click="goBack()" class="return"><img src="../assets/img/icon_return.png" alt="返回" /></div>
			<div class="info">
				<input type="text" placeholder="请输入关键词" v-model="searchName" @focus="inputFocus()" @blur="" @keyup.enter="searchFun()" />
			</div>
			<div class="btn" @click="searchFun()"><img src="../assets/img/icon_search.png" alt="搜索" /></div>
		</div>

		<!-- 搜索自动提示框 -->
		<div class="searchUl" ref="searchUl" @click="searchNone()">
			<ul>
				<li v-for="item in searchArrayAuto" @click="searchFun(item)">{{item}}</li>
			</ul>
		</div>

		<!-- 搜索结果 -->
		<div class="search_complete" ref="search_complete">
			<!-- 选项 -->
			<div class="search_nav">
				<div v-for="(item, index) in navArray" @click="navFun($event, index)" :class="{cc: index == 0}">
					{{item}}
					<span v-if="index == 2">
						<i class="icon-up" ref="iconup"></i>
						<i class="icon-down" ref="iconDown"></i>
					</span>
				</div>
			</div>

			<!-- 搜索成功 -->
			<div class="search_list" v-if="searchIs">
				<ul>
					<li v-for="item in searchData" @click="biographyFun(item.commodity_id)">
						<div class="item_img">
							<img :src="item.img_url" />
						</div>
						<div class="item_con">
							<div>
								<h3>{{item.name}}</h3>
								<p v-html='item.description'></p>
								<div class="item_price">
									<span>￥</span>{{item.price}}
								</div>
								<div class="item_assess" v-if="item.assess_list">
									<span>{{item.assess_list}}条评论</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<!-- 搜索结果不存在 -->
			<div class="search_empty" v-else>
				<img src="../assets/img/icon-search-empty.png" />
				<p>没有找到商品，换个词搜搜吧</p>
				<div>
					<span to="" v-for="item in searchEmpty" @click="searchFun(item)">{{item}}</span>
				</div>
			</div>
			<recommend></recommend>
		</div>

		<!-- 搜索初始化页面 -->
		<div class="searchInitial" ref="search_initial">
			<div class="promotion-title">热门搜索</div>
			
			<div class="xbanner" v-for="item in searchReco">
				<img :src="item.img_url" />
			</div>
			
			<div class="search-key">
				<span v-for="item in search.keywords" :style="{backgroundColor: item.back_n, borderColor: item.border_n}" @click="searchFun(item.word)">{{item.word}}</span>
			</div>
			
			<div class="promotion-title" v-if="recordTemporary.length > 0">搜索记录</div>
			
			<div class="hotClassify-list">
				<span v-for="item in searchRecord" @click="searchFun(item)">{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import {searchDataFun} from 'api/home'

import { mapMutations, mapGetters } from 'vuex'

import Recommend from 'components/recommend'

export default {
	data() {
		return {
			navArray: ['综合', '销量', '价格'],
			searchName: '',	// 搜索输入框内容
			searchData: '',	// 搜索结果数据
			search: '',	// 搜索页面初始化数据
			searchEmpty: ['小米全面屏电视E32C', '赛车手米兔', '商旅多功能双肩包 2', '小米红轴机械键盘', '小米全面屏电视E40A', '小米CC9e 标准高透贴膜'], // 没有找到相关商品，显示的推荐商品
			searchArray: '',	// 获取假数据
			searchArrayfuben: '',
			searchArrayAuto: [],	// 搜索自动提醒框数据
			searchIs: '',	// 判断显示数据还是空
			navIs: true,
			recordTemporary: [], // 搜索记录临时记录值
			searchReco: []	// 推荐图片
		}
	},
	created() {
		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/se_default.json').then((response) => {
			response = response.data
			if (response.code === 0) {
				this.search = response.data
				this.searchReco = response.data.ad_list[0].body.items
			}
		})
		this.searchArray = searchDataFun(['film', 'jianpan', 'mitu', 'shell', 'tv', 'fullscreen'])
		// this.searchFunFuben(this.searchDetail)
	},
	watch: {
		// 搜索自动提示下拉框
		searchName: function() {
			var thisSearchName = this.searchName
			this.searchArrayAuto = []
			var thisSearchArrayAuto = this.searchArrayAuto
			if (thisSearchName) {
				this.searchArray.filter(function(product) {
					if (String(product.name).toLowerCase().indexOf(thisSearchName) > -1) {
						thisSearchArrayAuto.push(product.name)
					}
				})
			}
		}
	},
	computed: {
		...mapGetters([
			'searchDetail',
			'searchRecord'
		])
	},
	methods: {
		navFun: function(e, index) {
			var divList = e.target.parentNode.children
			for (var i=0,liatal=divList.length; i<liatal; i++) {
				divList[i].classList.remove('cc')
			}
			e.target.classList.add('cc')
			var searchDataFuben = this.searchData
			if(index == 0) {
				this.searchFun(this.searchName)
			}
			if(index == 1) {
				this.searchData.sort(function(a, b) {
					return a.assess_list - b.assess_list
				}).reverse()
			}
			if(index == 2) {
				var spanI = e.target.children[0].children
				if(this.navIs) {
					spanI[0].classList.add('cc')
					spanI[1].classList.remove('cc')
					this.searchData.sort(function(a, b) {
						return a.price - b.price
					})
					this.navIs = false
				} else {
					spanI[0].classList.remove('cc')
					spanI[1].classList.add('cc')
					this.searchData.reverse()
					this.navIs = true
				}
			}
		},
		// 进入详情页
		biographyFun: function(item) {
			sessionStorage.setItem("biography", item)
			this.thisSearchDetail(this.searchName)
			this.$router.push('/detail')
		},
		// 点击搜索按钮，进行搜索
		searchFun: function(thisSearchName) {
			thisSearchName = thisSearchName ? thisSearchName : this.searchName
			this.searchName = thisSearchName
			if (thisSearchName) {
				this.searchData = this.searchArray.filter(function(product) {
					return String(product.name).toLowerCase().indexOf(thisSearchName.toLowerCase()) > -1
				})
				if (this.searchData.length == 0) {
					this.searchIs = false
				} else {
					this.searchIs = true
				}
				this.$refs.search_initial.style.display = 'none'
				this.$refs.search_complete.style.display = 'block'
				
				// 搜索记录
				this.recordTemporary = this.searchRecord ? this.searchRecord : []
				var _this = this
				if (this.recordTemporary.length >= 5) {
					_this.recordTemporary.shift()
				}
				this.recordTemporary.unshift(thisSearchName)
				this.thisSearchRecord(this.recordTemporary)
				// this.$router.push('/search?' + thisSearchName)
				this.$router.push({ path: 'search', query: { key: thisSearchName } })
			} else {
				console.log('失败')
			}
			this.$refs.searchUl.style.display = "none"
		},
		// 点击空白处隐藏
		searchNone: function() {
			this.$refs.searchUl.style.display = "none"
		},
		inputFocus: function() {
			this.$refs.searchUl.style.display = "block"
		},
//		inputBlur: function() {
//			this.$refs.searchUl.style.display = "none"
//		},
		goBack: function(){
			window.history.back();
			var search = ''
			var _this = this
			setTimeout(function() {
				search = decodeURIComponent(window.location.search).substring(5)
				if (search) {
					_this.searchFun(search)
				} else {
					_this.$refs.search_initial.style.display = 'block'
					_this.$refs.search_complete.style.display = 'none'
					_this.searchName = ''
				}
			})
		},
		...mapMutations({
			thisSearchDetail: 'SEARCH_DETAIL',
			thisSearchRecord: 'SEARCH_RECORD'
		})
	},
	components: {
		Recommend
	}
}
</script>

<style scoped>

.se_header{width:100%; max-width: 640px; height: 0.8rem; background: #fafafa; display: flex; align-items: center;}
.se_header .return, .se_header .btn{flex: 0 0 10%; margin: 0 0.2rem; text-align: center;}
.se_header .return img, .se_header .btn img{width: 80%;}
.se_header .info{flex: 1 1 0; position: relative}
.se_header .info input{width: 100%; height: 0.5rem; text-indent: 1em; font-size: 0.3rem; border: 1px solid #e5e5e5;}

.searchUl{width: 100%; height: 100%; background: #fff; border: 1px solid #ccc; border-top: 0; background: rgba(0,0,0,.5); position: fixed; left: 0; top: 0.8rem; display: none; z-index: 99;}
.searchUl ul{background: #fff;}
.searchUl ul li{width: 100%; line-height: 0.95rem; text-indent: 1em; font-size: 0.3rem; color: #000; border-bottom: 1px solid #ddd;}
.searchUl ul li:last-child{border: 0;}

.searchInitial{width: 100%; max-width: 640px; position: fixed; top: 0.8rem; bottom: 0; background: #fff; overflow: scroll;}
.promotion-title{line-height: .8rem; padding: 0 .3rem; font-size: .24rem; text-align: left;}
.search-key{margin: .1rem .2rem; text-align: left;}
.search-key span{display: inline-block; padding: .14rem .2rem; margin: .1rem; border: 1px solid #e4e4e4; background: hsla(12,99%,71%,.05); font-size: .24rem; color: #484848;}
.hotClassify-list{text-align: left; overflow: hidden; padding-left: .32rem;}
.hotClassify-list span{display: inline-block; background: #f5f5f5; height: .55rem; line-height: .55rem; padding: 0 .15rem; margin-right: .15rem; margin-bottom: .1rem; color: rgba(0,0,0,.54);}

.search_complete{background: #f4f4f4; display: none;}

.search_nav{height: 0.72rem; font-size: 0.28rem; background: #fafafa; margin-bottom: 0.6rem; display: flex;}
.search_nav div{line-height: 0.72rem; text-align: center; color: rgba(0,0,0,.54); flex: 1 1 0;}
.search_nav div.cc{color: #ff6700;}
.search_nav div span{display: inline-block; position: relative; margin-left: .1rem;}
.search_nav div span i{width: 0; height: 0; border-style: solid; display: inline-block; vertical-align: middle; position: absolute; left: 0; margin-left: 0;}
.search_nav div span i.icon-down{border-width: .08rem .08rem 0; border-color: #bdbdbd transparent transparent; top: -0.06rem;}
.search_nav div span i.icon-up{border-width: 0 .08rem .08rem; border-color: transparent transparent #bdbdbd; top: -0.23rem;}
.search_nav div.cc span i.icon-up.cc{border-color: transparent transparent #ff6700;}
.search_nav div.cc span i.icon-down.cc{border-color: #ff6700 transparent transparent;}

.search_list ul li{min-height: 2.53rem; padding: 0.28rem; padding-left: 0; display: flex; border-bottom: 1px solid #f1f1f1; background: #fff;}
.search_list ul li:last-child{border: 0;}
.search_list ul li .item_img{flex: 0 0 2.58rem;}
.search_list ul li .item_con{flex: 1 1 0; margin-left: 0.23rem; display: flex; align-items: center;}
.search_list ul li .item_con h3{line-height: 0.38rem; color:#000; font-weight: normal; font-size: 0.28rem; display: -webkit-box;}
.search_list ul li .item_con p{line-height: 0.27rem; font-size: 0.2rem; color: rgba(0,0,0,.54); margin-top: 0.05rem; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;}
.search_list ul li .item_con .item_price{margin-top: 0.22rem; line-height: 1; font-size: 0.36rem; color: #f00;}
.search_list ul li .item_con .item_assess{line-height: 0.24rem; font-size: 0.2rem; color: rgba(0,0,0,.54); margin-top: 0.1rem;}

.search_empty img{width: 2.34rem; height: 2.34rem; display: block; margin: 0 auto .24rem;}
.search_empty p{color: rgba(0,0,0,.54); font-size: .24rem; line-height: .28rem; text-align: center; padding-bottom: .48rem;}
.search_empty div{text-align: left; padding-bottom: .33rem; margin: 0 .26rem;}
.search_empty div span{display: inline-block; background: #fff; line-height: .6rem; color: rgba(0,0,0,.87); font-size: .24rem; padding: 0 .22rem; border-radius: .3rem; margin-right: .15rem; margin-bottom: .15rem;}
</style>

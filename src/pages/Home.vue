<!-- Home.vue -->
<template>
	<div class="container">
		<header>
			<div class="header">
				<div class="header_t">
					<div class="header_logo"><router-link to="/">MI</router-link></div>
					<router-link to="/search" class="header_search"><i></i><p>搜索商品名称</p></router-link>
					<div class="header_person"><router-link to="/user">个人</router-link></div>
				</div>
				<div class="nav_wrap">
					<div class="nav_display" @click="displayFun($event)"><i ref="navDisplay"></i></div>
					<div class="nav_layer" ref="navLayer">
						<div class="layer_title">全部</div>
						<div class="btn_wrap">
							<span v-for="(item,index) in home_nav.tabs" :class="{cc:index == navId}" @click="tab(index)">{{item.name}}</span>
						</div>
					</div>
					<div class="nav" ref="nav">
						<div class="swiper-container">
							<ul class="swiper-wrapper">
								<li class="swiper-slide" v-for="(item,index) in home_nav.tabs" :class="{cc:index == navId}" @click="tab(index)">{{item.name}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div style="width:100%; height: 1.4rem;"></div>
		</header>
		
		<div class="body_wrap">

			<div class="bodys" v-for="itembody in homeJson">

				<banner :items="itembody[0].body.items"></banner>
				
				<sy-nav v-if="itembody[1][0]" :items="itembody[1]"></sy-nav>

				<div class="sy_tj bordertb clear" v-if="itembody[2].body">
					<div class="sy_tjs" v-for="item in itembody[2].body.items">
						<router-link to="/">
							<img :src="item.img_url" :alt="item.title" />
						</router-link>
					</div>
				</div>

				<!-- 首页 -->
				<home-product v-if="navId == '0'" :items="itembody[3]"></home-product>

				<!-- 除首页和智能页 -->
				<product  v-if="navId != '0' || '2'" :items="itembody[3]" :item_partition="navId"></product>

				<!-- 智能页 -->
				<intelligence-list v-if="navId == '2'" :items="itembody[3]"></intelligence-list>

				<div class="bottomh"></div>
			</div>
		</div>
		
		<!-- 底部 -->
		<Footer :footeritem="footername"></Footer>
	</div>
</template>

<script>
import axios from 'axios'
import Vue from 'Vue'

import { mapGetters } from 'vuex'
import { homeJsonFun } from 'api/home'

// 组件
import Banner from 'components/banner'
import SyNav from 'components/sy_nav'
import HomeProduct from 'components/home_product'
import Product from 'components/product'
import IntelligenceList from 'components/Intelligence_list'
import Footer from 'components/footer'

const ERR_OK = 0;

export default {
	name: 'helooWorld',
	data() {
		return {
			home_nav: [],	// 导航数据
			displayIs: true,
			footername: 'home',	//旧版底部导航所需关键词
			navId: 0,
			homeJson: ''	// 获取到的数据
		}
	},
	created() {
		console.log('产品详情页只有6个固定的内容，没有购物车推荐商品前6个进入，即随机展现一个产品页')
		this.tabFun(this.navId)
	},
	computed: {
		...mapGetters([
			'userName',
			'authoRization',
			'panelData'
		])
	},
	components: {
		Footer,
		Banner,
		SyNav,
		HomeProduct,
		Product,
		IntelligenceList
	},
	methods: {
		displayFun: function(e) {
			if (this.displayIs) {
				e.target.classList.add('unfold')
				this.$refs.navLayer.style.display = "block"
				this.$refs.nav.style.display = "none"
				this.displayIs = false
			} else {
				e.target.classList.remove('unfold')
				this.$refs.navLayer.style.display = "none"
				this.$refs.nav.style.display = "block"
				this.displayIs = true
			}
		},
		tab: function(index) {
			this.tabFun(index)
			this.$refs.navLayer.style.display = 'none'
			this.$refs.nav.style.display = "block"
			this.$refs.navDisplay.classList.remove('unfold')
		},
		tabFun: function(index){
			this.navId = index
			this.homeJson = homeJsonFun(index)
			// 初始化导航数据
			axios('https://raw.githubusercontent.com/xlzwzn/xiaomi/master/data/home.json').then((response) => {
				response = response.data
				if (response.code === ERR_OK) {
					this.home_nav = response.data
				}
			})
			// 返回顶部
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}
	//created () {
	//	this.$http.get('/api/navsy').then((data) => {
	//		this.navsy = data.body.data
	//	})
	// }
}
</script>

<style scoped>

.header{width:100%; max-width:640px; background: #f1f1f1; position: fixed; top: 0; z-index: 9999;  box-shadow:0px 0px 10px #888888;}
.header_t{width:100%; height: 0.8rem; display: flex; align-items: center;}
.header_logo, .header_person{line-height: 0.6rem; text-align:center; margin: 0 4%; flex: 0 0 5%;}
.header_logo a, .header_person a{color:#333; white-space: nowrap;}
.header_search{height: 0.6rem; line-height: 0.6rem; flex: 1 1 0; background-color: #fff; border: 1px solid #E5E5E5; display: flex;}
.header_search i{width: 0.6rem; height: 0.6rem; display: block; flex: 0 0 0.6rem; background: url(../assets/img/icon_search.png) no-repeat 50%; background-size: 0.4rem;}
.header_search p{font-size: 0.32rem; color: rgba(0,0,0,.3); flex: 1 1 0;}
.nav_wrap{position: relative; display: flex;}
.nav_wrap .nav{width: 90%; overflow: hidden; position: relative; z-index: 10;}
.nav_wrap .nav ul{width: 300%; overflow-x: auto;}
.nav_wrap .nav ul li{width:auto; line-height:0.55rem; font-size: 0.26rem; color: rgb(116, 116, 116); margin: 0 0.27rem; float: left;}
.nav_wrap .nav ul li.cc{color:#ed5b00; box-sizing:border-box; border-bottom:0.05rem solid #ed5b00;}
.nav_layer{width: 100%; padding: 0 0.25rem; display: none;}
.nav_layer .layer_title{font-size: 0.28rem; padding-top: 0.25rem;}
.nav_layer .btn_wrap{padding-top: 0.34rem; font-size: 0.25rem; color: #3C3C3C;}
.nav_layer .btn_wrap span{width: 22%; line-height: 0.55rem; margin: 0 1.5%; text-align: center; background-color: #fff; box-sizing: border-box; border: 1px solid #ddd; border-radius: 10%; margin-bottom: 0.23rem; display: inline-block;}
.nav_layer .btn_wrap span.cc{color: #f00; border-color: #f00; background-color: #fde0d5;}

.nav_wrap .nav_display{width: 10%; height: 0.55rem; line-height: 0.55rem; position: absolute; top: 0; right: 0; z-index: 99; background-color: #F1F1F1; text-align: center;}
.nav_wrap .nav_display i{width: 0.4rem; height: 0.4rem; background: url(../assets/img/icon_return.png) no-repeat center; background-size: 100%; transform: rotate(-90deg); display: inline-block; vertical-align: middle;}
.nav_wrap .nav_display i.unfold{transform: rotate(90deg);}



.sy_tj{width: 100%; height: auto; overflow: hidden;}
.sy_tjs{width:49.5%; height: 2.6rem; float: right;}
.sy_tjs:first-child{height: 5.3rem; float: left;}
.sy_tjs:last-child{margin-top: 0.05rem;}
.sy_tj_c_b{width: 100%; height: 2.6rem; margin-top: 0.05rem;}
.sy_tj_b{width:100%; height: 3rem; border-top: 0.1rem solid #f1f1f1; float: left;}

.more{width: 100%; height: 1.2rem; line-height: 1.2rem; text-align: center; border-top: 1px solid rgb(206, 206, 206);}
.more a{font-size: 0.28rem; color: rgba(0,0,0,.6);}

.divide{height:0.16rem;border-bottom:0.16rem solid rgb(245,245,245);background-color:rgb(245,245,245);margin:0 auto;border-top:none;border-left:none;border-right:none;box-sizing:border-box;width:100%;overflow:hidden;}

.sj_mainc{width:96%; padding: 0 2%;}



</style>
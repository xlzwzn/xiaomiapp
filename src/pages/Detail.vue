<template>
	<div class="detail">
		<div class="detail_head">
			<div class="detail_head_t">
				<span @click="goreturn">&lt;</span>
				<!--<p @click="share"><img src="../assets/details/icon_fx.png" /></p>-->
			</div>
			<div v-for="itembody in detail.goods_info">
				<banner :items="itembody.gallery_v3"></banner>
			</div>
		</div>
		<div class="detail_info" v-if="detail.product_info">
			<div class="detail_info_name">{{detail.product_info.name}}</div>
			<div class="detail_info_brief" v-html=detail.product_info.product_desc></div>
			<div class="detail_info_price">￥{{ iprice }}</div>
		</div>
		
		<div class="fgxe"></div>
		
		<div class="detail_config">
			<div class="detail_config_pz" @click="open()">
				<div class="detail_config_pz_l">已选</div>
				<div class="detail_config_pz_r">{{ isize }} {{ icolor }}</div>
			</div>
			<div class="detail_config_pz">
				<div class="detail_config_pz_l">送至</div>
				<div class="detail_config_pz_r">北京市 西城区</div>
			</div>
			<div class="detail_config_sm" v-for="item in detail.goods_info">
				<span v-for="itemlist in item.service_refound_policy_list.list_new">{{itemlist.title}}</span>
			</div>
		</div>
		
		<div class="fgxe"></div>
		
		<div class="join_shopcart" id="popup">
			<div class="join_shopcartC">
				<div class="join_shopcart_content">
					<div class="join_shopcart_content_close" @click="close()">x</div>
					<div class="join_shopcart_content_main" v-for="item in detail.goods_info">
						<div class="join_shopcart_content_main_img">
							<img :src="item.img_url" />
						</div>
						<div class="join_shopcart_content_main_par">
							<span>￥{{ iprice }}</span>
							<p>{{ item.name }} {{ icolor }} {{ isize }}</p>
						</div>
					</div>
					<div class="join_shopcart_par" v-for="item in detail.buy_option" :id="item.prop_cfg_id">
						<h4>{{ item.name }}</h4>
						<ul>
							<li v-for="(itemlist, index) in item.list" :class="{ cc: index == numli }" @click="parameterClick($event, index)">{{ itemlist.name }}</li>
						</ul>
					</div>
				</div>
				<div class="join_shopcartS" @click="joingwc()">加入购物车</div>
			</div>
			<div class="join_shopcartI"></div>
		</div>
		
		<div class="fgxe"></div>
		
		<div class="product">
			<div class="product_b">
				<div class="product_bs" v-if="details">
					<!-- 直接使用会在运行后提示错误 -->
					<!--<div v-for="item in detail.goods_tpl_datas.sections" v-if="item.body.img_url">
						<img :src="item.body.img_url" />
					</div>-->
					<div v-for="item in details" v-if="item.body.img_url">
						<img :src="item.body.img_url" />
					</div>
				</div>
			</div>
		</div>
		
		<div class="fgx"></div>

		<div class="detail_button">
			<dl>
				<dd>
					<router-link to="/">
						<img src="../assets/img/icon_sy_h.png" />
						<p>首页</p>
					</router-link>
					<router-link to="/cart">
						<img src="../assets/img/icon_gwc_h.png" />
						<p>购物车</p>
					</router-link>
				</dd>
				<dt @click="joingwc">加入购物车</dt>
			</dl>
		</div>
		
		<div class="bottomh"></div>
		
		<div class="gotop" id="gotop" @click="gotop()"><img src="../assets/details/icon_top.png" /></div>
		
		<!-- 弹窗 -->
		<div class="gwc_alert" ref="gwc_alert">
			<div class="gwc_alert_content">
				<i></i>
				<p>已成功加入购物车</p>
			</div>
			<i></i>
		</div>
	</div>
</template>




<script>
import axios from 'axios'
import Swiper from 'swiper'

import { mapMutations, mapGetters } from 'vuex'

import Banner from 'components/banner'

var tiimesl = new Date(2018,6,13,10,0,0)
var tiimesr = new Date()
var tiimes = tiimesl - tiimesr
export default {
	data() {
		return {
			productp: ['概述', '参数'],
			num: 0,
			numli: [0],
			icolor: '',
			isize: '',
			iprice: '2699元',
			detail: [],
			detailarray: [],
			biography: '',
			isClick: true,
			details: []	// 用来存放产品详情介绍数据
		}
	},
	created() {
		this.biography_fun()
		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/detail/' + this.biography + '.json').then((response) => {
			response = response.data
			if(response.code === 0) {
				this.detail = response.data
				this.details = this.detail.goods_tpl_datas.sections
				this.icolor = this.detail.buy_option[0].list[0].name
				this.isize = this.detail.buy_option[1].list[0].name
				this.iprice = this.detail.buy_option[1].list[0].price
			}
		})
	},
	mounted() {
//		new Swiper ('.swiper-container', {
//			pagination: {
//		     el: '.swiper-pagination',
//		   }
//		}),
//		countDown(tiimes),
		window.addEventListener('scroll', this.scrollFunction)
	},
	computed: {
		...mapGetters([
			'panelData',
			'searchDetail'
		])
	},
	methods: {
		// 如果不是从购物车页面产品点进，则随机显示一个商品
		biography_fun: function() {
			// 返回顶部
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
			// 返回顶部
			var biography_val = sessionStorage.getItem("biography");
			var biography_array = ['film', 'jianpan', 'mitu', 'shell', 'tv', 'fullscreen']
			for (var i=0; i<biography_array.length; i++) {
				if (biography_val == biography_array[i]) {
					this.biography = sessionStorage.getItem("biography")
					return
				} else {
					var iMath = Math.ceil(Math.random()*5)
					this.biography = biography_array[iMath]
				}
			}
		},
		// 加入购物车
		joingwc: function() {
			if (this.isClick) {
				this.isClick = false
				var sessionLeng = window.sessionStorage.length;
				// sessionStorage.setItem("detailarray"+sessionLeng++, this.biography)
				// AuthoRization: sessionStorage.getItem("username") ? sessionStorage.getItem("username") : '',
				this.detailarray = this.panelData ? this.panelData : [];
				this.detailarray.push(this.biography)
				this.PanelData(this.detailarray)
				setTimeout(function() {
					this.isClick = true
				}, 1000)
			}
			this.close()
			this.gwc_alert()
		},
		gwc_alert: function() {
			var _this = this
			_this.$refs.gwc_alert.style.display = "block"
			setTimeout(function() {
				_this.$refs.gwc_alert.style.display = "none"
			}, 2000)
		},
		goreturn: function() {
			window.history.back()
		},
		open: function() {
			document.getElementById('popup').style.bottom = '0'
		},
		close: function(){
			document.getElementById('popup').style.bottom = '-100%'
		},
		tab: function(index) {
			this.num = index
			var tabbodys = document.querySelectorAll('.product_bs'),
				len = tabbodys.length
			for(var i=0; i<len; i++){
				tabbodys[i].style.height = 0
			}
			tabbodys[this.num].style.height = 'auto'
		},
		gotop: function() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
		scrollFunction: function(){
			if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
				document.getElementById('gotop').style.display = 'block'
			}else{
				document.getElementById('gotop').style.display = 'none'
			}
		},
		share: function(){
			alert('啦啦啦,暂时没实现此功能')
		},
		siblings: function(elm) {
			var a =[];
			var p = elm.parentNode.children;
			for (var i=0,pl=p.length; i<pl; i++) {
				if(p[i] !== elm) {
					a.push(p[i])
				}
				return a;
			}
		},
		parameterClick: function(e, index) {
			// console.log(e.target.parentNode.children.classList.remove('cc'))
			var lista = e.target.parentNode.children
			var listid = e.target.parentNode.parentNode.id
			for (var i=0,liatal=lista.length; i<liatal; i++) {
				lista[i].classList.remove('cc')
			}
			e.target.classList.add('cc')
			if (listid == 2) {
				this.icolor = e.target.innerHTML
			}
			if (listid == 1) {
				this.isize = e.target.innerHTML
				this.iprice = this.detail.buy_option[1].list[index].price
			}
		},
		...mapMutations({
			PanelData: 'PANEL_DATA'
		})
	},
	components: {
		Banner
	}
}


</script>


<style>

.detail_head{width:100%; height: 8.3rem; position: relative;}
.detail_head_t{width: 100%; height: 1.02rem; position: absolute; top: 0; box-sizing: border-box; padding: 3%; z-index: 999;}
.detail_head_t span,.detail_head_t p{width:8%; height: 100%; background-color:#000; opacity: 0.6; border-radius: 50%; display: block;}
.detail_head_t span{line-height:1; font-size: 0.52rem; color: #fff; text-align: center; float: left;}
.detail_head_t p{text-align:center; float: right;}
.detail_head_t p img{width: 80%; margin-top: 10%;}

.detail_time{width: 100%; height: 1rem; background: #f00;}
.detail_time_l{padding-left: 5%; line-height: 1rem; font-size: 0.4rem; color: #fff; float: left;}
.detail_time_r{padding-right: 5%; float: right;}
.detail_time_r p{line-height: 1.5; font-size: 0.32rem; color: #fff;}
.detail_time_r div{line-height: 1.5; font-size: 0.32rem; color: #fff;}

.detail_info{width:100%; height: auto; box-sizing: border-box; padding: 3%;}
.detail_info_name{width:100%; height: auto; line-height: 1.2; font-size: 0.4rem;}
.detail_info_brief{width:100%; line-height:1.5; font-size: 0.24rem; color: #666;}
.detail_info_price{width:100%; height: 0.8rem; line-height: 0.8rem; font-size: 0.48rem; font-weight: bold; color: #f00;}

.detail_config{width:100%; height: auto; overflow: hidden; font-size: 0.24rem; box-sizing: border-box; padding: 0 5%;}
.detail_config_pz{width: 100%; height: 0.7rem; border-bottom: 1px solid #f1f1f1;}
.detail_config_pz_l{width:10%; height: 0.7rem; line-height: 0.7rem; color:#999; float: left;}
.detail_config_pz_r{width:90%; height: 0.7rem; line-height: 0.7rem; float: right;}
.detail_config_sm{width: 100%; height: 0.7rem; line-height: 0.7rem; color: #666;}
.detail_config_sm span{height:0.7rem; line-height: 0.7rem; background: url(../assets/details/icon_gou.png) no-repeat; background-size: 0.2rem; background-position: 0 center; padding-left: 0.24rem; margin-right: 0.2rem;}

.detail_button{width: 100%; max-width: 640px; height: 1rem; position: fixed; bottom: 0; z-index: 999;}
.detail_button dl{width: 100%; height: 1rem; background: #fff;}
.detail_button dl dd{width: 40%; padding-top: 0.2rem; float: left;}
.detail_button dl dd a{width: 50%; height: 1rem; text-align: center; display:block; float: left;}
.detail_button dl dd a img{width: 28%;}
.detail_button dl dd a p{line-height:1.5; color:#333;}
.detail_button dl dt{width: 60%; height: 1rem; line-height: 1rem; text-align: center; font-size: 0.28rem; color: #fff; background: #f00; float: right;}
.detail_button dl dt a{color:#fff;}

.gotop{width: 0.8rem; height: 0.8rem; position: fixed; right: 5%; bottom: 10%; z-index: 9999; display: none;}

.gwc_alert{width: 150px; height: 100px; border-radius: 0.2rem; overflow: hidden; position: fixed; top: 50%; left: 50%; margin: -50px 0 0 -75px; z-index: 999; display: none;}
.gwc_alert .gwc_alert_content, .gwc_alert>i{width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: 100;}
.gwc_alert>i{ background: #000000; opacity: 0.5; z-index: 1;}
.gwc_alert .gwc_alert_content i{width: 35px; height: 35px; background: url(../assets/img/icon_hook.png) no-repeat; background-size: 100%; position: absolute; left: 60px; top: 15px;}
.gwc_alert .gwc_alert_content p{width: 100%; line-height: 1.5; text-align: center; font-size: 0.32rem; color: #fff; position: absolute; bottom: 15px;}


.join_shopcart{width:100%; max-width: 640px; height: 100%; position: fixed; bottom: -100%; z-index: 99999;}
.join_shopcartC{width: 100%; height: 75%; position: absolute; left: 0; bottom: 0; background: #fff; z-index: 100;}
.join_shopcartI{width: 100%; height: 100%; position: absolute; left: 0; bottom: 0; background: #000; opacity: 0.4; z-index: 99;}
.join_shopcart_content{width: 100%; height: 90%; box-sizing: border-box; padding: 5%;}
.join_shopcart_content_close{width:0.3rem; height: 0.3rem; line-height: 0.3rem; text-align:center; font-size: 0.36rem; color: #666; position: absolute; top: 3%; right: 5%;}
.join_shopcart_content_main{width:100%; height: 1.5rem; display: flex;}
.join_shopcart_content_main_img{width:1.5rem; height: 1.5rem; border: 1px solid #ccc; flex: 0 0 1.5rem;}
.join_shopcart_content_main_par{box-sizing:border-box; padding: 3% 0 0 5%; flex: 1 1 0;}
.join_shopcart_content_main_par span{color:#f00; font-size: 0.48rem; font-weight: 700;}
.join_shopcart_content_main_par p{line-height: 1.5; font-size: 0.28rem;}
.detail_config_pop_bb{width: 100%; height: auto;}
.join_shopcart_content dt{width: 100%; height: 0.5rem; line-height: 0.5rem; padding: 0.2rem 0; font-size: 0.32rem; color: #666;}
.detail_config_pop_bb dd{width: 100%; height: 0.8rem; line-height: 0.8rem; box-sizing: border-box; padding: 0 5%; border: 1px solid #f1f1f1; margin-bottom: 0.1rem; position: relative;}
.detail_config_pop_bb dd:first-child{border-color: #f00;}
/*.detail_config_pop_bb dd input{width: 0; height: 0;}
.detail_config_pop_bb dd label.sizel{float:left;}
.detail_config_pop_bb dd label.sizer{float:right;}
.detail_config_pop_bb dd p{float:left;}
.detail_config_pop_bb dd span{float: right;}*/

.join_shopcart_par{width: 100%; height: auto;}
.join_shopcart_par h4{width: 100%; height: 0.5rem; line-height: 0.5rem; padding: 0.2rem 0; font-size: 0.32rem; font-weight: normal; color: #666;}
.join_shopcart_par ul li{box-sizing: border-box; padding: 3% 5%; margin-right: 5%; border: 1px solid #f1f1f1; border-radius: 5%; display: inline-block; position: relative;}
.join_shopcart_par ul li.cc{border-color: #f00;}

.detail_config_pop_ys dd{width: 100%; height: 0.8rem;}
.detail_config_pop_ys dd input{width:0; height: 0;}
.detail_config_pop_ys dd label{width: 23%; height: 0.8rem; line-height:0.8rem; text-align: center; font-size: 0.28rem; box-sizing: border-box; border: 1px solid #f1f1f1; color: #333; margin-left: 2%; float: left;}


.join_shopcartS{width: 100%; height: 10%; line-height: 2.5; text-align: center; font-size: 20px; color: #fff; background: #f00;}


</style>






	

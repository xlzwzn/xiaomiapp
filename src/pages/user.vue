<template>
	<div class="user">
		<div class="header_user">
			<dl>
				<dt><img :src=img_url /></dt>
				<dd>{{ name }}</dd>
			</dl>
		</div>
		<div class="order">
			<div class="order_t">
				<p>我的订单</p>
				<router-link to="/">全部订单&gt;</router-link>
			</div>
			<div class="order_b">
				<ul>
					<li>
						<router-link to="/">
							<i></i>
							<p>待付款</p>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<i></i>
							<p>待发货</p>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<i></i>
							<p>退换修</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="fgx"></div>
		
		<div class="user_b">
			<ul>
				<li class="icon1">
					<router-link to="/">
						<i></i>
						<div>
							<p>会员中心</p>
							<span>&gt;</span>
						</div>
					</router-link>
				</li>
				<li class="icon2">
					<router-link to="/">
						<i></i>
						<div>
							<p>我的优惠</p>
							<span>&gt;</span>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="fgx"></div>
			<ul>
				<li class="icon3">
					<router-link to="/">
						<i></i>
						<div>
							<p>服务中心</p>
							<span>&gt;</span>
						</div>
					</router-link>
				</li>
				<li class="icon4">
					<router-link to="/">
						<i></i>
						<div>
							<p>小米之家</p>
							<span>&gt;</span>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="fgx"></div>
			<ul>
				<li class="icon5">
					<router-link to="/">
						<i></i>
						<div>
							<p>F码通道</p>
							<span>&gt;</span>
						</div>
					</router-link>
				</li>
			</ul>
			<div class="fgx"></div>
			<ul>
				<li class="icon6">
					<router-link to="set" append>
						<i></i>
						<div>
							<p>设置</p>
							<span>&gt;</span>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from 'components/footer'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default{
	data(){
		return {
			name: '登录/注册',
			img_url: '../assets/user/mrtx.png'
		}
	},
	created() {
		console.log('可进入设置页面')
		var userId = sessionStorage.getItem("userId")
		if (userId) {
			axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/user.json').then((response) => {
					for (var i=0; i<response.data.data.length; i++) {
						if (response.data.data[i].id === userId) {
							this.name = response.data.data[i].name
							this.img_url = response.data.data[i].img_url
						}
					}
			})
//			this.name = sessionStorage.getItem("username")
//			this.img_url = sessionStorage.getItem("img_url")
		}
	},
	components: {
		Footer
	}//,
//	mounted(){
//		this.init()
//	},
//	methods:{
//		init(){
//			document.getElementsByClassName("footer")[0].classList.add("footer4");
//		}
//	}
}
</script>

<style>
.header_user{width: 100%; height: auto; background:#f37d0f url(../assets/user/head_bg.png) no-repeat; background-size: 100%;}
.header_user dl{height: 1rem; padding: 0.3rem 0 0.3rem 0.3rem;}
.header_user dl dt{width: 1rem; height: 1rem; border-radius: 50%; overflow: hidden; float: left;}
.header_user dl dd{height:1rem; line-height: 1rem; font-size: 14px; color: #fff; padding-left: 0.2rem; float: left;}
.order{width: 100%; height: auto;}
.order_t{width: 100%; height: 0.8rem; border-bottom: 1px solid #EEEEEE; box-sizing: border-box; padding: 0 5%;}
.order_t p{height: 0.8rem; line-height: 0.8rem; font-size: 14px; float: left;}
.order_t a{height: 0.8rem; line-height: 0.8rem; font-size: 14px; color: #333; display: block; float: right;}
.order_b{width:100%; height: 1.6rem; box-sizing: border-box; padding: 0 5%;}
.order_b ul{width: 100%; height: 1.6rem; box-sizing: border-box; padding-top: 0.3rem;}
.order_b ul li{width:33.333333333%; height: 1.6rem; float: left;}
.order_b ul li i{width: 100%; height: 0.6rem; display: block;}
.order_b ul li:first-child i{background: url(../assets/user/icon_order1.png) no-repeat center;  background-size: 30%;}
.order_b ul li:nth-child(2) i{background: url(../assets/user/icon_order2.png) no-repeat center;  background-size: 30%;}
.order_b ul li:last-child i{background: url(../assets/user/icon_order3.png) no-repeat center;  background-size: 30%;}
.order_b ul li p{width: 100%; line-height: 2; font-size: 12px; color: #333; text-align: center;}

.user_b{width:100%; height: auto;}
.user_b ul{width: 100%; height: auto; overflow: hidden;}
.user_b ul li{width: 100%; height: 1rem; box-sizing: border-box; padding-left:5%;}
.user_b ul li a{width: 100%; height: 1rem; display: block;}
.user_b ul li a i{width: 12%; height: 1rem; display:block; float: left;}
.user_b ul li.icon1 a i{background: url(../assets/user/icon_userb1.png) no-repeat left center; background-size: 60%;}
.user_b ul li.icon2 a i{background: url(../assets/user/icon_userb2.png) no-repeat left center; background-size: 60%;}
.user_b ul li.icon3 a i{background: url(../assets/user/icon_userb3.png) no-repeat left center; background-size: 60%;}
.user_b ul li.icon4 a i{background: url(../assets/user/icon_userb4.png) no-repeat left center; background-size: 60%;}
.user_b ul li.icon5 a i{background: url(../assets/user/icon_userb5.png) no-repeat left center; background-size: 60%;}
.user_b ul li.icon6 a i{background: url(../assets/user/icon_userb6.png) no-repeat left center; background-size: 60%;}
.user_b ul li a div{width: 88%; height: 1rem; border-bottom: 1px solid #ddd; box-sizing: border-box; padding-right: 5%; float: right;}
.user_b ul li:last-child a div{border-bottom: 0;}
.user_b ul li a div p{height: 1rem; line-height: 1rem; font-size: 14px; color: #333; float: left;}
.user_b ul li a div span{height: 1rem; line-height: 1rem; font-size: 18px; float: right;}
</style>
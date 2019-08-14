<template>
	<footer class="footer">
		<div class="footer_wrap" ref="footerWrap">
			<!--<router-link to="/" class="footerhome" :class="{cc: footeritem == 'home'}">
				<i></i>
				<p>首页</p>
			</router-link>
			<router-link to="/category" class="footercategory" ref="footercategory">
				<i></i>
				<p>分类</p>
			</router-link>
			<router-link to="/cart" class="footercart" ref="footercart">
				<i></i>
				<p>购物车</p>
			</router-link>
			<router-link to="/user" class="footeruser" ref="footeruser">
				<i></i>
				<p>我的</p>
			</router-link>-->
			<router-link exact-active-class="cc" v-for="item in footerCon" :to="item.router" :class="item.iclass" :ref="item.iclass">
				<i></i>
				<p>{{item.name}}</p>
				<div v-if="item.iclass === 'footercart'">
					<div v-if="panelData">
						<em v-if="panelData.length > 0">{{ panelData.length }}</em>
					</div>
				</div>
			</router-link>
		</div>
		<div class="gotop" id="gotop" @click="gotop()"><img src="../assets/details/icon_top.png" /></div>
	</footer>
</template>


<script>
import { mapGetters } from 'vuex'
import FooterEm from 'components/footerem'

export default {
	props: ['footeritem'],
	data() {
		return {
			footerCon: [
				{
					name: '首页',
					router: '/',
					iclass: 'footerhome'
				},
				{
					name: '分类',
					router: '/category',
					iclass: 'footercategory'
				},
				{
					name: '购物车',
					router: '/cart',
					iclass: 'footercart'
				},
				{
					name: '我的',
					router: '/user',
					iclass: 'footeruser'
				}
			],
			panelDataLength: 0
		}
	},
	computed: {
		...mapGetters([
			'panelData'
		])
	},
	created() {
		if(this.panelData){
			this.panelDataLength = this.panelData.length
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollFunction)
	},
	methods: {
		scrollFunction: function(){
			if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
				document.getElementById('gotop').style.display = 'block'
			} else {
				document.getElementById('gotop').style.display = 'none'
			}
		},
		gotop: function() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	},
	components: {
		FooterEm
	}
}
</script>


<style>
.footer{width: 100%; max-width: 640px; height: 1.1rem; background: #fff; box-shadow:0px 0px 10px #888888; box-sizing: border-box; padding-top: 0.15rem; position: fixed; bottom: 0; z-index: 999;}
.footer_wrap{display: flex;}
.footer_wrap a{flex: 1 1 0; text-align: center; color: #999; position: relative;}
.footer_wrap a i{width: 0.45rem; height: 0.45rem; display: inline-block; background-repeat: no-repeat; background-size: 100%;}
.footer_wrap a.footerhome i{background-image: url(../assets/img/icon_sy_h.png);}
.footer_wrap a.footercategory i{background-image: url(../assets/img/icon_fl_h.png);}
.footer_wrap a.footercart i{background-image: url(../assets/img/icon_gwc_h.png);}
.footer_wrap a.footeruser i{background-image: url(../assets/img/icon_wo_h.png);}
.footer_wrap a.cc{color: #FF6700;}
.footer_wrap a.footerhome.cc i{background-image: url(../assets/img/icon_sy_b.png);}
.footer_wrap a.footercategory.cc i{background-image: url(../assets/img/icon_fl_b.png);}
.footer_wrap a.footercart.cc i{background-image: url(../assets/img/icon_gwc_b.png);}
.footer_wrap a.footeruser.cc i{background-image: url(../assets/img/icon_wo_b.png);}
.footer_wrap a em{width: 0.28rem; height: 0.28rem; line-height: 0.28rem; border-radius: 50%; background: #f00; position: absolute; right: 30%; top: -10%; color: #fff; font-style: normal;}


.footer ul{width: 100%; height: 1.1rem;}
.footer ul li{width: 25%; height: 1.1rem; text-align: center; float: left;}
.footer ul li img{width:25%; display: inline-block;}
.footer ul li p{width:100%; line-height: 2.5; font-size: 12px; color: #999;}
.footer1 ul li:first-child p{color:#f00;}
.footer2 ul li:nth-child(2) p{color:#f00;}
.footer3 ul li:nth-child(3) p{color:#f00;}
.footer4 ul li:last-child p{color:#f00;}
.gotop{width: 0.8rem; height: 0.8rem; position: fixed; right: 5%; bottom: 10%; z-index: 9999; display: none;}
</style>
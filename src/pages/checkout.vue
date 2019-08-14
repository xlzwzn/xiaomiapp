<template>
	<div class="checkout">
		<div class="checkoutCon">
			<Header :column="'用户结算'"></Header>
			<div class="tips">
				<p>抢购以最终支付成功为准，加购后请尽快付款，避免抢购失败</p>
			</div>
			<div class="address" @click="enterFun()">
				<div v-if="isAddress">
					<p class="p1">
						<span>{{address[thisAddressIndex].name}}</span>
						<span>{{address[thisAddressIndex].tel}}</span>
					</p>
					<p class="p2">{{address[thisAddressIndex].region}} {{address[thisAddressIndex].detailed}}</p>
				</div>
				<div v-else>
					<p>添加收货地址</p>
				</div>
			</div>
			<div class="line"></div>
			<div class="payment">
				<ul ref="payment">
					<li v-for="(item, index) in payment" :class="{cc : index == '0'}" @click="paymentFun(index)">
						<i :class="'i' + index"></i>
						<p>{{item}}</p>
					</li>
				</ul>
				<div class="switch" @click="switchFun()"><span>{{switchTit}}其他支付方式</span><i ref="switchI"></i></div>
			</div>
			<div class="line"></div>
			<div class="b3 freight">
				<strong>运费</strong>
				<span class="right">包邮</span>
			</div>
			<div class="b3 invoice">
				<strong>电子发票</strong>
			</div>
			<div class="b3 coupon">
				<strong>优惠券</strong>
				<span class="right">已优惠 0 元</span>
			</div>
			<div class="line"></div>
			<div class="goodsList">
				<div class="goodsListCon" v-for="item in cartGoods">
					<img :src="item.img_url" />
					<p class="name">{{item.name}}</p>
					<p>
						<span v-if="item.list > 1">{{item.list}}x</span>
						<strong>{{item.price}}</strong>
					</p>
				</div>
			</div>
			<div class="line"></div>
			<div class="price">
				<p>
					<strong>商品总计:</strong>
					<span>{{totalPrice}}</span>
				</p>
				<p>
					<strong>已优惠:</strong>
					<span>0</span>
				</p>
				<p>
					<strong>配送费用:</strong>
					<span>0</span>
				</p>
			</div>
		</div>
		<div class="flex">
			<div class="info_tips" v-if="isAddress">
				<p>配送至：{{address[thisAddressIndex].region}} {{address[thisAddressIndex].detailed}}</p>
			</div>
			<div class="ui_flex">
				<div class="flex_left">
					<span>共{{totalNum}}件 合计:</span>
					<strong>{{totalPrice}}</strong>
				</div>
				<div class="flex_right" @click="goPaymentFun()">去付款</div>
			</div>
		</div>
		<div class="gotop" id="gotop" @click="gotop()"><img src="../assets/details/icon_top.png" /></div>
	</div>
</template>

<script>
import Header from 'components/header'

import axios from 'axios'
import { mapGetters } from 'vuex'

export default{
	data() {
		return {
			currentAddress: '',
			payment: ['支付宝', '微信支付', '小米钱包', '银联支付', '翼支付', '小米分期', '花呗分期'],
			switchTit: '使用',
			cartGoods: [],	// 所有商品
			totalNum: 0,	// 商品总数
			totalPrice: 0,	// 商品总价格
			isSwitch: false,	// 支付方式暂开收起
			thisAddressIndex: 0,
			isAddress: false
		}
	},
	created() {
		this.cartGoodsFun(this.panelData)
		this.totalFun(this.panelData)
		this.addIndexFun()
	},
	methods: {
		goPaymentFun: function() {
			alert('付款功能未实现')
		},
		// 判断收货地址
		addIndexFun: function() {
			// 初次判断，收货地址为空时
			if(this.address == undefined){
				this.isAddress = false
			} else {
				this.isAddress = true
			}
			// 收货地址被删除，进入结算页面时
			if(this.thisAddressIndex >= 0){
				if(this.addressID >= 0){
					if(this.address.length == 0){
						this.isAddress = false
						this.thisAddressIndex = 0
					} else {
						this.thisAddressIndex = this.addressID
					}
				}
			}
			
//			if(typeof this.addressID == 'number') {
//				this.thisAddressIndex = this.addressID
//			}
		},
		// 重选收货地址
		enterFun: function() {
			this.$router.push({ path: 'address', query: { type: 'checkout'}})
		},
		// 付款方式切换
		paymentFun: function(index) {
			var liList = this.$refs.payment.childNodes
			for(var i=0; i<liList.length; i++) {
				liList[i].classList.remove('cc')
			}
			liList[index].classList.add('cc')
		},
		// 付款方式展开收起
		switchFun: function() {
			if (!this.isSwitch) {
				this.$refs.payment.childNodes.forEach((item) => {
					item.style.display = 'block'
				})
				this.$refs.switchI.style.transform = "rotate(90deg)"
				this.isSwitch = true
			} else {
				this.$refs.payment.childNodes.forEach((item, index) => {
					if(index > 2) {
						item.style.display = 'none'
					}
				})
				this.$refs.switchI.style.transform = "rotate(270deg)"
				this.isSwitch = false
			}
		},
		// 计算商品总数
		totalFun: function(item) {
			var obj = {};
			var _this = this;
			for (var i=0, l=item.length; i<l; i++) {
				var itemobj = item[i];
				obj[itemobj] = (obj[itemobj] + 1) || 1
			}
			for (var index in obj) {
				_this.totalNum += obj[index]
			}
		},
		// 计算商品总价
		totalFunt: function(item) {
			console.log(Object.keys(this.cartGoods))
		},
		cartGoodsFun: function(item) {
			// 返回顶部
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
			// 返回顶部
			var obj = {};
			for (var i=0, l=item.length; i<l; i++) {
				var itemobj = item[i];
				obj[itemobj] = (obj[itemobj] + 1) || 1
			}
			for (var index in obj) {
				axios('https://raw.githubusercontent.com/xlzwzn/xiaomi/master/data/detail/' + index + '.json').then((response) => {
					response = response.data
					if(response.code === 0) {
						this.temporary = {
							img_url: response.data.goods_info[0].img_url,
							name: response.data.goods_info[0].name,
							price: response.data.goods_info[0].price,
							commodity_id: response.data.goods_info[0].commodity_id,
							hookclick: true,
							list: obj[index]
						}
						this.totalPrice+=parseInt(response.data.goods_info[0].price)
					}
					this.cartGoods.push(this.temporary)
				})
			}
		}
	},
	computed: {
		...mapGetters([
			'address',
			'panelData',
			'addressID'
		])
	},
	components: {
		Header
	}
}
</script>

<style scoped>
.checkoutCon{font-size: 0.24rem; padding-top: 1rem; padding-bottom: 1.55rem;}
.tips{background: #fbf3c4; color: #b57842; padding: 0.12rem 0.2rem;}
.tips p{color: #b57842;}

.address{padding: 0.4rem 0.4rem 0.3rem 0.4rem; background: url(../assets/img/bd1.png) repeat-x; position: relative;}
.address:after{content: ''; width: 0.2rem; height: 0.2rem; border-left: 1px solid currentColor; border-top: 1px solid currentColor; position: absolute; right: 0.32rem; top: 50%; transform: translate3d(0,-50%,0) rotate(135deg);}
.address p.p1{font-size: 0.3rem; font-weight: 700; margin-bottom: 0.2rem;}
.address p.p2{font-size: 0.28rem; color: #757575; margin-right: 0.3rem;}

.line{height: 0.2rem; border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; background: #F5F5F5;}

.payment ul li{line-height: 0.5rem; padding: 0.2rem 0.4rem; border-bottom: 1px solid #eee; background: url(../assets/img/check_normal.png) no-repeat 94% 50%; background-size: 0.4rem;}
.payment ul li.cc{background: url(../assets/img/check_press.png) no-repeat 94% 50%; background-size: 0.4rem;}
.payment ul li:nth-child(n+4){display: none;}
.payment ul li p{font-size: 0.26rem; background-size: 0.5rem; background-position: 0 50%; background-repeat: no-repeat; display: inline-block;}
.payment ul li i{width: 0.5rem; height: 0.5rem; margin-right: 0.2rem; display: inline-block; background-size: 0.5rem; background-repeat: no-repeat; background-position: 0 100%; float: left;}
.payment ul li i.i0{background-image: url(../assets/img/pay_zfb2.png);}
.payment ul li i.i1{background-image: url(../assets/img/pay_wx.png);}
.payment ul li i.i2{background-image: url(../assets/img/micash_wap.png);}
.payment ul li i.i3{background-image: url(../assets/img/pay_yl1.png);}
.payment ul li i.i4{background-image: url(../assets/img/pay_yzf.png);}
.payment ul li i.i5{background-image: url(../assets/img/pay_mifinanceinstal.png);}
.payment ul li i.i6{background-image: url(../assets/img/pay_antinstalment.png);}
.payment .switch{line-height: 0.5rem; color: #BDBDBD; text-align: center; padding: 0.2rem 0; display: flex; justify-content: center; align-items: center;}
.payment .switch i{width: 0.35rem; height: 0.35rem; background: url(../assets/img/icon_return.png) no-repeat; background-size: 100%; display: inline-block; transform: rotate(270deg);}

.b3{padding: 0.26rem 0.4rem; border-bottom: 1px solid #eee;}
.b3 span.right{color: #bdbdbd; float: right;}

.goodsListCon{margin: 0 0.4rem; padding: 0.14rem 0; border-bottom: 1px solid #eee; display: flex;}
.goodsListCon img{width: 0.8rem; height: 0.8rem; margin-right: 0.2rem;}
.goodsListCon p{line-height: 0.8rem;}
.goodsListCon p.name{flex: 1; margin-right: 0.6rem;}

.price{padding: 0.26rem 0.4rem;}
.price p{line-height: 2em;}

.flex{width: 100%; max-width: 640px; position: fixed; bottom: 0;}
.info_tips{padding: 0.12rem 0.2rem; background: #fbf3c4;}
.info_tips p{line-height: 0.3rem; color: #b57842;}
.ui_flex{text-align: center; display: flex;}
.ui_flex .flex_left{width: 100%; line-height: 1rem; font-size: 0.3rem; color: #ff4d14; border-top: 1px solid #e0e0e0; background-color: #fff;}
.ui_flex .flex_right{width: 100%; height: 1rem; line-height: 1rem; font-size: 0.3rem; color: #fff; background-color: #ff5722;}
.gotop{width: 0.8rem; height: 0.8rem; position: fixed; right: 5%; bottom: 10%; z-index: 9999; display: none;}
</style>
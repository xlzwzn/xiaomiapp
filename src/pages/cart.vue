<template>
	<div class="cart">
		<Header :column="'购物车'" :iSsearch="true"></Header>
		
		<div class="carts">
			<ul ref="cart_ul">
				<li v-for="(item, index) in cartGoods">
					<!--<div>{{index}}</div>-->
					<div class="chose unchecked" @click="chose($event, index)"></div>
					<div class="item_img" @click="biography(item.commodity_id)"><img :src="item.img_url" /></div>
					<div class="info">
						<div class="item_name">{{ item.name }}</div>
						<div class="item_price">
							<span>售价：</span>
							<span>￥{{ item.price }}元</span>
						</div>
						<div class="num">
							<div class="input_number">
								<div class="input_sub" @click="cartSub(index)"><i></i></div>
								<div class="input_num"><span>{{item.list}}</span></div>
								<div class="input_add" @click="cartAdd(index)"><i></i></div>
							</div>
							<div class="delete" @click.once="deleteFun(index)">
								<i></i>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<recommend></recommend>

		<div class="bottomh"></div>
		
		<div class="cart_submit" v-show="isPanelData">
			<div class="box-flex">
				<div class="price-box flex">
					<span>共{{totalNumber}}件 金额:</span>
					<br />
					<strong>{{totalPrice}}</strong>
					<span>元</span>
				</div>
				<router-link to="/category" class="disable btn flex">继续购物</router-link>
				<span class="settlement btn flex" @click="goCheckoutFun()">去结算</span>
			</div>
		</div>
		
		<Footer v-show="!isPanelData"></Footer>
	</div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header'
import Recommend from 'components/recommend'
import Footer from 'components/footer'

import { mapMutations, mapGetters } from 'vuex'

export default{
	data() {
		return {
			cartGoods: [],	// 购物车商品数据
			temporary: {},	// 临时数据
			totalPrice: 0,	// 购物车商品总价
			totalNumber: 0,	// 选中商品的总数量
			isPanelData: false
		}
	},
	created() {
		console.log('购物车页面可加入，删除，选中，增加商品数量，计算商品价格，数量，进入结算界面等')
		this.cartGoodsFun(this.panelData)
		this.isPanel()
	},
	computed: {
		...mapGetters([
			'panelData'
		])
	},
	watch: {
		panelData: function() {
			this.removeUl()
			this.cartGoodsFun(this.panelData)
			this.isPanel()
		}
	},
	methods: {
		// 进入结算页面
		goCheckoutFun: function() {
			var dieb = this.cartGoods.some((item) => {
				return item.hookclick == false
			})
			if (dieb) {
				this.$router.push('/checkout')
			} else {
				alert('请勾选需要结算的商品')
			}
			// console.log(dieb, this.cartGoods)
			// this.$router.push('/checkout')
		},
		// 判断购物车中是否有商品
		isPanel: function() {
			var _this= this
			if(!this.panelData){
				return
			}
			if(this.panelData == 'undefined' || this.panelData.length == 0) {
				_this.isPanelData = false
			} else {
				_this.isPanelData = true
			}
		},
		removeUl: function() {
			var cartUl = this.$refs.cart_ul
			while (cartUl.firstChild) {
				var oldNode = cartUl.removeChild(cartUl.firstChild)
				oldNode = null
			}
		},
		// 加
		cartAdd: function(index) {
			this.cartGoods[index].list++
			if (!this.cartGoods[index].hookclick) {
				this.totalNumber++
				var price = parseInt(this.cartGoods[index].price)
				this.totalPrice += price
			}
		},
		// 减
		cartSub: function(index) {
			if (this.cartGoods[index].list > 1){
				this.cartGoods[index].list--;
				if (!this.cartGoods[index].hookclick) {
					this.totalNumber--
					var price = parseInt(this.cartGoods[index].price)
					this.totalPrice -= price
				}
			}
		},
		// 选中
		chose: function(e, index) {
			if (this.cartGoods[index].hookclick) {
				e.target.classList.remove('unchecked')
				e.target.classList.add('checked')
				this.cartGoods[index].hookclick = false
				this.totalNumber += parseInt(this.cartGoods[index].list)
				var liste = this.cartGoods[index].list
				var price = this.cartGoods[index].price
				this.totalPrice += liste * price
			} else {
				e.target.classList.remove('checked')
				e.target.classList.add('unchecked')
				this.cartGoods[index].hookclick = true
				this.totalNumber -= parseInt(this.cartGoods[index].list)
				var liste = this.cartGoods[index].list
				var price = this.cartGoods[index].price
				this.totalPrice -= liste * price
			}
		},
		// 跳到产品详情页
		biography: function(item) {
			sessionStorage.setItem("biography", item)
			this.$router.push('/detail')
		},
		// 进入购物车页面，加载购物车商品
		cartGoodsFun: function(item) {
			if(!item){
				return
			}
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
				axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/detail/' + index + '.json').then((response) => {
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
					}
					this.cartGoods.push(this.temporary)
				})
			}
		},
		// 删除购物车商品
		deleteFun: function(index) {
			var panelDataFuben = this.panelData
			for (var i=0; i<panelDataFuben.length; i++){
				if (panelDataFuben[i] === this.cartGoods[index].commodity_id) {
					this.totalPrice = 0
					this.totalNumber = 0
					panelDataFuben.splice(i, 1)
					this.ePanelData(panelDataFuben)
					// return
				}
			}
			// this.cartGoodsFun(this.panelData)
		},
		...mapMutations({
			ePanelData: 'PANEL_DATA'
		})
	},
	components: {
		Header,
		Recommend,
		Footer
	}
	
}
</script>

<style scoped>
.carts{width:100%; height:auto; padding-top: 1rem;}
.carts ul li{width: 100%; height: 1.8rem; padding: 0.24rem 0; border-top: 0.2rem solid #f5f5f5; display: flex;}
.carts ul li:filst-child{border-top: 0;}
.carts ul li .chose{width: 0.6rem; height: 1.8rem; box-sizing: border-box; padding: 0 0.2rem; background-size: 0.4rem; background-repeat: no-repeat; background-position: center; flex: 0 0 0.6rem;}
.carts ul li .chose.unchecked{background-image: url(../assets/img/check_normal.png);}
.carts ul li .chose.checked{background-image: url(../assets/img/check_press.png);}
.carts ul li .item_img{width: 1.8rem; height: 1.8rem; box-sizing: border-box; border: 1px solid #ccc; margin-right: 0.2rem; display: inline-block; flex: 0 0 1.8rem;}
.carts ul li .item_img img{width: auto; height: 100%;}
.carts ul li .info{height: 1.8rem; position: relative; flex: 1;}
.carts ul li .info .item_name{line-height: 1.2; font-size: 0.32rem; color: #666; margin-right: 0.3rem;}
.carts ul li .info .item_price{line-height: 1.5; font-size: 0.24rem;; color: #999; margin-bottom: 2px;}
.carts ul li .info .num{width: 100%; height: 0.6rem; position: absolute; left: 0; bottom: 0;}
.carts ul li .info .num .input_number{height: 0.6rem; border: 1px solid #eee; float: left;}
.carts ul li .info .num .input_number>div{width: 0.6rem; height: 0.6rem; display: inline-block; float: left;}
.carts ul li .info .num .input_number .input_num{text-align: center; line-height: 0.6rem; font-size: 0.32rem; color: #3c3c3c;}
.carts ul li .info .num .input_number .input_sub,.carts ul li .info .num .input_number .input_add{background-color: #f4f4f4;}
.carts ul li .info .num .input_number .input_sub i,.carts ul li .info .num .input_number .input_add i{width: 0.6rem; height: 0.6rem; background-repeat: no-repeat; background-position: center; background-size:  0.3rem; display: inline-block;}
.carts ul li .info .num .input_number .input_sub i{background-image: url(../assets/img/input_reduce.png);}
.carts ul li .info .num .input_number .input_add i{background-image: url(../assets/img/input_plus.png);}

.carts ul li .info .num .delete{width: 0.6rem; height: 0.6rem; margin-right: 0.2rem; float: right;}
.carts ul li .info .num .delete i{width: 100%; height: 100%; background: url(../assets/img/delete.png) no-repeat center; background-size: 100%; display: inline-block;}

/* 悬浮结算 */
.cart_submit{width: 100%; max-width: 640px; text-align: center; position: fixed; bottom: 0; z-index: 1000; background: #fff; box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);}
.cart_submit .box-flex{display: flex;}
.cart_submit .box-flex .flex{flex: 1 1 auto; box-sizing: inherit;}
.cart_submit .box-flex .price-box{width: 100%; font-size: 0.28rem; color: #999; text-align: center; padding-top: 5px;}
.cart_submit .box-flex .price-box strong{font-size: 0.4rem; color: #FF6700;}
.cart_submit .box-flex .disable{background: #f4f4f4; color: #000; border: 1px solid #f4f4f4;}
.cart_submit .box-flex .btn{width: 100%; height: 1rem; line-height: 1rem; font-size: 0.32rem; display: block;}
.cart_submit .box-flex .settlement{background: #ff6700; color: #fff;}
</style>
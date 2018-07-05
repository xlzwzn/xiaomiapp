<template>
	<div class="cart">
		<Header :column="iheader"></Header>
		
		<div class="carts">数据</div>
		
		<!-- 推荐 -->
		<div class="sj_main">
			<div class="sj_main_t">
				 <img src="../assets/img/cart/tit.jpg" alt="推荐" />
			</div>
			<div class="sj_main_b">
				<sy-cpmb-b v-for="img in cart" :src="img.src" :name="img.name" :present="img.present" :original="img.original"></sy-cpmb-b>
			</div>
		</div>
		
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '../components/category/header'
import Footer from '../components/footer'
import SyCpmbB from '../components/sy_cpmb_b'

export default{
	data() {
		return {
			iheader: "购物车",
			cart: [
				{ src: require("../assets/img/cart/cp1.jpg"), name: "小米6X 4GB+64GB", present: "￥1599", original:""},
				{ src: require("../assets/img/cart/cp2.jpg"), name: "红米Note 5 4GB+64GB", present: "￥1399", original:""},
				{ src: require("../assets/img/cart/cp3.jpg"), name: "小米MIX 2S 8GB+256GB", present: "￥3999", original:""},
				{ src: require("../assets/img/cart/cp4.jpg"), name: "小米MIX 2S 真皮保护套", present: "￥99", original:""},
				{ src: require("../assets/img/cart/cp5.jpg"), name: "米粉卡日租卡", present: "￥50", original:""},
				{ src: require("../assets/img/cart/cp6.jpg"), name: "小米影视会员卡", present: "￥498", original:""},
				{ src: require("../assets/img/cart/cp7.jpg"), name: "米家驱蚊器", present: "￥59", original:""},
				{ src: require("../assets/img/cart/cp8.jpg"), name: "小米8 SE 4GB+64GB", present: "￥1799", original:""},
				{ src: require("../assets/img/cart/cp9.jpg"), name: "空净滤芯家庭套装", present: "￥278", original:"￥328"},
				{ src: require("../assets/img/cart/cp10.jpg"), name: "小米MIX 2S 硅胶保护套 ", present: "￥59", original:""},
			]
		}
	},
	components: {
		Header,
		Footer,
		SyCpmbB
	}
	
}
</script>

<style>
.carts{margin-top: 1rem;}
</style>
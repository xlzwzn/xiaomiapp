<!-- Home.vue -->
<template>
	<div class="container">
		<home-header></home-header>
		<div class="content">
			<ul class="cont_ul">
				<list v-for="item in items" :price="item.price" :title="item.title"></list>
			</ul>
		</div>
	</div>
</template>

<style>  
.container {max-width:640px; margin:0 auto; overflow-x:hidden;}  
.cont_ul {padding-top:0.05rem; margin:0 -0.12rem;}  
.cont_ul:after {content:""; display:block; width:0; height:0; clear:both;}  
</style>

<script>
import HomeHeader from './components/HomeHeader'
import List from './components/List'

export default {
	data() {
		return {
			items:[
				 { price: "129.00", title: "大学"},
                 { price: "256.00", title: "中庸" },  
                 { price: "399.00", title: "论语" },  
                 { price: "998.00", title: "孟子" },  
                 { price: "99.00", title: "道德经" },  
                 { price: "89.00", title: "老子" },  
                 { price: "188.00", title: "金刚经" },  
                 { price: "209.00", title: "易筋经" },
            ]
		}
	},
	components: {
		HomeHeader,
		List
	}
}
</script>
<template>
	<div class="body_wrap">
		<!--<div v-for="itembody in itemslist">{{itembody.list[0].body.items[0].img_url}}</div>-->
		<!--<div>{{itemslist[1].list[3]}}</div>-->
		<div class="bodys" v-for="(itemsbody, index) in itemslist" v-if="itemsbody.list">
			<banner :items="itemsbody.list[0].body.items"></banner>
<!--<div>{{itemsbody.list[1].body}}</div>-->
			<sy-nav v-if="itemsbody.list[1][0]" :items="itemsbody.list[1]"></sy-nav>
	
			<div class="sy_tj bordertb clear" v-if="itemsbody.list[2].body">
				<div class="sy_tjs" v-for="item in itemsbody.list[2].body.items">
					<router-link to="/">
						<img :src="item.img_url" :alt="item.title" />
					</router-link>
				</div>
			</div>

			<home-product v-if="itemsbody.listif === 'home_product'" :items="itemsbody.list[3]"></home-product>

			<product v-if="itemsbody.listif === 'other_product' || 'product_household'" :items="itemsbody.list[3]" :item_partition="itemsbody.listif"></product>

			<intelligence-list v-if="itemsbody.listif === 'three_intellect'" :items="itemsbody.list[3]"></intelligence-list>

			<div class="bottomh"></div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import Banner from 'components/banner'
import SyNav from 'components/sy_nav'
import HomeProduct from 'components/home_product'
import Product from 'components/product'
import IntelligenceList from 'components/Intelligence_list'


const ERR_OK = 0;

export default {
	name: 'helooWorld',
	props: ['itemID'],
	data() {
		return {
		}
	},
	created() {
		console.log(this.itemID)
	},
	components: {
		Banner,
		SyNav,
		HomeProduct,
		Product,
		IntelligenceList
	}
}
</script>

<style>
.sy_tj{width: 100%; height: auto; overflow: hidden;}
.sy_tjs{width:49.5%; height: 2.6rem; float: right;}
.sy_tjs:first-child{height: 5.3rem; float: left;}
.sy_tjs:last-child{margin-top: 0.05rem;}
</style>
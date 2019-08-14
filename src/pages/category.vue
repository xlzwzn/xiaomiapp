<template>
	<div style="background:#fff;">
		<cat-header :column="cathead" :iSsearch="true"></cat-header>
		
		<div class="category">
			<div class="swiper-container category_left">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="(item, index) in category" :class="{cc: index == num}" @click="irefgo(index)">{{ item.category_name }}</li>
				</ul>
			</div>

			<div class="category_right">
				<div v-for="(itembody, index) in category" :id="'category' + index">
					<div class="cat_main" v-for="item in itembody.category_list">
						<div class="cat_main_banner" v-if="item.view_type == 'cells_auto_fill'" v-for="itemlist in item.body.items">
							<router-link to="/detail">
								<img :src="itemlist.img_url" alt="cells_auto_fill" />
							</router-link>
						</div>
						<div class="cat_main_tit" v-if="item.view_type == 'category_title'">
							<span>{{item.body.category_name}}</span>
						</div>
						<div class="cat_mains">
							<ul>
								<li v-if="item.view_type == 'category_group'" v-for="itemlist in item.body.items">
									<router-link to="/detail">
										<img v-bind:src="itemlist.img_url" v-bind:alt="itemlist.product_name" />
										<p>{{ itemlist.product_name }}</p>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="categrouys" id="categrouys"></div>
			</div>

		</div>
		
		<Footer></Footer>
	</div>
</template>

<script>
import CatHeader from 'components/header'
import Footer from 'components/footer'
import Swiper from 'swiper'

import axios from 'axios'

export default {
	data() {
		return {
			cathead: '分类',
			num: 0,
			category: []
		}
	},
	created() {
		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/category.json').then((response) => {
			response = response.data
			if (response.code === 0) {
				this.category = response.data
			}
		})
	},
	components: {
		CatHeader,
		Footer
	},
	methods:{
		tabe: function(index){
			this.num = index
			console.log(this.num)
		},
		irefgo: function(dref){
				var ili = document.querySelectorAll(".swiper-slide");
				var iihref = window.location.pathname;
				window.location.href=iihref + '#category' + dref;
//				for(var i=0; i<ili.length; i++){
//					ili[i].classList.remove("cc")
//				};
				ili.forEach(function (item) {
					item.classList.remove('cc')
				})
				//ili.classList.remove("cc");
				ili[dref].classList.add("cc");
			}
	},
	mounted() {
		new Swiper ('.swiper-container', {
			direction: 'vertical',
      slidesPerView: 'auto',
		})
	}
}
</script>

<style>
.home_product_content_list{width: 100%; height: auto; overflow: hidden;}
.home_product_content_list dl,dl.teledlb{width: 49.5%; height: auto; overflow: hidden; margin-top: 1%; float: left;}
.home_product_content_list dl:nth-child(odd),dl.teledlb:nth-child(odd){margin-right: 1%;}
.home_product_content_list dl dd,dl.teledlb dd{width:100%; height: auto; box-sizing: border-box; padding: 0.2rem 0.25rem; background: #fff;}
.home_product_content_list dl dd p,dl.teledlb dd p{width:100%; line-height: 1.5; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.home_product_content_list dl dd p.name{font-size:15px; color:#333;}
.home_product_content_list dl dd p.brief{color:#666;}
.home_product_content_list dl dd p.price{color:#f00;}
.home_product_content_list dl dd p.price s{color:#666;}
.category{width:100%; max-width: 640px; height: 100%; background:#fff; position: fixed; top: 0rem; box-sizing: border-box; padding-bottom: 1.1rem; padding-top: 1rem; z-index: 999;}
.categrouys{height:80%;}
</style>
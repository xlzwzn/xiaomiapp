<template>
<div class="intelligence">
	<div v-for="itemlist in items">
		<div class="intelligence_tit" v-for="item in itemlist[0].body.items">
			<img :src="item.img_url" />
		</div>
		<div class="intelligence_list clear">
			<div class="intelligence_list_content">
				<router-link to="/" v-for="item in itemlist[1].body.items">
					<div class="img">
						<img :src="item.img_url" :alt="item.product_name" />
					</div>
					
					<div class="text">
						<div class="name">{{ item.product_name }}</div>
						<div class="brief">{{ item.product_brief }}</div>
						<div class="price">
							{{ item.product_price }}
							<s>{{ item.product_org_price }}</s>
						</div>
					</div>
				</router-link>
			</div>
	
			<!-- flex布局版本 -->
			<!--<div class="intelligence_list_content intelligence_list_contentB" v-for="itemb in newArray">
				<router-link to="/" v-for="item in itemb">
					<div class="img">
						<img :src="item.img_url" :alt="item.product_name" />
					</div>
					
					<div class="text">
						<div class="name">{{ item.product_name }}</div>
						<div class="brief">{{ item.product_brief }}</div>
						<div class="price">
							{{ item.product_price }}
							<s>{{ item.product_org_price }}</s>
						</div>
					</div>
				</router-link>
			</div>-->
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: ['items'],
	data() {
		return {
			itee: '',
			newArray: [],
			itemBody: []
		}
	},
	created() {
		// flex版本布局会用到
		// this.groupFun(this.itee, 3)
		this.itemBody = this.items
	},
	methods: {
		groupFun: function(array, subGroupLength) {
			let index = 0
			while (index < array.length) {
				this.newArray.push(array.slice(index, index += subGroupLength))
			}
			return this.newArray
		}
	}
}
</script>

<style scoped>
.intelligence{width: 100%;}

.intelligence_list{width: 97%; height: auto; padding: 1.5%; background-color: rgb(240, 241, 243);}
.intelligence_list_content{width: 100%; height: auto; overflow: hidden; position: relative}
.intelligence_list_content a{width: 32%; margin: 0.65%; display: block; background-color: #fff; border-radius: 2%; float: left;}

.intelligence_list_contentB{display: flex;}
.intelligence_list_contentB a{flex: 1;}

/*.intelligence_list_content a:nth-child(3n+1){background-color: #000;}*/
.intelligence_list_content a .text{width: 100%; box-sizing: border-box; padding: 2%; text-align: center; color: #000;}
.intelligence_list_content a .text .name{font-size: 0.28rem; line-height: 1.5; font-weight: 700; white-space: nowrap;}
.intelligence_list_content a .text .brief{width: 100%; line-height: 1.5; font-size: .24rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.intelligence_list_content a .text .price{font-size: .28rem; font-weight: 700; color: #f00;}
.intelligence_list_content a .text .price s{font-size: .24rem; color: #999;}
</style>
<template>
<div class="product">
	<div v-for="itemlist in items">
		<div class="product_tit">
			 <img v-for="item in itemlist[0].body.items" :src="item.img_url" alt="标题1" />
		</div>
		
		<!--<div class="product_tit" v-if="itemList0.body.items">
			 <img v-for="item in itemList0.body.items" :src="item.img_url" alt="标题1" />
		</div>-->
		<div class="product_content" :class="{ product_content_household : item_partition == '5' || '6' }" :style="{ backgroundColor: itemlist[2].body.bg_color }">
			<div v-if="JSON.stringify(itemlist[1]) != '{}'">
				<div class="product_content_one" v-if="itemlist[1].length == '2'" v-for="itemdl in itemlist[1]">
					<dl v-for="item in itemdl.body.items">
						<router-link to="/detail">
							<dt><img :src="item.img_url" :alt="item.product_name" /></dt>
							<dd>
								<div class="nameyj">
									<p>{{ item.product_name }}</p>
									<span>{{ item.product_price }}</span>
								</div>
								<div class="namejj">
									<p>{{ item.product_brief }}</p>
									<s>{{ item.product_org_price }}</s>
								</div>
							</dd>
						</router-link>
					</dl>
				</div>
				<div class="product_content_one" v-if="itemlist[1].length == undefined" v-for="item in itemlist[1].body.items">
					<dl>
						<router-link to="/detail">
							<dt><img :src="item.img_url" :alt="item.product_name" /></dt>
							<dd>
								<div class="nameyj">
									<p>{{ item.product_name }}</p>
									<span>{{ item.product_price }}</span>
								</div>
								<div class="namejj">
									<p>{{ item.product_brief }}</p>
									<s>{{ item.product_org_price }}</s>
								</div>
							</dd>
						</router-link>
					</dl>
				</div>
			</div>
			<div class="product_content_list" v-if="itemlist[2].body">
				<dl v-for="item in itemlist[2].body.items">
					<router-link to="/detail">
						<dt><img :src="item.img_url" :alt="item.product_name" /></dt>
						<dd>
							<p class="name">{{ item.product_name }}</p>
							<p class="brief">{{ item.product_brief }}</p>
							<P class="price">
								<span>{{ item.product_price }}</span>
								<s>{{ item.product_org_price }}</s>
							</P>
						</dd>
					</router-link>
				</dl>
			</div>
		</div>
	</div>
</div>

</template>

<script>
export default {
	props: ['items', 'item_partition'],
	data(){
		return{
			itemList0: '',
			itemList1: '',
			itemList2: ''
		}
	},
	created(){
		if(this.items[0]){
			this.itemList0 = this.items[0][0]
		}
	}
}
</script>

<style>
.product{width:100%; height: auto; overflow: hidden;}

.product_content{width:96%; padding: 0 2% 2% 2%;}
.product_content_one{width:100%; height:auto; overflow: hidden;}
.product_content_one dl{width:100%; height: auto; overflow: hidden;}
.product_content_one dl dt{width: 100%; height: auto;}
.product_content_one dl dd{width:100%; height: auto; box-sizing:border-box; padding: 0.2rem 0.25rem; background: #fff;}
.product_content_one dl dd div{width:100%; height: 0.5rem;}
.product_content_one dl dd div p{float:left;}
.product_content_one dl dd div span,.product_content_one dl dd div s{float:right;}
.product_content_one dl dd div.nameyj p{font-size: 0.32rem; color: #333;}
.product_content_one dl dd div span{font-size: 0.28rem; color:#f00;}
.product_content_one dl dd div.namejj p{font-size: 0.24rem; color: #999;}
.product_content_one dl dd div s{color:#999;}

/* 100% */
.product_content_household{width:100%; padding: 0 0 2% 0;}

/* 产品模板 */
.product_content_list{width: 100%; height: auto; overflow: hidden;}
.product_content_list dl,dl.teledlb{width: 49.5%; height: auto; overflow: hidden; margin-top: 1%; float: left;}
.product_content_list dl:nth-child(odd),dl.teledlb:nth-child(odd){margin-right: 1%;}
.product_content_list dl dd,dl.teledlb dd{width:100%; height: auto; box-sizing: border-box; padding: 0.2rem 0.25rem; background: #fff;}
.product_content_list dl dd p,dl.teledlb dd p{width:100%; line-height: 1.5; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.product_content_list dl dd p.name{font-size: 0.28rem; color:#333;}
.product_content_list dl dd p.brief{color:#666;}
.product_content_list dl dd p.price{color:#f00;}
.product_content_list dl dd p.price s{color:#666;}

/* 分割线 */
.partition{width: 100%; height: 10px; background-color: rgb(245, 245, 245);}
</style>
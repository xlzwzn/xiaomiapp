<template>
<div class="home_product">
	<div v-for="itemlist in items">
		<!-- 标题 -->
		<div class="home_product_tit">
			<router-link to="/">
				<img v-for="item in itemlist[0].body.items" :src="item.img_url" alt="新品推荐" />
			</router-link>
		</div>
		
		<!-- 内容 -->
		<div class="home_product_content">
			<div class="home_product_content_one" v-for="item in itemlist[1].body.items">
				<router-link to="/detail">
					<img :src="item.img_url" />
				</router-link>
			</div>
			<div class="home_product_content_list">
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
		
		<!-- 更多 -->
		<div class="more" v-for="item in itemlist[3].body.items">
			<router-link to="/">{{item.action_title}}&gt;</router-link>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: ['items']
}
</script>

<style>
/* 产品模板 */
.home_product_content_list{width: 100%; height: auto; overflow: hidden;}
.home_product_content_list dl,dl.teledlb{width: 49.5%; height: auto; overflow: hidden; margin-top: 1%; float: left;}
.home_product_content_list dl:nth-child(odd),dl.teledlb:nth-child(odd){margin-right: 1%;}
.home_product_content_list dl dd,dl.teledlb dd{width:100%; height: auto; box-sizing: border-box; padding: 0.2rem 0.25rem; background: #fff;}
.home_product_content_list dl dd p,dl.teledlb dd p{width:100%; line-height: 1.5; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.home_product_content_list dl dd p.name{font-size: 0.28rem; color:#333;}
.home_product_content_list dl dd p.brief{color:#666;}
.home_product_content_list dl dd p.price{color:#f00;}
.home_product_content_list dl dd p.price s{color:#666;}

.more{width: 100%; height: 1.2rem; line-height: 1.2rem; text-align: center; border-top: 1px solid rgb(206, 206, 206);}
.more a{font-size: 0.28rem; color: rgba(0,0,0,.6);}
</style>
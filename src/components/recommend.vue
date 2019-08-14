<template>
<!-- 推荐 -->
<div class="recommend">
	<div class="recommend_top_img">
		 <img v-if="recommendBody" v-for="item in recommendBody" :src="item.img_url" alt="推荐" />
	</div>
	<div class="recommend_list">
		<dl v-for="item in recommendArray.recom_list" @click="biography(item.action.path)">
			<dt><img :src="item.image_url" :alt="item.name"></dt>
			<dd>
				<p class="name">{{item.name}}</p>
				<p class="price">
					<span>{{item.price}}</span>
					<s>{{item.market_price}}</s>
				</p>
			</dd>
		</dl>
	</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			recommendArray: [],
			recommendBody: []
		}
	},
	created() {
		console.log('猜你喜欢只有前6个点击进去内容是正确的，其余为上6个随机一个内容')
		axios('https://raw.githubusercontent.com/xlzwzn/xiaomi/master/data/recommendBlank.json').then((response) => {
			response = response.data
			if (response.code === 0) {
				this.recommendArray = response.data
				this.recommendBody = response.data.header.body.items
			}
		})
	},
	methods: {
		biography: function(item) {
			sessionStorage.setItem("biography", item)
			this.$router.push('/detail')
		}
	}
}
</script>

<style scoped>
.recommend_list{width: 100%; height: auto; overflow: hidden;}
.recommend_list dl,dl.teledlb{width: 49.5%; height: auto; overflow: hidden; margin-top: 1%; float: left;}
.recommend_list dl:nth-child(odd),dl.teledlb:nth-child(odd){margin-right: 1%;}
.recommend_list dl dd,dl.teledlb dd{width:100%; height: auto; box-sizing: border-box; padding: 0.2rem 0.25rem; background: #fff;}
.recommend_list dl dd p,dl.teledlb dd p{width:100%; line-height: 1.5; overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.recommend_list dl dd p.name{font-size: 0.3rem; color:#333;}
.recommend_list dl dd p.brief{color:#666;}
.recommend_list dl dd p.price{color:#f00;}
.recommend_list dl dd p.price s{color:#666;}
</style>
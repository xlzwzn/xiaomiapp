<!-- HomeHeader.vue -->
<template>
	<header>
		<div class="header">
			<div class="header_t">
				<div class="header_logo">MI</div>
				<div class="header_search"><input type="text" placeholder="搜索商品名称" /></div>
				<div class="header_person">个人</div>
			</div>
			<div class="swiper-container header_b">
				<ul class="swiper-wrapper">
					<!--<li class="swiper-slide cc">推荐</li>
					<li class="swiper-slide">手机</li>
					<li class="swiper-slide">智能</li>
					<li class="swiper-slide">电视</li>
					<li class="swiper-slide">电脑</li>
					<li class="swiper-slide">暑期大促</li>
					<li class="swiper-slide">双摄</li>
					<li class="swiper-slide">全名屏</li>
					<li class="swiper-slide">生活周边</li>
					<li class="swiper-slide">盒子</li>-->
					<li class="swiper-slide" v-for="img in inav">{{img}}</li>
				</ul>
			</div>
		</div>
		<div style="width:100%; height: 1.7rem;"></div>
	</header>
</template>

<style>
.header{width:100%; height: 1.7rem; background: #f1f1f1; position: fixed; top: 0; z-index: 9999;  box-shadow:0px 0px 10px #888888;}
.header_t{width:90%; height: 1rem; padding: 0 5%;}
.header_logo{width:5%; height: 1rem; line-height:1rem; text-align:center; float:left;}
.header_search{width:85%; height: 1rem; float: left;}
.header_search input{width:90%; height: 0.6rem; margin: 0.2rem 5%;}
.header_person{width:10%; height: 1rem; line-height:1rem; text-align:center; float: right;}
.header_b{width:100%; height:0.7rem; overflow: hidden;}
.header_b ul{width: 300%; height: 0.7rem; overflow-x: auto;}
.header_b ul li{width:auto; height: 0.7rem; line-height:0.7rem; margin: 0 0.3rem; float: left;}
.header_b ul li.cc{color:#ed5b00; box-sizing:border-box; border-bottom:0.05rem solid #ed5b00;}
</style>

<script>

export default {
	data() {
		return {
			inav: ['推荐', '手机', '智能', '电视', '电脑', '暑期大促', '双摄', '全面屏', '生活周边', '盒子']
		}
	},
	components: {
	}
}
</script>
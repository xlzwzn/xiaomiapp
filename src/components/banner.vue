<template>
	<div class="swiper-container_banner banner">
		<ul class="swiper-wrapper">
			<li class="swiper-slide" v-for="item in items">
				<img :src="item.img_url" />
			</li>
		</ul>
		<!-- Add Pagination -->
		<div class="swiper-pagination" v-show="items.length !== 1"></div>
	</div>
</template>

	

<script>
	import Swiper from 'swiper'
	
	export default{
		props: ['items'],
		data: function() {
			return {
			}
		},
		mounted() {
			new Swiper ('.swiper-container_banner', {
				pagination: {
			      el: '.swiper-pagination',
			   },
			}),
			new Swiper ('.swiper-container', {
				slidesPerView: 'auto',
			})
		}
	}
</script>

<style>
.banner{width:100%; height: auto; overflow: hidden; position: relative;}
</style>






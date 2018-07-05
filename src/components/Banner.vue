<template>
	<li class="swiper-slide">
		<router-link to="/article">
			<img v-bind:src="src" v-bind:alt="tit" />
		</router-link>
	</li>
</template>

<script>
	export default{
		props: ['src', 'tit']
	}
</script>

<style>
.banner{width:100%; height: auto; overflow: hidden; position: relative;}

</style>
<template>
	<div class="cat_header">
		<span v-on:click="goBack" class="return"><img src="../assets/img/icon_return.png" alt="返回" /></span>
		<p>{{ column }}</p>
		<router-link to="/search" class="search" v-if="iSsearch"><img src="../assets/img/icon_search.png" alt="搜索" /></router-link>
	</div>
</template>

<script>
	export default{
		props:["column", "iSsearch"],
		methods: {
			goBack(){
				window.history.back();
			}
		}
	}
</script>

<style scoped>
.cat_header{width:100%; max-width: 640px; height: 1rem; background: #f2f2f2; position: fixed; top: 0; z-index: 9999;}
.cat_header a,.cat_header span{width:10%; height: 1rem; line-height:1rem; text-align:center; display: block; float: left;}
.cat_header a img,.cat_header span img{width: 80%;}
.cat_header p{width:80%; height: 1rem; line-height: 1rem; font-size: 0.32rem; color: #666; text-align: center; float: left;}
</style>
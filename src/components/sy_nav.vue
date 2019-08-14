<template>
	<div class="menu clear">
		<ul class="aaa" v-for="item in items">
			<li v-for="itemlist in item.body.items">
				<router-link to="/">
					<img :src="itemlist.img_url" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props: ["items"]
	}
</script>

<style scoped>
.menu{width:100%; height: auto; overflow:hidden;}
.menu ul{width: 100%; height: auto;}
.menu ul li{width:20%; height: 1.5rem; float: left;}
</style>
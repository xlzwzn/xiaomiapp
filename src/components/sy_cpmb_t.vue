<template>
<div class="sy_cpmb_t">
	<router-link to="">
		<img v-bind:src="src" v-bind:alt="tit" />
	</router-link>
</div>
</template>

<script>
	export default{
		props: ["src", "tit"]
	}
</script>

<style>
</style>
<template>
	<router-link to="/">
		<img v-bind:src="src" v-bind:alt="name" />
	</router-link>
</template>

<script>
	export default{
		props:["src", "name"]
	}
</script>

<style>
</style>
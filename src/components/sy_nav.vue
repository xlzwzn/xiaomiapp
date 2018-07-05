<template>
	<li>
		<router-link to="/">
			<img v-bind:src="src" v-bind:alt="name" />
		</router-link>
	</li>
</template>

<script>
	export default{
		props: ["src", "name"]
	}
</script>

<style>
</style>
<template>
	<li>
		<router-link to="/">
			<img v-bind:src="src" v-bind:alt="name" />
			<p>{{ name }}</p>
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
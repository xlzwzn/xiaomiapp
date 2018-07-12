<template>
	<dl>
		<router-link to="/detail">
			<dt><img v-bind:src="src" v-bind:alt="name" /></dt>
			<dd>
				<div class="nameyj">
					<p>{{ name }}</p>
					<span>{{ present }}</span>
				</div>
				<div class="namejj">
					<p>{{ brief }}</p>
					<s>{{ original }}</s>
				</div>
			</dd>
		</router-link>
	</dl>
</template>

<script>
	export default{
		props: ["src", "name", "present", "brief", "original"]
	}
</script>

<style>

</style>
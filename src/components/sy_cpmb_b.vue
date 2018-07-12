<template>
	<dl class="product">
		<router-link to="/detail">
			<dt><img v-bind:src="src" v-bind:alt="name" /></dt>
			<dd>
				<p class="name">{{ name }}</p>
				<p class="brief">{{ brief }}</p>
				<P class="price">
					<span>{{ present }}</span>
					<s>{{ original }}</s>
				</P>
			</dd>
		</router-link>
	</dl>
</template>

<script>
	export default{
		props: ['src', 'name', 'brief', 'present', 'original']
	}
</script>

<style>
</style>
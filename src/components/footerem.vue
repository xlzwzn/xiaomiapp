<template>
	<em v-if="panelData.length">{{ panelData.length }}</em>
</template>

<script>
	import { mapGetters } from 'vuex'
export default{
	computed: {
		...mapGetters([
			'panelData'
		])
	}
}
</script>

<style>
</style>
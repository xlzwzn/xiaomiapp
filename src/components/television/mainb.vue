<template>
	<dl class="teledlb">
		<router-link to="/">
			<dt><img v-bind:src="src" v-bind:alt="name" /></dt>
			<dd>
				<p class="name">{{ name }}</p>
				<p class="brief">{{ brief }}</p>
				<p>
					<span>{{ present }}</span>
					<s>{{ original }}</s>
				</p>
				<router-link to="/">立即购买</router-link>
			</dd>
		</router-link>
	</dl>
</template>

<script>
	export default{
		props:["src", "name", "brief", "present", "original"]
	}
</script>

<style>
dl.teledlb dd{text-align: center; background: #fff;}
dl.teledlb dd p.name{line-height:1.5; font-size:16px; color: #333;}
dl.teledlb dd p.brief{line-height:1.5; font-size: 14px; color: #999;}
dl.teledlb dd p span{font-size:14px; color: #f00;}
dl.teledlb dd p s{font-size: 12px; color: #999;}
dl.teledlb dd a{width:70%; height: 0.7rem; line-height: 0.7rem; font-size: 16px; background: #f00; color: #fff; display: inline-block;}
</style>
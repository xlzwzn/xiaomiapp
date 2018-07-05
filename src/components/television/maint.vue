<template>
	<dl class="teledlt">
		<router-link to="/">
			<dt><img v-bind:src="src" v-bind:alt="name" /></dt>
			<dd>
				<div class="nameyj">
					<p>{{ name }}</p>
					<s>{{ original }}</s>
					<span>{{ present }}</span>
				</div>
				<div class="namejj">
					<p>{{ brief }}</p>
					<router-link to="/">立即购买</router-link>
				</div>
			</dd>
		</router-link>
	</dl>
</template>

<script>
	export default{
		props: ["src", "name", "present", "original", "brief"]
	}
</script>

<style>
dl.teledlt{width:100%; height: auto; margin-top: 1.5%; overflow: hidden; background: #fff;}
dl.teledlt dt{width: 100%; height: auto; overflow: hidden;}
dl.teledlt dd{width: 100%; height: auto; box-sizing: border-box; padding: 0.2rem 0.25rem;}
dl.teledlt dd .nameyj{width: 100%; height: 0.5rem;}
dl.teledlt dd .nameyj p{height:0.5rem; line-height:0.5rem; font-size:16px; color: #333; float: left;}
dl.teledlt dd .nameyj span{height:0.5rem; line-height:0.5rem; font-size: 14px; color: #f00; float: right;}
dl.teledlt dd .nameyj s{height:0.5rem; line-height:0.5rem; font-size: 12px; color: #999; float: right;}
dl.teledlt dd .namejj{width: 100%; height: 0.6rem;}
dl.teledlt dd .namejj p{height:0.6rem; line-height:0.6rem; font-size: 12px; color: #999; float: left;}
dl.teledlt dd .namejj a{width:2rem; height: 0.6rem; line-height: 0.6rem; text-align: center; font-size: 12px; font-weight: bold; color: #fff; background: #f00; display: block; float: right;}
</style>
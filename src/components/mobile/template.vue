<template>
	<div class="sj_main">
		<div class="sj_main_t">
			 <img src="../../assets/img/mobile/tit1.png" alt="标题1" />
		</div>
		<div class="sj_main_c">
			<router-link to="/">
				<img v-bind:src="src" v-bind:alt="name" />
			</router-link>
		</div>
		<div class="sj_main_b">
			<dl>
				<router-link to="/">
					<dt><img v-bind:src="src" v-bind:alt="name" /></dt>
					<dd>
						<p></p>
					</dd>
				</router-link>
			</dl>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>
<template>
	<div class="cat_main">
		<div class="cat_main_banner">
			<router-link to="/">
				<img v-bind:src="src" v-bind:alt="name" />
			</router-link>
		</div>
		<div class="cat_main_tit">
			<span>{{ titname }}</span>
		</div>
		<div class="cat_mains">
			<ul>
				<li>
					<router-link to="/">
						<img v-bind:src="src" v-bind:alt="name" />
						<p>{{ name }}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
.cat_main{width:100%; height:auto; overflow: hidden;}
.cat_main_banner{width: 100%; height: auto; overflow: hidden;}
.cat_main_tit{width:100%; height: 1.25rem; text-align: center;}
.cat_main_tit span{height:1.25rem; line-height:1.25rem; display:block; position: relative;}
.cat_main_tit span:before{content: ""; width: 0.5rem; border-top:1px solid #999; position: absolute; left: 0; top: 0.62rem;}
.cat_main_tit span:after{content: ""; width: 0.5rem; border-top:1px solid #999; position: absolute; right: 0; top: 0.62rem;}
.cat_mains{width: 100%; height: auto; overflow: hidden;}
.cat_mains ul{width:100%; height:auto; overflow: hidden;}
.cat_mains ul li{width:33.3333333333333%; height: auto; overflow: hidden; float: left;}
.cat_mains ul li p{width:100%; line-height:1.5; text-align:center; font-size: 14px; color: #999; padding: 0.3rem 0;}
</style>
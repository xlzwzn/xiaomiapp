<template>
	<li class="swiper-slide">
		<p v-on:click="irefgo(ihref)">{{ name }}</p>
	</li>
</template>

<script>
	export default{
		props: ["name", "ihref"],
		methods:{
			irefgo: function(dref){
				var ili = document.querySelectorAll(".swiper-slide");
				var iihref = window.location.pathname;
				window.location.href=iihref+dref;
				var ibud = dref.slice(10)-1;
				console.log(ibud);
				for(var i=0; i<ili.length; i++){
					ili[i].classList.remove("cc")
				};
				//ili.classList.remove("cc");
				ili[ibud].classList.add("cc");
			}
		}
	}
</script>

<style>
</style>
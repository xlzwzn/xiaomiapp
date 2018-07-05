<template>
	<div class="sy_tj bordertb clear">
		<div class="sy_tj_l">
			<router-link to="/sjxp">
				<img src="../assets/img/sy_tj1.jpg" alt="手机推荐" />
			</router-link>
		</div>
		<div class="sy_tj_c">
			<div class="sy_tj_c_t">
				<router-link to="/zncp">
					<img src="../assets/img/sy_tj2.jpg" alt="智能产品" />
				</router-link>
			</div>
			<div class="sy_tj_c_b">
				<router-link to="/dscp">
					<img src="../assets/img/sy_tj3.jpg" alt="电视产品" />
				</router-link>
			</div>
		</div>
		<div class="sy_tj_b">
			<router-link to="/">
				<img src="../assets/img/sy_tj4.jpg" alt="新品推荐" />
			</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style>
.sy_tj{width: 100%; height: auto; overflow: hidden;}
.sy_tj_l{width:49.5%; height: 5.3rem; float: left;}
.sy_tj_c{width: 49.5%; height: 5.3rem; float: right;}
.sy_tj_c_t{width:100%; height: 2.6rem;}
.sy_tj_c_b{width: 100%; height: 2.6rem; margin-top: 0.05rem;}
.sy_tj_b{width:100%; height: 3rem; border-top: 0.1rem solid #f1f1f1; float: left;}
</style>
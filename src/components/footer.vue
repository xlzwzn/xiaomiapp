<template>
	<footer class="footer">
		<ul>
			<li>
				<router-link to="/">
					<img src="../assets/img/icon_sy_h.png" />
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/category">
					<img src="../assets/img/icon_fl_h.png" />
					<p>分类</p>
				</router-link>
			</li>
			<li>
				<router-link to="/cart">
					<img src="../assets/img/icon_gwc_h.png" />
					<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/user">
					<img src="../assets/img/icon_wo_h.png" />
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	
</script>

<style>
.footer{width: 100%; height: 1.1rem; background: #fff; box-shadow:0px 0px 10px #888888; box-sizing: border-box; padding-top: 0.15rem; position: fixed; bottom: 0; z-index: 999;}
.footer ul{width: 100%; height: 1.1rem;}
.footer ul li{width: 25%; height: 1.1rem; text-align: center; float: left;}
.footer ul li img{width:25%; display: inline-block;}
.footer ul li p{width:100%; line-height: 2.5; font-size: 12px; color: #999;}
.footer1 ul li:first-child p{color:#f00;}
.footer2 ul li:nth-child(2) p{color:#f00;}
.footer3 ul li:nth-child(3) p{color:#f00;}
.footer4 ul li:last-child p{color:#f00;}
</style>
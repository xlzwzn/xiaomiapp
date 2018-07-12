<template>
	<div class="entry" id="entry">
		<div class="entry_logo"><img src="../assets/entry/logo.jpg" /></div>
		<div class="entry_name">小米账号登录</div>
		<div class="entry_form">
			<form>
				<ul>
					<li class="underline">
						<span>+86&gt;</span>
						<input type="text" value="" placeholder="手机号码" />
					</li>
					<li class="underline">
						<input type="text" value="" placeholder="短信验证码" />
						<router-link to="/user">获取验证码</router-link>
					</li>
					<li></li>
					<li><button type="submit">立即登录/注册</button></li>
					<li class="switch">用户名密码登录</li>
				</ul>
			</form>
		</div>
		
		<div class="entry_other">
			<div class="entry_other_tit">
				<fieldset>
					<legend align="center">其他方式登录</legend>
				</fieldset>
			</div>
			<div class="entry_other_qt">
				<ul>
					<li class="qq"><i></i></li>
					<li class="wb"><i></i></li>
					<li class="zfb"><i></i></li>
				</ul>
			</div>
		</div>
		
		<div class="entry_bottom">
			<p>简体</p>|
			<p>繁体</p>|
			<p>English</p>|
			<p>常见问题</p>|
			<p>隐私政策</p>
		</div>
	</div>
</template>

<script>
export default{
	mounted() {
		ihei()
	}
}
function ihei(){
	var ihe = document.documentElement.clientHeight; 
	document.getElementById("entry").style.height = ihe + "px";
}
</script>

<style>
body{background:#fff;}
.entry{width: 100%; height: 100%; box-sizing: border-box; padding: 6% 5%;}
.entry_logo{width:100%; height: 0.9rem; text-align: center;}
.entry_logo img{width: 0.9rem; height: 0.9rem; display: inline-block;}
.entry_name{width:100%; height: 1rem; line-height: 1rem; text-align:center; font-size: 18px; color: #000;}

.entry_form{width: 100%; height: auto; overflow: hidden;}
.entry_form ul li{width: 100%; height: 1rem;}
.entry_form ul li.underline{border-bottom: 1px solid #ddd;}
.entry_form ul li span,.entry_form ul li a{width: 23%; height: 1rem; line-height: 1rem; font-size: 18px; color: #999; display: block; float: left;}
.entry_form ul li a{font-size:14px; color:#2ea5e5; white-space: nowrap;}
.entry_form ul li input{width: 77%; height: 1rem; line-height: 1rem; font-size: 18px; color: #333; border: 0; float: left;}
.entry_form ul li button{width: 100%; height: 0.8rem; line-height: 0.8rem; text-align: center; font-size: 20px; color: #fff; background: #ff5400; border: 0; border-radius: 0.1rem;}
.entry_form ul li.switch{width: 100%; height: 0.8rem; line-height: 0.8rem; box-sizing: border-box; border: 1px solid #ddd; border-radius: 0.1rem; font-size: 20px; color: #333; text-align: center;}

.entry_other{width: 100%; height: auto; margin-top: 1rem;}
.entry_other_tit{width: 100%;}
.entry_other_tit fieldset{border: 0; border-top: 1px solid #ddd;}
.entry_other_tit fieldset legend{width: 25%; background:#fff; color: #999;}

.entry_other_qt{width:100%; height: 1rem;}
.entry_other_qt ul{width: 100%; height: 0.5rem; margin-top: 0.5rem; text-align: center; display: inline-block;}
.entry_other_qt ul li{width: 0.5rem; height: 0.5rem; border-radius: 50%; text-align: center; margin: 0 2%; display:inline-block;}
.entry_other_qt ul li i{width:18px; height:18px; background-image: url(../assets/entry/icons_type.png); background-repeat: no-repeat; margin-top: 14%; display: inline-block;}
.entry_other_qt ul li.qq{background-color: #72c7db;}
.entry_other_qt ul li.qq i{background-position: -18px 0;}
.entry_other_qt ul li.wb{background-color: #ed9090;}
.entry_other_qt ul li.wb i{background-position: -36px 0;}
.entry_other_qt ul li.zfb{background-color:#6bb6ea;}
.entry_other_qt ul li.zfb i{background-position: -57px 0;}

.entry_bottom{width: 100%; height: 0.5rem; text-align: center; color: #666; margin-top: 2rem;}
.entry_bottom p{line-height:0.5rem; color: #666; padding: 0 3%; display: inline-block;}
</style>
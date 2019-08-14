<template>
	<div class="entry" id="entry">
		<div class="entry_logo"><img src="../assets/entry/logo.jpg" /></div>
		<div class="entry_name">小米账号登录</div>
		<div class="entry_form">
			<form>
				<ul>
					<li class="underline">
						<input type="text" value="" v-model="loginForm.username" placeholder="账号" />
					</li>
					<li class="underline">
						<input type="password" value="" v-model="loginForm.password" placeholder="密码" />
					</li>
					<li></li>
					<li class="button" @click="login($event)">立即登录</li>
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
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'

export default{
	data() {
		return {
			loginForm: {
				username: 'xiaolan',
				password: '123456'
			},
			isLogin: false
		}
	},
	created(){
		console.log('有两个默认账号 xiaolan 123456 xiaoliang 1598648')
	},
	methods: {
		login: function(event) {
			let _this = this;
			var userName = this.loginForm.username.trim();
			var passWord = this.loginForm.password.trim()
			if (userName === '' || passWord === '') {
				alert('账号或密码不能为空')
			}	else {
				axios({
					method: 'get',
					url: 'https://raw.githubusercontent.com/xlzwzn/xiaomi/master/data/user.json',
					data: _this.loginForm,
					 // 向服务器发送请求钱，修改请求数据
					 transformRequest: function(data){
						 return data
					 },
					 // 在传递给 then/catch 前，允许修改响应数据
//					 transformResponse: function(res) {
//						 console.log(res.headers)
//					 }
				}).then(res => {	// 请求成功
					console.log(res)
					for (var i=0; i<res.data.data.length; i++) {
						if (userName === res.data.data[i].name && passWord === res.data.data[i].password) {
							sessionStorage.setItem("userId", res.data.data[i].id)
							alert('登录成功')
							window.history.back()
							// this.$router.push('/user')
							this.isLogin = true
							return
						}
					}
					if (!this.isLogin){
						alert('账号或密码错误')
					}
//					if (_this.loginForm.username === res.data.data.name && _this.loginForm.password === res.data.data.password) {
//						sessionStorage.setItem("username", _this.loginForm.username)
//						sessionStorage.setItem("authoRization", res.data.data.token)
//						sessionStorage.setItem("img_url", res.data.data.img_url)
//						this.authoRization(res.data.data.token)
//						this.userName(_this.loginForm)
//						alert('登录成功')
//						this.$router.push('/user')
//					} else {
//						alert('账号或密码错误')
//					}
			}).catch((error) => { //请求错误
						console.log(error)
					})
			}
		},
		...mapMutations({
			authoRization: 'AUTHO_RIZATION',
			userName: 'USER_NAME'
		})
	},
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
.entry_form ul li.button{width: 100%; height: 0.8rem; line-height: 0.8rem; text-align: center; font-size: 20px; color: #fff; background: #ff5400; border: 0; border-radius: 0.1rem; margin-bottom: 15px;}
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
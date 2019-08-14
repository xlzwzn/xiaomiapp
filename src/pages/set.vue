<template>
	<div>
		<Header :column="'个人中心'"></Header>

		<div class="app_view">
			<ul>
				<li v-for="item in viewList">
					<router-link :to="item.to">{{item.name}}</router-link>
				</li>
			</ul>
		</div>

		<div class="signOut" @click="signOut()">退出账号</div>
	</div>
</template>

<script>
import Header from 'components/header'

export default{
	data() {
		return {
			viewList: [
				{
					name: '地址管理',
					to: '/address'
				}, {
					name: '经营证照',
					to: ''
				}, {
					name: '协议规则',
					to: ''
				}, {
					name: '小米商城用户协议',
					to: ''
				}, {
					name: '小米帐号使用协议',
					to: ''
				}, {
					name: '隐私政策',
					to: ''
				}
			]
		}
	},
	created() {
		console.log('地址管理 及 退出账号 可点击，其他栏目页并未实现')
	},
	methods: {
		signOut: function() {
			sessionStorage.removeItem('userId')
			this.$router.push('/user')
		}
	},
	components: {
		Header
	}
}
</script>

<style scoped>
.signOut{width: 100%; height: 1rem; line-height: 1rem; text-align: center; font-size: 0.3rem; color: #3C3C3C; background: #F4F4F4; position: fixed; left: 0; bottom: 0;}

.app_view{padding-top: 1rem;}
.app_view ul{font-size: 0.3rem;}
.app_view ul li{padding: 0.2rem; border-bottom: 1px solid #f6f6f6;}
.app_view ul li a{color: #3C3C3C; display: block;}

</style>
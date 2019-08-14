// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'

// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// vuex
import store from './store'

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 关闭日志与警告
Vue.config.silent = false
Vue.config.productionTip = false

// 导入 pages 下的 Home.vue 
import Home from './pages/Home'
import Category from './pages/category'
import Cart from './pages/cart'
import User from './pages/user'
import Entry from './pages/entry'
import Search from './pages/search'

// 二级导航
import Set from './pages/set'
import Detail from './pages/Detail'
import Address from './pages/address'
import Checkout from './pages/checkout'

// 三级导航
import Edit from './pages/edit'

// 导入外部js及css
import'./scss/swiper.min.css'
import'./scss/currency.css'


// import Websocket from './sjs/swiper.min.js'
// Vue.prototype.Websocket = Websocket



// 定义路由配置
const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/detail',
		component: Detail
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/user',
		component: User,
		beforeEnter: (to, from, next) => {
			let userId = sessionStorage.getItem("userId")
			if (userId === null || userId == '') {
				next('/entry')
			} else {
				next()
			}
		}
//		children: [
//			{
//				path: '/user/set',
//				component: Set
//			}
//		]
	},
	{
		path: '/user/set',
		component: Set
	},
	{
		path: '/address',
		component: Address
	},
	{
		path: '/edit',
		component: Edit
	},
	{
		path: '/entry',
		component: Entry
	},
	{
		path: '/search',
		component: Search
	},
	{
		path: '/checkout',
		component: Checkout,
		beforeEnter: (to, from, next) => {
			let userId = sessionStorage.getItem("userId")
			if (userId === null || userId == '') {
				next('/entry')
			} else {
				next()
			}
		}
	}
]

// 创建路由实例
const router = new VueRouter({
	// mode: 'history',
	routes
})

//router.beforeEach((to, from, next) => {
//	if (to.path === '/entry') {
//		next();
//	} else {
//		let userId = sessionStorage.getItem("userId")
//		if (userId === null || userId == '') {
//			next('/entry');
//			console.log(userId)
//		} else {
//			next();
//		}
//	}
//})

// 创建 Vue 实例
new Vue({
  el: '#app',
  data(){
  	return {
  		transitionName: 'slide'
  	}
  },
  router,
  store,
  watch: {
  	'$route' (to, from){
  		const toDepth = to.path.substring(0, to.path.length-2).split('/').length
  		const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
  		this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
  	}
  }
})

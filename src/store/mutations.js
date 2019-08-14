import * as types from './mutation-types'
import Vue from 'vue'

const mutations = {
	[types.PANEL_DATA](state, panelData) {
		Vue.set(state, 'panelData', panelData)
		// state.panelData = panelData
		// console.log(state.panelData)
	},
	[types.AUTHO_RIZATION](state, authoRization) {
		state.authoRization = authoRization
		console.log(state.authoRization)
	},
	[types.USER_NAME](state, userName) {
		state.userName = userName
	},
	[types.SEARCH_DETAIL](state, searchDetail){
		Vue.set(state, 'searchDetail', searchDetail)
		// state.searchDetail = searchDetail
	},
	[types.SEARCH_RECORD](state, searchRecord) {
		Vue.set(state, 'searchRecord', searchRecord)
	},
	[types.ADDRESS](state, address) {
		Vue.set(state, 'address', address)
	},
	[types.ISTF](state, istf) {
		Vue.set(state, 'istf', istf)
	},
	[types.ADDRESS_ID](state, addressID) {
		Vue.set(state, 'addressID', addressID)
	},
	[types.NAV_ID](state, navID) {
		Vue.set(state, 'navID', navID)
	}
}

export default mutations
//
//addCarPanelData(state,加入购物车的数据data){
//	//循环carPanelData购物车数据
//	//如果商品ID存在(购物车的id和传进来的ID比对)，就设置count++
//	//设置开关false
//	//**注意** ： 如果上面的条件成立，以下是不执行的，所以可以设置一个开关bOff
//	//如果开关值为true
//	//否则就是商品ID不存在，设置一个新的变量goodsData = 传进来的data；
//	//Vue.set(goodsData,'count',1):为这个变量设置count属性，值为1；
//	//将这个goodsData，push到carPanelData中；
//	} 
//	mutations: {
//		addCarPanelData (state, data) {
//			let bOff = true
//			state.carPanelData.forEach((goods) => {
//				if(goods.sku_id === data.sku_id) {
//					goods.count++
//					bOff = false
//				}
//			})
//			if(bOff) {
//				letgoodsData = data
//				Vue.set(goodsData,'count',1)
//				state.carPanelData.push(goodsData)
//			}
//			console.log(state.carPanelData)
//		}
//	}

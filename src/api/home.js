import axios from 'axios'

import Vue from 'vue'

var ERR_OK = 0


export function homeJsonFun(index) {
	var homeJsonName = ['home', 'phone', 'intelligence', 'tv', 'notebook', 'household', 'periphery']
	var ihome = []
	axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/' + homeJsonName[index] + '.json').then((response) => {
		response = response.data
		if (response.code === ERR_OK) {
			ihome.push(response.data.data.sections)
		}
	})
	return ihome
}


export function homejson(menu, parameter) {
	let inaa = []
	menu.forEach(function(item, index) {
		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/' + item + '.json').then((response) => {
			response = response.data
			if (response.code === ERR_OK) {
				inaa[index] = {
					list: response.data.data.sections,
					listif: parameter[index]
				}
				if(inaa.length <= 6) { 
					inaa.push(inaa[index])
				}
				inaa.push(inaa[index])
			}
		})
	})
	return inaa
}

export function searchDataFun(menu) {
	let inav = []
	menu.forEach(function(item, index) {
		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/detail/' + item + '.json').then((response) => {
			response = response.data
			if (response.code === ERR_OK) {
				inav[index] = {
					img_url: response.data.goods_info[0].img_url,
					name: response.data.goods_info[0].name,
					price: response.data.goods_info[0].price,
					commodity_id: response.data.goods_info[0].commodity_id,
					description: response.data.seo.description,
					assess_list: response.data.goods_share_datas.comments.total
				}
				if(index < menu.length-1) {
					inav.push(inav[index])
				}
			}
		})
	})
//	for (var i=0; i<menu.length-1; i++) {
//		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/detail/' + menu[i] + '.json').then((response) => {
//			response = response.data
//			if (response.code === ERR_OK) {
//				inav[i] = {
//					img_url: response.data.goods_info[0].img_url,
//					name: response.data.goods_info[0].name,
//					price: response.data.goods_info[0].price,
//					commodity_id: response.data.goods_info[0].commodity_id,
//					description: response.data.seo.description,
//					assess_list: response.data.goods_share_datas.comments.total
//				}
//				inav.push(inav[i])
//			}
//		})
//	}
	return inav
}


//export function homejson(menu, parameter) {
//	let inaa = []
//	console.log(menu.length)
//	for (var j=0; j<menu.length-1; j++) {
//		axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/' + menu[j] + '.json').then((response) => {
//			response = response.data
//			if (response.code === ERR_OK) {
//				console.log(j)
//				inaa[j] = {
//					list: response.data.data.sections,
//					listif: parameter[j]
//				}
//				inaa.push(inaa[j])
//			}
//		})
//	}
//	return inaa
//}


const state = {
	// 购物车数据
	panelData: [],
	// 登录状态
	authoRization: '',
	// 用户信息
	userName: {},
	// 产品详情页返回搜索页面带回的数据
	searchDetail: '',
	// 搜索记录
	searchRecord: [],
	// 收货地址
	address: [],
	// 是否重新编辑收货地址
	istf: '',
	// 结算页面收货地址ID
	addressID: '',
	// navID
	navID: 0
	
}


// AuthoRization: sessionStorage.getItem("username") ? sessionStorage.getItem("username") : '',
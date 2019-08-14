<template>
	<div class="edit">
		<Header :column="'新增地址'" :iSsearch="false"></Header>
		
		<!-- 新建收货地址 -->
		<div class="address_manager">
			<ul>
				<li>
					<div class="managerName">收货人：</div>
					<div class="managerInput">
						<input type="text" placeholder="真实姓名" v-model="name" maxlength="15" />
					</div>
				</li>
				<li>
					<div class="managerName">手机号：</div>
					<div class="managerInput">
						<input type="text" placeholder="手机号" v-model="tel" maxlength="11" />
					</div>
				</li>
				<li>
					<div class="managerName">所在地区：</div>
					<div class="managerInput">
						<input type="text" placeholder="省 市 区 街道信息" v-model="region" maxlength="20" @focus="geoinfoOpen()" @click="geoinfoOpen()" />
					</div>
				</li>
				<li>
					<div class="managerName">详细地址：</div>
					<div class="managerInput">
						<input type="text" placeholder="详细地址" v-model="detailed" maxlength="40" />
					</div>
				</li>
				<li>
					<div class="managerName">设置为默认地址</div>
					<label class="managerLabel">
						<input type="checkbox" v-model="isDefault" />
					</label>
				</li>
			</ul>
		</div>
		<div class="geoinfo" ref="geoinfoClass">
			<div class="geoinfo_bcg"></div>
			<div class="geoinfo_con">
				<div class="geoinfo_tit">
					<p>选择地址</p>
					<span @click="geoinfoClose()">x</span>
				</div>
				<div class="content">
					<div class="geoinfo_tab">
						<span v-for="(item, index) in geoinfoList" @click="findParent(geoinfofuben, item.adcode)">{{item.name}}</span>
						<span class="cc">请选择</span>
					</div>
					<div class="geoinfo_list">
						<ul>
							<li v-for="(item, index) in geoinfo" @click="geoinfoFun(item.name, item.adcode, item.level, index)">
								{{ item.name }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="add" @click="add">保存地址</div>
	</div>
</template>

<script>
import axios from 'axios'

import Header from 'components/header'

import { mapMutations, mapGetters } from 'vuex'

export default{
	data() {
		return {
			name: '',	// 收货人姓名
			tel: '',	// 收货人电话
			region: [],	// 所在地区
			detailed: '', // 详细地址
			isDefault: true,	// 是否设置为默认地址
			correct: false,	// 判断用户输入信息是否符合
			geoinfo: '',	// 地理信息 
			geoinfoList: [],	// 暂存地理信息
			isgeoinfo: false,
			geoinfofuben: ''
		}
	},
	created() {
		this.axiosFun()
		this.againEdin()
	},
	computed: {
		...mapGetters([
			'address',
			'istf',
			'addressID'
		])
	},
	methods: {
		axiosFun: function() {
			axios('https://raw.githubusercontent.com/xlzwzn/xiaomiapp/master/data/geoinfo-all.json').then((response) => {
				if(response.status == '200') {
					this.geoinfo = response.data
					this.geoinfofuben = response.data
				}
			})
		},
		// 重新选择地区
		findParent: function(arr, name) {
			var _this = this,
			hasParentId = function loop(arr) {
				return arr.some((item) => {
					var arrIndex = _this.geoinfoListFun(_this.geoinfoList, name)
					if(item.adcode == name){
						_this.geoinfoList.splice(arrIndex, _this.geoinfoList.length)
						_this.geoinfo = arr
						return true
					} else if(Array.isArray(item.districts)) {
						return loop(item.districts)
					} else {
						return false
					}
				})
			}(arr)
		},
		// 检查 geoinfoList 的数据
		geoinfoListFun: function(arr, name) {
			for(var i=0; i<arr.length; i++) {
				if(arr[i].adcode == name) {
					return i
				}
			}
		},
		// 重新编辑
		againEdin: function() {
			if(this.istf) {
				var thisAddress = this.address[this.addressID]
				this.name = thisAddress.name
				this.tel = thisAddress.tel
				this.region = thisAddress.region
				this.detailed = thisAddress.detailed
				this.isDefault = thisAddress.isDefault
				this.correct = thisAddress.correct
			}
		},
		// 关闭地区选择
		geoinfoClose: function() {
			this.$refs.geoinfoClass.style.display = 'none'
		},
		// 开启地区选择
		geoinfoOpen: function() {
			if(this.isgeoinfo) {
				this.region = []
				this.geoinfoList = []
				this.axiosFun()
			}
			this.$refs.geoinfoClass.style.display = 'block'
		},
		// 地区选择
		geoinfoFun: function(item, adcode, level, index) {
			if (this.geoinfo[index].districts.length > 0) {
				this.geoinfo = this.geoinfo[index].districts
				this.geoinfoList.push({
					'adcode': adcode,
					'name': item,
					'level': level
				})
			} else {
				this.geoinfo = this.geoinfo[index].districts
				this.geoinfoList.push({
					'adcode': adcode,
					'name': item,
					'level': level
				})
				var _this = this
				for(var i=0; i<this.geoinfoList.length; i++) {
					_this.region.push(this.geoinfoList[i].name)
				}
				this.isgeoinfo = true
				this.$refs.geoinfoClass.style.display = 'none'
			}
			// console.log(this.geoinfo[index].districts, item)
		},
		// 提交信息
		add: function() {
			this.judge()
			if(this.correct) {
				var addressobj = this.address ? this.address : []
				addressobj.push({
					name: this.name,
					tel: this.tel.substring(0, 3) + '****' + this.tel.substring(7),
					region: this.regionFun(),
					detailed: this.detailed,
					isDefault: this.isDefault
				});
				// 如果是重新编辑，便替换内容
				if(this.istf) {
					addressobj.splice(this.addressID, 1)
				}
				this.addressFun(addressobj)
				window.history.back();
			}
		},
		regionFun: function() {
			if(typeof(this.region) == 'string') {
				return this.region
			} else {
				return this.region.join(' ')
			}
		},
		judge: function() {
			var regTel = /^(13|14|15|17|18)[0-9]{9}/
			if(this.name == '') {
				alert('请填写收货人姓名')
				return
			}
			if(!(regTel.test(this.tel)) && this.tel.length != 11) {
				alert('请输入11位电话号')
				return
			}
			if(this.region == '') {
				alert('请选择所在地区')
				return
			}
			if(this.detailed == '') {
				alert('请填写详细地址')
				return
			}
			this.correct = true
		},
		...mapMutations({
			addressFun: 'ADDRESS'
		})
	},
	components: {
		Header
	}
}
</script>

<style scoped>
.geoinfo{font-size: 0.24rem; display: none;}
.geoinfo_bcg{width: 100%; max-width: 640px; position: fixed; top: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); z-index: 100;}
.geoinfo_con{width: 100%; max-width: 640px; position: fixed; top: auto; bottom: 0; background: #fff; z-index: 101;}
.geoinfo_tit{width: 100%; height: 1rem; font-size: 0.3rem; text-align: center; position: relative;}
.geoinfo_tit p{width:100%; line-height: 1rem; position: absolute; left: 0; top: 0;}
.geoinfo_tit span{width: 1rem; height: 1rem; line-height: 1rem; position: absolute; top: 0; right: 0;}
.content{width:100%;}
.geoinfo_tab{padding: 0 0.2rem; border-bottom: 1px solid #F6F6F6;}
.geoinfo_tab span{padding: 0.15rem; display: inline-block;}
.geoinfo_tab span.cc{border-bottom: 2px solid #f60; color: #f60;}
.geoinfo_list{height: 4rem; overflow: scroll;}
.geoinfo_list ul{padding: 0.1rem 0.2rem;}
.geoinfo_list ul li{padding: 0.1rem 0.15rem; display: block;}

.add{width: 100%; max-width: 640px; height: 1rem; line-height: 1rem; text-align: center; font-size: 0.3rem; color: #fff; background: #ff6700; position: fixed; bottom: 0;}

.address_manager{padding-top: 1rem;}
.address_manager ul{}
.address_manager ul li{font-size: 0.28rem; padding: 0.2rem 0.3rem; border-bottom: 1px solid #f6f6f6; display: -webkit-box; -webkit-box-align: center;}
.address_manager ul li .managerName{}
.address_manager ul li .managerInput input{width: 100%; font-size: 0.28rem; padding:0.18rem 0.3rem; border: 0;}
.address_manager ul li .managerLabel{width: 100%; display: block; -webkit-box-flex: 1; text-align: right;}
.address_manager ul li .managerLabel input{display: inline;}
</style>
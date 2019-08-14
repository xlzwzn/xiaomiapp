<template>
	<div class="address">
		<Header :column="'收货地址'"></Header>
		
		<div class="view_wrap">
			<div class="ui_card" v-for="(item, index) in address">
				<ul>
					<li class="identity">
						<span class="consignee">{{ item.name }}</span>
						<span>{{ item.tel }}</span>
						<span class="delete" @click="deleteFun(index)">删除</span>
						<em v-if="item.isDefault">[默认]</em>
					</li>
					<li class="edit" @click="editFun(index)">
						<p>{{ item.region }}</p>
						<p>{{ item.detailed }}</p>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="add" @click="editFun(-1)">新建地址</div>
	</div>
</template>

<script>
import Header from 'components/header'

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default{
	data() {
		return {
		}
	},
	created() {
		console.log('可新增，删除，重新编辑地址')
		this.receiving()
	},
	watch: {
		name: function() {
			// console.log(this.name)
		}
	},
	methods: {
		// 删除
		deleteFun: function(index) {
			this.address.splice(index, 1)
			this.addressFun(this.address)
		},
		// 判断默认收货地址
		receiving: function() {
			if(!this.address){
				return
			}
			var addressLength = this.address.length-1
			for(var i=addressLength; i>=0; i--) {
				if(this.address[i].isDefault) {
					var newaddressA = this.address[i]
					this.address.splice(i, 1)
					for(var j=0; j<this.address.length; j++) {
						this.address[j].isDefault = false
					}
					this.address.splice(0, 0, newaddressA)
					return
				}
			}
		},
		// 新建地址
		editFun: function(index) {
			// var typei = window.location.search.substring(6);
			var typei = window.location.href.substr(-8);
			var _this = this
			if(index == '-1') {
				_this.addressIDFun({
						istf: false,
						index: this.addressID
					})
				this.$router.push('/edit')
			} else {
				if(typei === 'checkout') {
					_this.addressIDFun({
						istf: false,
						index
					})
					window.history.back();
				} else {
					_this.addressIDFun({
						istf: true,
						index
					})
					this.$router.push('/edit')
				}
			}
		},
		...mapMutations({
			addressFun: 'ADDRESS'
		}),
		...mapActions([
			'addressIDFun'
		])
	},
	computed: {
		...mapGetters([
			'address',
			'addressID'
		])
	},
	components: {
		Header
	}
}
</script>

<style scoped>
.add{width: 100%; max-width: 640px; height: 1rem; line-height: 1rem; text-align: center; font-size: 0.3rem; color: #fff; background: #ff6700; position: fixed; bottom: 0;}

.view_wrap{width: 100%; max-width: 640px; position: fixed; top: 1rem; bottom: 1rem; background: #fff; overflow: scroll;}
.ui_card{margin: 0.2rem; border: 1px solid #F6F6F6;}
.ui_card ul{padding: 0 0.2rem;}
.ui_card ul li{padding: 0.2rem 0.3rem;}
.ui_card ul li.identity{font-size: 0.28rem; border-bottom: 1px solid #F6F6F6;}
.ui_card ul li.identity .consignee{color: #f00; margin-right: 0.6rem;}
.ui_card ul li.identity .delete{color: #999; float: right;}
.ui_card ul li.identity em{font-size: 0.2rem; color: #f60; margin-right: 0.5rem; font-style: normal;}
.ui_card ul li.edit{font-size: 0.24rem; padding-right: 0.5rem; position: relative;}
.ui_card ul li.edit p{line-height: 0.36rem; white-space: nowrap; text-overflow: ellipsis;}
.ui_card ul li.edit:after{content: ''; width: 0.14rem; height: 0.14rem; position: absolute; right: 0.14rem; top: 50%; margin-top: -0.07rem; border-right: 1px solid #999; border-bottom: 1px solid #999; transform: rotate(-45deg);}

</style>
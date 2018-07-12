<!-- Detail.vue -->
<template>
	<div class="detail">
		<div class="detail_head">
			<div class="detail_head_t">
				<span @click="goreturn">&lt;</span>
				<p @click="share"><img src="../assets/details/icon_fx.png" /></p>
			</div>
			<div class="swiper-container detail_head_c">
				<ul class="swiper-wrapper">
					<li class="swiper-slide"><img src="../assets/details/cp1.jpg" /></li>
					<li class="swiper-slide"><img src="../assets/details/cp2.jpg" /></li>
					<li class="swiper-slide"><img src="../assets/details/cp3.jpg" /></li>
					<li class="swiper-slide"><img src="../assets/details/cp4.jpg" /></li>
				</ul>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="detail_time">
			<div class="detail_time_l">￥2699</div>
			<div class="detail_time_r">
				<p>距预约结束</p>
				<div id="times"></div>
			</div>
		</div>
		
		<div class="detail_info">
			<div class="detail_info_name">小米8</div>
			<div class="detail_info_brief"><font color="#f00">「上市感恩回馈！明日早10点开售」</font>全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏   【抢购以最终支付成功为准，加入购物车后请尽快付款，避免抢购失败】</div>
			<div class="detail_info_price">{{ iprice }}</div>
		</div>
		
		<div class="fgxe"></div>
		
		<div class="detail_config">
			<div class="detail_config_pz" @click="open()">
				<div class="detail_config_pz_l">已选</div>
				<div class="detail_config_pz_r">{{ isize }} {{ icolor }}</div>
			</div>
			<div class="detail_config_pz">
				<div class="detail_config_pz_l">送至</div>
				<div class="detail_config_pz_r">北京市 西城区</div>
			</div>
			<div class="detail_config_sm">
				<span>7天无理由退货</span>
				<span>15天质量问题换货</span>
				<span>365天保修</span>
			</div>
		</div>
		
		<div class="fgxe"></div>
		
		<div class="detail_config_pop" id="popup">
			<div class="detail_config_pop_t">
				<div class="detail_config_pop_t_gb" @click="close()">x</div>
				<div class="detail_config_pop_t_cp">
					<div class="detail_config_pop_t_cp_img"><img src="img" /></div>
					<div class="detail_config_pop_t_cp_xx">
						<span>{{ iprice }}</span>
						<p>{{ isize }} {{ icolor }}</p>
					</div>
				</div>
				<dl class="detail_config_pop_bb">
					<dt>版本</dt>
					<dd>
						<input type="radio" id="size1" value="6GB+64GB 全网通" v-model="isize" />
						<label for="size1" class="sizel">6GB+64GB 全网通</label>
						<input type="radio" id="price1" value="2699元" v-model="iprice" />
						<label for="price1" class="sizer">2699元</label>
					</dd>
					<dd>
						<input type="radio" id="size2" value="6GB+128GB 全网通" v-model="isize" />
						<label for="size2" class="sizel">6GB+128GB 全网通</label>
						<input type="radio" id="price2" value="2999元" v-model="iprice" />
						<label for="price2" class="sizer">2999元</label>
					</dd>
					<dd>
						<input type="radio" id="size3" value="6GB+256GB 全网通" v-model="isize" />
						<label for="size3" class="sizel">6GB+256GB 全网通</label>
						<input type="radio" id="price3" value="3299元" v-model="iprice" />
						<label for="price3" class="sizer">3299元</label>
					</dd>
				</dl>
				<dl class="detail_config_pop_ys">
					<dt>颜色</dt>
					<dd>
						<input type="radio" id="color1" value="黑色" v-model="icolor" />
						<label for="color1">黑色</label>
						<input type="radio" id="color2" value="白色" v-model="icolor" />
						<label for="color2">白色</label>
						<input type="radio" id="color3" value="金色" v-model="icolor" />
						<label for="color3">金色</label>
						<input type="radio" id="color4" value="蓝色" v-model="icolor" />
						<label for="color4">蓝色</label>
					</dd>
				</dl>
			</div>
			<div class="detail_config_pop_b">明天十点开售</div>
		</div>
	
		<div class="comment">
			<div class="comment_tit">
				<div class="comment_titl">用户评价(1653)</div>
				<div class="comment_titr">98.6%满意</div>
			</div>
			<div class="comment_main">
				<div class="comment_main_user">
					<dl class="comment_main_user_l">
						<dt><img src="../assets/details/touxiang.jpg" /></dt>
						<dd>
							<p>涂涂看风景</p>
							<span>2018-07-04</span>
						</dd>
					</dl>
					<div class="comment_main_user_r">超爱</div>
				</div>
				
				<div class="comment_main_con">从小米4到米5再到米8，一直都是小米的忠实粉丝，嗯，小米8果然没让人失望，全面屏特别有感觉，手感也很好，棒棒哒！</div>
				<div class="comment_main_tu">
					<img src="../assets/details/plt1.jpg" />
					<img src="../assets/details/plt2.jpg" />
				</div>
			</div>
		</div>
		
		<div class="fgxe"></div>
		
		<div class="product">
			<div class="product_t">
				<p  v-for="(img,index) in productp" :class="{cc:index == num}" @click="tab(index)">{{ img }}</p>
			</div>
			<div class="product_b">
				<div class="product_bs">
					<img src="../assets/details/gs1.jpg" />
					<img src="../assets/details/gs2.jpg" />
					<img src="../assets/details/gs3.jpg" />
					<img src="../assets/details/gs4.jpg" />
					<img src="../assets/details/gs5.jpg" />
				</div>
				<div class="product_bs">
					<img src="../assets/details/cs1.jpg" />
					<img src="../assets/details/cs2.jpg" />
					<img src="../assets/details/cs3.jpg" />
					<img src="../assets/details/cs4.jpg" />
					<img src="../assets/details/cs5.jpg" />
					<img src="../assets/details/cs6.jpg" />
				</div>
			</div>
		</div>
		
		<div class="fgx"></div>
		
		<!-- 推荐 -->
		<div class="sj_main">
			<div class="sj_main_t">
				 <img src="../assets/details/tit1.jpg" alt="推荐" />
			</div>
			<div class="sj_main_b">
				<sy-cpmb-b v-for="img in cart" :src="img.src" :name="img.name" :present="img.present" :original="img.original"></sy-cpmb-b>
			</div>
		</div>
		
		<div class="detail_button">
			<dl>
				<dd>
					<router-link to="/">
						<img src="../assets/img/icon_sy_h.png" />
						<p>首页</p>
					</router-link>
					<router-link to="/cart">
						<img src="../assets/img/icon_gwc_h.png" />
						<p>购物车</p>
					</router-link>
				</dd>
				<dt><router-link to="/entry">加入购物车</router-link></dt>
			</dl>
		</div>
		
		<div class="bottomh"></div>
				
		<div class="gotop" id="gotop" @click="gotop()"><img src="../assets/details/icon_top.png" /></div>
	</div>
</template>



<style>

.detail_button{width: 100%; max-width: 640px; height: 1rem; position: fixed; bottom: 0; z-index: 999;}
.detail_button dl{width: 100%; height: 1rem; background: #fff;}
.detail_button dl dd{width: 40%; padding-top: 0.2rem; float: left;}
.detail_button dl dd a{width: 50%; height: 1rem; text-align: center; display:block; float: left;}
.detail_button dl dd a img{width: 28%;}
.detail_button dl dd a p{line-height:1.5; color:#333;}
.detail_button dl dt{width: 60%; height: 1rem; line-height: 1rem; text-align: center; font-size: 14px; color: #fff; background: #f00; float: right;}
.detail_button dl dt a{color:#fff;}

.gotop{width: 0.8rem; height: 0.8rem; position: fixed; right: 5%; bottom: 10%; z-index: 9999; display: none;}
</style>

<script>
import SyCpmbB from '../components/sy_cpmb_b'

import Swiper from 'swiper'

var tiimesl = new Date(2018,6,13,10,0,0)
var tiimesr = new Date()
var tiimes = tiimesl - tiimesr
export default {
	data() {
		return {
			productp: ['概述', '参数'],
			num: 0,
			icolor: '黑色',
			isize: '6GB+64GB 全网通',
			iprice: '2699元',
			cart: [
				{ src: require('../assets/img/cart/cp1.jpg'), name: '小米6X 4GB+64GB', present: '￥1599', original:''},
				{ src: require('../assets/img/cart/cp2.jpg'), name: '红米Note 5 4GB+64GB', present: '￥1399', original:''},
				{ src: require('../assets/img/cart/cp3.jpg'), name: '小米MIX 2S 8GB+256GB', present: '￥3999', original:''},
				{ src: require('../assets/img/cart/cp4.jpg'), name: '小米MIX 2S 真皮保护套', present: '￥99', original:''},
				{ src: require('../assets/img/cart/cp5.jpg'), name: '米粉卡日租卡', present: '￥50', original:''},
				{ src: require('../assets/img/cart/cp6.jpg'), name: '小米影视会员卡', present: '￥498', original:''},
				{ src: require('../assets/img/cart/cp7.jpg'), name: '米家驱蚊器', present: '￥59', original:''},
				{ src: require('../assets/img/cart/cp8.jpg'), name: '小米8 SE 4GB+64GB', present: '￥1799', original:''},
				{ src: require('../assets/img/cart/cp9.jpg'), name: '空净滤芯家庭套装', present: '￥278', original:'￥328'},
				{ src: require('../assets/img/cart/cp10.jpg'), name: '小米MIX 2S 硅胶保护套 ', present: '￥59', original:''},
			]
		}
	},
	mounted() {
		new Swiper ('.swiper-container', {
			pagination: {
		      el: '.swiper-pagination',
		   }
		}),
		countDown(tiimes),
		window.addEventListener('scroll', this.scrollFunction)
	},
	methods: {
		goreturn: function() {
			window.history.back()
		},
		open: function() {
			document.getElementById('popup').style.bottom = '0'
		},
		close: function(){
			document.getElementById('popup').style.bottom = '-75%'
		},
		tab: function(index) {
			this.num = index
			var tabbodys = document.querySelectorAll('.product_bs'),
				len = tabbodys.length
			for(var i=0; i<len; i++){
				tabbodys[i].style.height = 0
			}
			tabbodys[this.num].style.height = 'auto'
		},
		gotop: function() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
		scrollFunction: function(){
			if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
				document.getElementById('gotop').style.display = 'block'
			}else{
				document.getElementById('gotop').style.display = 'none'
			}
		},
		share: function(){
			alert('啦啦啦,暂时没实现此功能')
		}
	},
	components: {
		SyCpmbB
	}
}



function countDown(times) {
  var timer=null
    var day=0,
      hour=0
      // minute=0,
      // second=0;//时间默认值
    if(times > 0) {
      day = Math.floor(times / (60 * 60 * 24 * 1000))
      hour = Math.floor(times / (60 * 60 * 1000)) - (day * 24)
      // minute = Math.floor(times / (60 * 1000)) - (day * 24 * 60) - (hour * 60);
      // second = Math.floor(times / 1000) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (day <= 9) day = '0' + day
    if (hour <= 9) hour = '0' + hour
    // if (minute <= 9) minute = '0' + minute;
    // if (second <= 9) second = '0' + second;
    document.getElementById('times').innerHTML = day+'天:'+hour+'时' //+minute+'分:'+second+'秒';
    times--
}





</script>







	

<template>
	<div style="background:#fff;">
		<cat-header :column="cathead"></cat-header>
		
		<div class="category">
			<div class="swiper-container category_left">
				<ul class="swiper-wrapper">
					<Left v-for="(item,index) in leftname" :name="item.name" :ihref="item.iref" :class="{cc:index == num}" @click="tabe(index)"></Left>
					
				</ul>
			</div>
			
			<div class="category_right">
				<div id="categrouy1">
					<!-- 新品_手机 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/detail">
								<img src="../assets/cat/xp_banner1.jpg" alt="小米6X" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>手机</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod1sj" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 新品_电视 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>电视</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod1ds" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 新品_电脑 -->
					<div class="cat_main">
					<div class="cat_main_tit">
						<span>电脑</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod1dn" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy2">
					<!-- 手机_小米手机 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner2.jpg" alt="红米6 Pro" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>小米手机</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod2xm" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 手机_红米手机 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>红米手机</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod2hm" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 手机_移动4G+专区 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>移动4G+专区</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod2yd" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 手机_手机配件 -->
					<div class="cat_main">
					<div class="cat_main_tit">
						<span>手机配件</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod2pj" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy3">
					<!-- 电视_电视 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner3.jpg" alt="小米电视4A" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>电视</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod3ds" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 电视_盒子 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>盒子</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod3hz" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 电视_电视配件与会员 -->
					<div class="cat_main">
					<div class="cat_main_tit">
						<span>电视配件与会员</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod3pj" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy4">
					<!-- 电脑_电脑 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner4.jpg" alt="笔记本 Pro" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>电脑</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod4dn" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 电脑_配件 -->
					<div class="cat_main">
					<div class="cat_main_tit">
						<span>配件</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod4pj" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy5">
					<!-- 家电 -->
					<div class="cat_main">
					<div class="cat_main_banner">
						<router-link to="/">
							<img src="../assets/cat/xp_banner5.jpg" alt="小米净水器" />
						</router-link>
					</div>
					<div class="cat_main_tit">
						<span>家电</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod5jd" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy6">
					<!-- 家装 -->
					<div class="cat_main">
					<div class="cat_main_banner">
						<router-link to="/">
							<img src="../assets/cat/xp_banner6.jpg" alt="小米扫地机器人" />
						</router-link>
					</div>
					<div class="cat_main_tit">
						<span>家装</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod6jz" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy7">
					<!-- 路由 -->
					<div class="cat_main">
					<div class="cat_main_banner">
						<router-link to="/">
							<img src="../assets/cat/xp_banner7.jpg" alt="小米路由器4" />
						</router-link>
					</div>
					<div class="cat_main_tit">
						<span>路由</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod7ly" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy8">
					<!-- 智能 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner8.jpg" alt="9号平衡车" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>智能</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod8zn" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 智能_健康 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>健康</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod8znjk" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
					
					<!-- 智能_户外 -->
					<div class="cat_main">
					<div class="cat_main_tit">
						<span>户外</span>
					</div>
					<div class="cat_mains">
						<ul>
							<Product v-for="item in prod8znhw" :src="item.src" :name="item.name"></Product>
						</ul>
					</div>
				</div>
				</div>
				
				<div id="categrouy9">
					<!-- 儿童 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner9.jpg" alt="儿童手表" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>儿童</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod9et" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy10">
					<!-- 灯具 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner10.jpg" alt="LED吸顶灯" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>灯具</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod10dj" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy11">
					<!-- 电源 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner11.jpg" alt="充电宝" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>电源</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod11dy" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy12">
					<!-- 耳机 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner12.jpg" alt="耳机" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>耳机</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod12ej" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy13">
					<!-- 音箱 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner13.jpg" alt="音箱" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>音箱</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod13yx" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy14">
					<!-- 礼品 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner14.jpg" alt="礼品" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>礼品</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod14lp" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy15">
					<!-- 生活 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner15.jpg" alt="生活" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>生活</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod15sh" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy16">
					<!-- 特殊服务 -->
					<div class="cat_main">
						<div class="cat_main_banner">
							<router-link to="/">
								<img src="../assets/cat/xp_banner16.jpg" alt="特殊服务" />
							</router-link>
						</div>
						<div class="cat_main_tit">
							<span>特殊服务</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod16fw" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy17">
					<!-- 会员卡 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>会员卡</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod17hyk" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy18">
					<!-- 电话卡 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>电话卡</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod18dhk" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div id="categrouy19">
					<!-- 零售店 -->
					<div class="cat_main">
						<div class="cat_main_tit">
							<span>零售店</span>
						</div>
						<div class="cat_mains">
							<ul>
								<Product v-for="item in prod19lsd" :src="item.src" :name="item.name"></Product>
							</ul>
						</div>
					</div>
				</div>
				
				<div class="categrouys" id="categrouys"></div>
			</div>
		</div>
		
		<Footer></Footer>
	</div>
</template>

<script>
import CatHeader from '../components/category/header'
import Footer from '../components/footer'
import Left from '../components/category/left'

import Product from '../components/category/product'

import Swiper from 'swiper'


export default {
	data() {
		return {
			cathead: '分类',
			num: 0,
			leftname: [
				{name: '新品', iref: '#categrouy1', index: '0'},
				{name: '手机', iref: '#categrouy2', index: '1'},
				{name: '电视', iref: '#categrouy3', index: '2'},
				{name: '电脑', iref: '#categrouy4', index: '3'},
				{name: '家电', iref: '#categrouy5', index: '4'},
				{name: '家装', iref: '#categrouy6', index: '5'},
				{name: '路由', iref: '#categrouy7', index: '6'},
				{name: '智能', iref: '#categrouy8', index: '7'},
				{name: '儿童', iref: '#categrouy9', index: '8'},
				{name: '灯具', iref: '#categrouy10', index: '9'},
				{name: '电源', iref: '#categrouy11', index: '10'},
				{name: '耳机', iref: '#categrouy12', index: '11'},
				{name: '音箱', iref: '#categrouy13', index: '12'},
				{name: '礼品', iref: '#categrouy14', index: '13'},
				{name: '生活', iref: '#categrouy15', index: '14'},
				{name: '服务', iref: '#categrouy16', index: '15'},
				{name: '会员卡', iref: '#categrouy17', index: '16'},
				{name: '米粉卡', iref: '#categrouy18', index: '17'},
				{name: '零售店', iref: '#categrouy19', index: '18'}
			],
			prod1sj: [
				{ src: require('../assets/cat/sj_mi8.png'), name: '小米8'},
				{ src: require('../assets/cat/sj_mi8_se.png'), name: '小米8 SE'},
				{ src: require('../assets/cat/sj_mix2s.png'), name: '小米MIX 2S'},
				{ src: require('../assets/cat/sj_hms2.jpg'), name: '红米S2'},
				{ src: require('../assets/cat/sj_hm6pro.png'), name: '红米6 Pro'},
				{ src: require('../assets/cat/sj_hm6.png'), name: '红米6'},
				{ src: require('../assets/cat/sj_hm6a.png'), name: '红米6A'},
			],
			prod1ds: [
				{ src: require('../assets/cat/75_ds4.jpg'), name: '75英寸 电视4'},
				{ src: require('../assets/cat/55_ds4s.jpg'), name: '55 4S 曲面'},
				{ src: require('../assets/cat/55_ds4x.jpg'), name: '55英寸 4X'},
				{ src: require('../assets/cat/32_ds4c.jpg'), name: '32英寸 4C'},
				{ src: require('../assets/cat/43-ds4s.jpg'), name: '43英寸 4S'},
				{ src: require('../assets/cat/43-ds4a.jpg'), name: '43英寸 青春版'},
			],
			prod1dn: [
				{ src: require('../assets/cat/15_6_yxb.jpg'), name: '15.6 游戏本'},
				{ src: require('../assets/cat/13_3_zqb.png'), name: '13.3 增强版'},
				{ src: require('../assets/cat/12_5_off.png'), name: '12.5 office版'},
			],
			prod2xm: [
				{ src: require('../assets/cat/sj_mi8.png'), name: '小米8'},
				{ src: require('../assets/cat/sj_mi8_se.png'), name: '小米8 SE'},
				{ src: require('../assets/cat/sj_mix2s.png'), name: '小米MIX 2S'},
				{ src: require('../assets/cat/sj_mi6x.png'), name: '小米6X'},
				{ src: require('../assets/cat/sj_hs.png'), name: '黑鲨游戏手机'},
				{ src: require('../assets/cat/sj_mix2.png'), name: '小米MIX 2'},
				{ src: require('../assets/cat/sj_max2.png'), name: '小米Max 2'},
			],
			prod2hm: [
				{ src: require('../assets/cat/sj_hm6pro.png'), name: '红米6 Pro'},
				{ src: require('../assets/cat/sj_hm6.png'), name: '红米6'},
				{ src: require('../assets/cat/sj_hm6a.png'), name: '红米6A'},
				{ src: require('../assets/cat/sj_hm_note5.png'), name: '红米Note 5'},
				{ src: require('../assets/cat/sj_hms2.jpg'), name: '红米S2'},
				{ src: require('../assets/cat/sj_hm5.png'), name: '红米5'},
				{ src: require('../assets/cat/sj_hm5_plus.png'), name: '红米5 Plus'},
				{ src: require('../assets/cat/sj_hm5a.png'), name: '红米5A'},
			],
			prod2yd: [
				{ src: require('../assets/cat/sj_hm6.png'), name: '红米6'},
				{ src: require('../assets/cat/sj_hm6a.png'), name: '红米6A'},
				{ src: require('../assets/cat/sj_mix2s.png'), name: '小米MIX 2S'},
				{ src: require('../assets/cat/sj_hm_note5.png'), name: '红米Note 5'},
				{ src: require('../assets/cat/sj_mix2.png'), name: '小米MIX 2'},
				{ src: require('../assets/cat/sj_hm5_plus.png'), name: '红米5 Plus'},
				{ src: require('../assets/cat/sj_max2.png'), name: '小米Max 2'},
				{ src: require('../assets/cat/sj_hm5a.png'), name: '红米5A'},
			],
			prod2pj: [
				{ src: require('../assets/cat/sj_hx.png'), name: '以旧换新'},
				{ src: require('../assets/cat/sj_dw.png'), name: '定位电话'},
				{ src: require('../assets/cat/sj_tm.png'), name: '贴膜'},
				{ src: require('../assets/cat/sj_bhk.png'), name: '保护壳'},
				{ src: require('../assets/cat/sj_cdq.png'), name: '充电器'},
				{ src: require('../assets/cat/sj_sjx.jpg'), name: '数据线'},
				{ src: require('../assets/cat/sj_cck.jpg'), name: '存储卡'},
				{ src: require('../assets/cat/sj_zpg.jpg'), name: '自拍杆'},
				{ src: require('../assets/cat/sj_zj.png'), name: '手机支架'},
				{ src: require('../assets/cat/sj_hs.jpg'), name: '黑鲨配件'},
			],
			prod3ds: [
				{ src: require('../assets/cat/ds_40.png'), name: '32-40英寸'},
				{ src: require('../assets/cat/ds_43.jpg'), name: '43英寸'},
				{ src: require('../assets/cat/ds_50.jpg'), name: '49-50英寸'},
				{ src: require('../assets/cat/ds_55.jpg'), name: '55英寸'},
				{ src: require('../assets/cat/ds_75.jpg'), name: '65-75英寸'},
				{ src: require('../assets/cat/jgtyds.jpg'), name: '激光投影电视'},
			],
			prod3hz: [
				{ src: require('../assets/cat/hz4.jpg'), name: '盒子4'},
				{ src: require('../assets/cat/hz4c.jpg'), name: '盒子4C'},
				{ src: require('../assets/cat/hz3s.jpg'), name: '盒子3S'},
				{ src: require('../assets/cat/hz3c.jpg'), name: '盒子3C'},
				{ src: require('../assets/cat/hz3zqb.jpg'), name: '盒子3增强版'},
			],
			prod3pj: [
				{ src: require('../assets/cat/hyk.png'), name: '会员卡'},
				{ src: require('../assets/cat/ykq.jpg'), name: '遥控器'},
				{ src: require('../assets/cat/zjq.jpg'), name: '线材转接器'},
				{ src: require('../assets/cat/azfw.png'), name: '安装服务'},
				{ src: require('../assets/cat/mkf.png'), name: '麦克风'},
			],
			prod4dn: [
				{ src: require('../assets/cat/pb.jpg'), name: '平板'},
				{ src: require('../assets/cat/15_6_yxb.jpg'), name: '游戏本'},
				{ src: require('../assets/cat/15_bjb.jpg'), name: '笔记本15.6'},
				{ src: require('../assets/cat/12_3_bjb.png'), name: '笔记本13.3'},
				{ src: require('../assets/cat/12_5_off.png'), name: '笔记本12.5'},
			],
			prod4pj: [
				{ src: require('../assets/cat/dnpj_sb.jpg'), name: '鼠标/鼠标垫'},
				{ src: require('../assets/cat/dnpj_jp.png'), name: '机械键盘 静音版'},
				{ src: require('../assets/cat/dnpj_jxjp.png'), name: '机械键盘'},
				{ src: require('../assets/cat/dnpj_zjx.png'), name: '转接线/电源'},
				{ src: require('../assets/cat/dnpj_yxsb.jpg'), name: '游戏鼠标'},
				{ src: require('../assets/cat/dnpj_bb.jpg'), name: '笔记本双肩包'},
				{ src: require('../assets/cat/dnpj_spq.jpg'), name: '适配器'},
			],
			prod5jd: [
				{ src: require('../assets/cat/jd_dfg.png'), name: '电饭煲'},
				{ src: require('../assets/cat/jd_jsq.png'), name: '净水器'},
				{ src: require('../assets/cat/jd_jhq.png'), name: '净化器'},
				{ src: require('../assets/cat/jd_sdjqr.png'), name: '扫地机器人'},
				{ src: require('../assets/cat/jd_tyy.jpg'), name: '米家投影仪'},
				{ src: require('../assets/cat/jd_dsh.png'), name: '电水壶'},
				{ src: require('../assets/cat/jd_dfs.png'), name: '电风扇'},
				{ src: require('../assets/cat/jd_lsh.jpg'), name: '滤水壶'},
				{ src: require('../assets/cat/jd_dcl.jpg'), name: '电磁炉'},
				
			],
			prod6jz: [
				{ src: require('../assets/cat/jz_kt.png'), name: '客厅'},
				{ src: require('../assets/cat/jz_ct.png'), name: '餐厅'},
				{ src: require('../assets/cat/jz_zw.png'), name: '主卧'},
				{ src: require('../assets/cat/jz_cw.png'), name: '次卧'},
				{ src: require('../assets/cat/jz_cf.png'), name: '厨房'},
				{ src: require('../assets/cat/jz_wsj.png'), name: '卫生间'},
				{ src: require('../assets/cat/jz_mk.png'), name: '门口'},
				{ src: require('../assets/cat/jz_xg.png'), name: '玄关'},
				{ src: require('../assets/cat/jz_yt.png'), name: '阳台'},
			],
			prod7ly: [
				{ src: require('../assets/cat/ly_4q.png'), name: '路由器4Q'},
				{ src: require('../assets/cat/ly_4.jpg'), name: '路由器4'},
				{ src: require('../assets/cat/ly_3a.jpg'), name: '路由器3A'},
				{ src: require('../assets/cat/ly_3g.jpg'), name: '路由器3G'},
				{ src: require('../assets/cat/ly_3.jpg'), name: '路由器3 '},
				{ src: require('../assets/cat/ly_3c.png'), name: '路由器3c'},
				{ src: require('../assets/cat/ly_hd.png'), name: '路由器HD'},
				{ src: require('../assets/cat/ly_hd.png'), name: '路由器Pro'},
				{ src: require('../assets/cat/wififdq.jpg'), name: 'WiFi放大器'},
				{ src: require('../assets/cat/ly_dlm.png'), name: '电力猫'},
				{ src: require('../assets/cat/ly_xc.png'), name: '线材'},
			],
			prod8zn: [
				{ src: require('../assets/cat/zn_txd.png'), name: '剃须刀'},
				{ src: require('../assets/cat/zn_znjd.png'), name: '智能家庭'},
				{ src: require('../assets/cat/zn_vr.png'), name: 'VR眼镜'},
				{ src: require('../assets/cat/zn_sxj.jpg'), name: '摄像机'},
				{ src: require('../assets/cat/zn_cz.jpg'), name: '智能插座'},
				{ src: require('../assets/cat/zn_ykll.png'), name: '尤克里里'},
			],
			prod8znjk: [
				{ src: require('../assets/cat/zn_sh.png'), name: '手环'},
				{ src: require('../assets/cat/zn_xyj.png'), name: '血压计'},
				{ src: require('../assets/cat/zn_b.png'), name: '秤'},
				{ src: require('../assets/cat/zn_twj.png'), name: '体温计'},
			],
			prod8znhw: [
				{ src: require('../assets/cat/zn_cx.png'), name: '出行'},
				{ src: require('../assets/cat/zn_wrj.png'), name: '无人机'},
				{ src: require('../assets/cat/zn_djj.png'), name: '对讲机'},
				{ src: require('../assets/cat/zn_czyp.png'), name: '车载用品'},
				{ src: require('../assets/cat/zn_sysx.png'), name: '摄影摄像'},
			],
			prod9et: [
				{ src: require('../assets/cat/et_hbc.jpg'), name: '米兔儿童滑板车'},
				{ src: require('../assets/cat/et_xxj.jpg'), name: '米兔卡片学习机'},
				{ src: require('../assets/cat/et_xfj.jpg'), name: '米兔遥控小飞机'},
				{ src: require('../assets/cat/et_sb2c.png'), name: ' 米兔儿童电话手表2C'},
				{ src: require('../assets/cat/et_kc.jpg'), name: '矿山卡车'},
				{ src: require('../assets/cat/et_sb2.jpg'), name: '儿童手表2'},
				{ src: require('../assets/cat/et_gsj.jpg'), name: '智能故事机'},
				{ src: require('../assets/cat/et_gdjm.png'), name: '米兔轨道积木'},
				{ src: require('../assets/cat/et_dwdh.jpg'), name: '定位电话'},
				{ src: require('../assets/cat/et_znjm.jpg'), name: '米兔智能积木'},
				{ src: require('../assets/cat/et_zjjm.jpg'), name: '米兔指尖积木'},
				{ src: require('../assets/cat/et_jmjqr.jpg'), name: '米兔积木机器人 履带机甲'},
				{ src: require('../assets/cat/et_70ljm.jpg'), name: '70粒益智积木'},
				{ src: require('../assets/cat/et_jmjqr2.jpg'), name: '积木机器人'},
				{ src: require('../assets/cat/et_gsjmini.jpg'), name: '故事机mini'},
				{ src: require('../assets/cat/et_cljm.jpg'), name: '米兔儿童磁力积木'},
				{ src: require('../assets/cat/et_sb.jpg'), name: '米兔儿童书包'},
				{ src: require('../assets/cat/et_jmkzb.jpg'), name: '米兔积木机器人拓展包 颜色传感器'},
				{ src: require('../assets/cat/et_ys.jpg'), name: '贝医生儿童牙刷'},
				{ src: require('../assets/cat/et_yj.jpg'), name: 'TS儿童防蓝光护目镜'},
			],
			prod10dj: [
				{ src: require('../assets/cat/dj_xdd.jpg'), name: '吸顶灯'},
				{ src: require('../assets/cat/dj_td.jpg'), name: '台灯'},
				{ src: require('../assets/cat/dj_ctd.jpg'), name: '床头灯'},
				{ src: require('../assets/cat/dj_yd.jpg'), name: '夜灯'},
				{ src: require('../assets/cat/dj_td2.jpg'), name: '筒灯'},
				{ src: require('../assets/cat/dj_dp.jpg'), name: '灯泡'},
			],
			prod11dy: [
				{ src: require('../assets/cat/dy_cxb.png'), name: '插线板'},
				{ src: require('../assets/cat/dy_yddy.jpg'), name: '移动电源'},
				{ src: require('../assets/cat/dy_cz.jpg'), name: '智能插座'},
				{ src: require('../assets/cat/dy_dc.png'), name: '电池'},
				{ src: require('../assets/cat/dy_pj.png'), name: '电源配件'},
				{ src: require('../assets/cat/dy_cdq.png'), name: '充电器'},
			],
			prod12ej: [
				{ src: require('../assets/cat/ej_xk.png'), name: '线控耳机'},
				{ src: require('../assets/cat/ej_ly.jpg'), name: '蓝牙耳机'},
				{ src: require('../assets/cat/ej_yx.jpg'), name: '小米游戏耳机'},
				{ src: require('../assets/cat/ej_td.jpg'), name: '头戴式耳机'},
				{ src: require('../assets/cat/ej_pp.png'), name: '品牌耳机'},
			],
			prod13yx: [
				{ src: require('../assets/cat/yx_xa.png'), name: '小米小爱音箱mini'},
				{ src: require('../assets/cat/yx_ai.png'), name: 'AI音箱'},
				{ src: require('../assets/cat/yx_ly.png'), name: '蓝牙音箱'},
				{ src: require('../assets/cat/yx_ds.jpg'), name: '电视音响'},
				{ src: require('../assets/cat/yx_pj.png'), name: '配件'},
			],
			prod14lp: [
				{ src: require('../assets/cat/lp_zb.png'), name: '送长辈'},
				{ src: require('../assets/cat/lp_hz.png'), name: '送孩子'},
				{ src: require('../assets/cat/lp_ns.png'), name: '送男生'},
				{ src: require('../assets/cat/lp_nvs.png'), name: '送女生'},
				{ src: require('../assets/cat/lp_yh.png'), name: '优惠套装'},
				{ src: require('../assets/cat/lp_xp.png'), name: '新品'},
			],
			prod15sh: [
				{ src: require('../assets/cat/sh_jmt.jpg'), name: '金米兔'},
				{ src: require('../assets/cat/sh_ydx.png'), name: '运动鞋'},
				{ src: require('../assets/cat/sh_fs.jpg'), name: '服饰'},
				{ src: require('../assets/cat/sh_lxx.png'), name: '旅行箱'},
				{ src: require('../assets/cat/sh_bb.png'), name: '背包/收纳'},
				{ src: require('../assets/cat/sh_yj.png'), name: '眼镜'},
				{ src: require('../assets/cat/sh_kz.jpg'), name: '口罩'},
				{ src: require('../assets/cat/sh_ys.jpg'), name: '雨伞'},
				{ src: require('../assets/cat/sh_bwb.png'), name: '保温杯'},
			],
			prod16fw: [
				{ src: require('../assets/cat/fw_sjbz.png'), name: '手机保障服务'},
				{ src: require('../assets/cat/fw_yjhx.png'), name: '以旧换新'},
				{ src: require('../assets/cat/fw_sjwx.png'), name: '手机上门维修'},
				{ src: require('../assets/cat/fw_az.png'), name: '安装服务'},
			],
			prod17hyk: [
				{ src: require('../assets/cat/hyk.jpg'), name: '小米云服务空间'}
			],
			prod18dhk: [
				{ src: require('../assets/cat/dhk_rzk.png'), name: '日租卡'},
				{ src: require('../assets/cat/dhk_zyrzk.png'), name: '自由日租卡'},
				{ src: require('../assets/cat/dhk_cdb.jpg'), name: '吃到饱'},
				{ src: require('../assets/cat/dhk_rwx.jpg'), name: '任我行'},
			],
			prod19lsd: [
				{ src: require('../assets/cat/lsd_xmzj.png'), name: '小米之家'},
				{ src: require('../assets/cat/lsd_fwwd.png'), name: '服务网点'},
				{ src: require('../assets/cat/lsd_lswd.png'), name: '零售网点'}
			]
		}
	},
	components: {
		CatHeader,
		Footer,
		Left,
		Product
	},
	methods:{
		tabe: function(index){
			this.num = index
			console.log(this.num)
		}
	},
	mounted() {
		new Swiper ('.swiper-container', {
			direction: 'vertical',
        	slidesPerView: 'auto',
		})
	}
}
</script>

<style>
.category{width:100%; max-width: 640px; height: 100%; background:#fff; position: fixed; top: 0rem; box-sizing: border-box; padding-bottom: 1.1rem; padding-top: 1rem; z-index: 999;}
.categrouys{height:80%;}
</style>
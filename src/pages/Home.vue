<!-- Home.vue -->
<template>
	<div class="container">
		<header>
			<div class="header">
				<div class="header_t">
					<div class="header_logo">MI</div>
					<div class="header_search"><input type="text" placeholder="搜索商品名称" /></div>
					<div class="header_person">个人</div>
				</div>
				<div class="swiper-container header_b">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for="(img,index) in inav" :class="{cc:index == num}" @click="tab(index)">{{img}}</li>
					</ul>
				</div>
			</div>
			<div style="width:100%; height: 1.7rem;"></div>
		</header>
		
		<div class="body_wrap">
			<!-- 首页 -->
			<div class="bodys">
			<div class="swiper-container_banner banner">
				<ul class="swiper-wrapper">
					<Banner v-for="img in banner" :src="img.src" :tit="img.tit"></Banner>
				</ul>
	    		<!-- Add Pagination -->
	    		<div class="swiper-pagination"></div>
			</div>
			<div class="sy_nav clear">
				<ul>
					<sy-nav v-for="img in navsy" :src="img.src" :alt="img.name"></sy-nav>
				</ul>
			</div>
			
			<sy-tj></sy-tj>
			
			<!-- 手机推荐 -->
			<div class="sy_cpmb">
				<sy-cpmb-t v-for="img in sjtjt" :src="img.src" :tit="img.tit"></sy-cpmb-t>
				<div class="sy_cpmb_b">
					<sy-cpmb-b v-for="imge in sjtjb" 
						:src="imge.src" 
						:alt="imge.name" 
						:name="imge.name" 
						:brief="imge.brief" 
						:present="imge.present" 
						:original="imge.original"></sy-cpmb-b>
				</div>
			</div>
			
			<!-- 电视推荐 -->
			<div class="sy_cpmb">
				<sy-cpmb-t v-for="img in dstjt" :src="img.src" :tit="img.tit"></sy-cpmb-t>
				<div class="sy_cpmb_b">
					<sy-cpmb-b v-for="imge in dstjb" 
						:src="imge.src" 
						:alt="imge.name" 
						:name="imge.name" 
						:brief="imge.brief" 
						:present="imge.present" 
						:original="imge.original"></sy-cpmb-b>
				</div>
			</div>
			
			<!-- 电脑推荐 -->
			<div class="sy_cpmb">
				<sy-cpmb-t v-for="img in dntjt" :src="img.src" :tit="img.tit"></sy-cpmb-t>
				<div class="sy_cpmb_b">
					<sy-cpmb-b v-for="imge in dntjb" 
						:src="imge.src" 
						:alt="imge.name" 
						:name="imge.name" 
						:brief="imge.brief" 
						:present="imge.present" 
						:original="imge.original"></sy-cpmb-b>
				</div>
			</div>
		</div>
			
			<!-- 手机 -->
			<div class="bodys">
				<sj-banner></sj-banner>
				
				<div class="fgx"></div>
				
				<!-- 分类1 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/mobile/tit1.png" alt="标题1" />
					</div>
					<!-- <div class="sj_main_c">
						<sy-cpmb-t v-for="img in sj1" :src="img.src" :alt="img.tit"></sy-cpmb-t>
					</div> -->
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in sj1b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
				
				<div class="fgx"></div>
				
				<div class="advertisement">
					<Advertisement v-for="img in adver" :src="img.src" :alt="img.name"></Advertisement>
				</div>
				
				<div class="fgx"></div>
				
				<!-- 分类2 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/mobile/tit2.png" alt="标题2" />
					</div>
					<div class="sj_main_c">
						<sj-main-t v-for="img in sj2t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :brief="img.brief" :original="img.original"></sj-main-t>
					</div>
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in sj2b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
				
				<div class="fgx"></div>
				
				<!-- 分类3 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/mobile/tit3.png" alt="标题3" />
					</div>
					<!--<div class="sj_main_c">
						<sj-main-t v-for="img in sj2t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :brief="img.brief" :original="img.original"></sj-main-t>
					</div>-->
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in sj3b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
			</div>
		
			<!-- 智能 -->
			<div class="bodys">
				<div class="swiper-container_banner banner">
					<ul class="swiper-wrapper">
						<Banner v-for="img in bannerZn" :src="img.src" :tit="img.tit"></Banner>
					</ul>
		    		<!-- Add Pagination -->
		    		<div class="swiper-pagination"></div>
				</div>
				
				<div class="sy_nav clear">
					<ul>
						<sy-nav v-for="img in navzn" :src="img.src" :alt="img.name"></sy-nav>
					</ul>
				</div>
				
				<div class="fgx"></div>
				
				<!-- 分类1 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/lntelligence/tit1.png" alt="标题1" />
					</div>
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in zn1b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
				
				<div class="fgx"></div>
				
				<!-- 分类2 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/lntelligence/tit2.png" alt="标题2" />
					</div>
					 <div class="sj_main_c">
						<sj-main-t v-for="img in zn2t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :brief="img.brief"></sj-main-t>
					</div> 
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in zn2b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
				
			</div>
		
			<!-- 电视 -->
			<div class="bodys">
				<div class="swiper-container_banner banner">
					<ul class="swiper-wrapper">
						<Banner v-for="img in bannerDs" :src="img.src" :tit="img.tit"></Banner>
					</ul>
		    		<!-- Add Pagination -->
		    		<div class="swiper-pagination"></div>
				</div>
				
				<div class="sy_nav clear">
					<ul>
						<sy-nav v-for="img in navds" :src="img.src" :alt="img.name"></sy-nav>
					</ul>
				</div>
				
				<div style="width: 97%; height: auto; overflow: hidden; padding: 0 1.5% 1.5%; background: #c84644;">
					<!-- 分类1 -->
					<div class="sj_main">
						<div class="sj_main_t">
							 <img src="../assets/img/television/tit1.jpg" alt="标题1" />
						</div>
						<div class="sj_main_c">
							<main-t v-for="img in tele1t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :original="img.original" :brief="img.brief"></main-t>
						</div>
						<div class="sj_main_b">
							<main-b v-for="img in tele1b" :src="img.src" :alt="img.name" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></main-b>
						</div>
					</div>
				</div>
				
				<div style="width: 97%; height: auto; overflow: hidden; padding: 0 1.5% 1.5%; background: #b33938;">
					<!-- 分类2 -->
					<div class="sj_main">
						<div class="sj_main_t">
							 <img src="../assets/img/television/tit2.jpg" alt="标题2" />
						</div>
						<div class="sj_main_c">
							<main-t v-for="img in tele2t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :original="img.original" :brief="img.brief"></main-t>
						</div>
						<div class="sj_main_b">
							<main-b v-for="img in tele2b" :src="img.src" :alt="img.name" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></main-b>
						</div>
					</div>
				</div>
				
				<div style="width: 97%; height: auto; overflow: hidden; padding: 0 1.5% 1.5%; background: #d3ba53;">
					<!-- 分类3 -->
					<div class="sj_main">
						<div class="sj_main_t">
							 <img src="../assets/img/television/tit3.jpg" alt="标题3" />
						</div>
						<!--<div class="sj_main_c">
							<main-t v-for="img in tele2t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :original="img.original" :brief="img.brief"></main-t>
						</div>-->
						<div class="sj_main_b">
							<main-b v-for="img in tele3b" :src="img.src" :alt="img.name" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></main-b>
						</div>
					</div>
				</div>
			</div>
		
			<!-- 电脑 -->
			<div class="bodys">
				<div class="swiper-container_banner banner">
					<ul class="swiper-wrapper">
						<Banner v-for="img in bannerDn" :src="img.src" :tit="img.tit"></Banner>
					</ul>
		    		<!-- Add Pagination -->
		    		<div class="swiper-pagination"></div>
				</div>
				
				<div class="sy_nav clear">
					<ul>
						<sy-nav v-for="img in navdn" :src="img.src" :alt="img.name"></sy-nav>
					</ul>
				</div>
				
				<div class="fgx"></div>
				
				<!-- 分类 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/computer/tit1.jpg" alt="标题1" />
					</div>
					 <div class="sj_main_c">
						<sj-main-t v-for="img in dn1t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :brief="img.brief"></sj-main-t>
					</div> 
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in dn1b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
			</div>
		
			<!-- 促销 -->
			<div class="bodys">
				<div class="swiper-container_banner banner">
					<ul class="swiper-wrapper">
						<Banner v-for="img in bannerCx" :src="img.src" :tit="img.tit"></Banner>
					</ul>
		    		<!-- Add Pagination -->
		    		<div class="swiper-pagination"></div>
				</div>
				
				<div class="sy_nav clear">
					<ul>
						<sy-nav v-for="img in navcx" :src="img.src" :alt="img.name"></sy-nav>
					</ul>
				</div>
				
				<div style="width: 97%; height: auto; overflow: hidden; padding: 0 1.5% 1.5%; background: #fed7d8;">
					<!-- 分类1 -->
					<div class="sj_main">
						<div class="sj_main_t">
							 <img src="../assets/img/promotion/tit1.jpg" alt="标题1" />
						</div>
						<div class="sj_main_c">
							<main-t v-for="img in prom1t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :original="img.original" :brief="img.brief"></main-t>
						</div>
						<div class="sj_main_b">
							<main-b v-for="img in prom1b" :src="img.src" :alt="img.name" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></main-b>
						</div>
					</div>
				</div>
				
			</div>
		
			<!-- 双摄 -->
			<div class="bodys">
				<div class="newbanner"><img src="../assets/img/special/banner.jpg" /></div>
				<div class="newsj1">
					<img src="../assets/img/special/tit1.jpg" />
					<router-link to="/"><img src="../assets/img/special/mi6x_1.jpg" /></router-link>
					<img src="../assets/img/special/mi6x_2.jpg" />
					<img src="../assets/img/special/mi6x_3.jpg" />
					<img src="../assets/img/special/mi6x_4.jpg" />
					<img src="../assets/img/special/mi6x_5.jpg" />
					<img src="../assets/img/special/mi6x_6.jpg" />
					<img src="../assets/img/special/mi6x_7.jpg" />
					<img src="../assets/img/special/mi6x_8.jpg" />
					<img src="../assets/img/special/mi6x_9.jpg" />
					
					<router-link to="/"><img src="../assets/img/special/mix2s_1.jpg" /></router-link>
					<img src="../assets/img/special/mix2s_2.jpg" />
					<img src="../assets/img/special/mix2s_3.jpg" />
					<img src="../assets/img/special/mix2s_4.jpg" />
					<img src="../assets/img/special/mix2s_5.jpg" />
					<img src="../assets/img/special/mix2s_6.jpg" />
					<img src="../assets/img/special/mix2s_7.jpg" />
					
					<router-link to="/"><img src="../assets/img/special/hmnote5_2.jpg" /></router-link>
					<img src="../assets/img/special/hmnote5_3.jpg" />
					<img src="../assets/img/special/hmnote5_4.jpg" />
					<img src="../assets/img/special/hmnote5_5.jpg" />
					<img src="../assets/img/special/hmnote5_6.jpg" />
					<img src="../assets/img/special/hmnote5_7.jpg" />
					<img src="../assets/img/special/hmnote5_8.jpg" />
					<img src="../assets/img/special/hmnote5_9.jpg" />
					<img src="../assets/img/special/hmnote5_10.jpg" />
					<img src="../assets/img/special/hmnote5_1.jpg" />
				</div>
			</div>
			
			<!-- 全面屏 -->
			<div class="bodys">
				<div class="newbanner"><img src="../assets/img/screen/banner.jpg" /></div>
				
				<div style="width: 97%; height: auto; overflow: hidden; padding: 0 1.5% 1.5%; background: #c00436;">
					<!-- 分类1 -->
					<div class="sj_main">
						<div class="sj_main_t">
							 <img src="../assets/img/screen/tit1.jpg" alt="标题1" />
						</div>
						<div class="sj_main_c">
							<main-t v-for="img in screen1t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :original="img.original" :brief="img.brief"></main-t>
						</div>
						<div class="sj_main_t">
							 <img src="../assets/img/screen/tit2.png" alt="标题2" />
						</div>
					</div>
				</div>
				
				<!-- 分类2 -->
				<div class="sj_main">
					 <div class="sj_main_c">
						<sj-main-t v-for="img in screen2t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :brief="img.brief" :original="img.original"></sj-main-t>
					</div>
				</div>
				
			</div>
		
			<!-- 生活周边 -->
			<div class="bodys">
				<div class="swiper-container_banner banner">
					<ul class="swiper-wrapper">
						<Banner v-for="img in bannerSh" :src="img.src" :tit="img.tit"></Banner>
					</ul>
		    		<!-- Add Pagination -->
		    		<div class="swiper-pagination"></div>
				</div>
				
				<div class="sy_nav clear">
					<ul>
						<sy-nav v-for="img in navsh" :src="img.src" :alt="img.name"></sy-nav>
					</ul>
				</div>
				
				<div class="fgx"></div>
				
				<!-- 分类 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/life/tit1.jpg" alt="标题1" />
					</div>
					<div class="sj_main_b">
						<sy-cpmb-b v-for="img in life1b" :src="img.src" :name="img.name" :brief="img.brief" :present="img.present" :original="img.original"></sy-cpmb-b>
					</div>
				</div>
				
			</div>
		
			<!-- 盒子 -->
			<div class="bodys">
				<div class="swiper-container_banner banner">
					<ul class="swiper-wrapper">
						<Banner v-for="img in bannerHz" :src="img.src" :tit="img.tit"></Banner>
					</ul>
		    		<!-- Add Pagination -->
		    		<div class="swiper-pagination"></div>
				</div>
				<div class="fgx"></div>
				
				<!-- 分类 -->
				<div class="sj_main">
					<div class="sj_main_t">
						 <img src="../assets/img/box/tit1.jpg" alt="标题1" />
					</div>
					<div class="sj_main_c">
						<sj-main-t v-for="img in life1t" :src="img.src" :alt="img.name" :name="img.name" :present="img.present" :brief="img.brief" :original="img.original"></sj-main-t>
					</div>
				</div>
				
			</div>
		
		</div>
		
		<!-- 底部 -->
		<Footer></Footer>
	</div>
</template>

<style>  
</style>

<script>
import List from '../components/List'
import Banner from '../components/Banner'
import SyNav from '../components/sy_nav'
import SyTj from '../components/sy_tj'
import SyCpmbT from '../components/sy_cpmb_t'
import SyCpmbB from '../components/sy_cpmb_b'
import Footer from '../components/footer'
import SjMainT from '../components/mobile/SjMainT'

// 手机
import SjBanner from '../components/sj_banner';
import Advertisement from '../components/mobile/Advertisement';

// 电视
import MainT from '../components/television/maint'
import MainB from '../components/television/mainb'

import Swiper from 'swiper';


export default {
	name: 'helooWorld',
	data() {
		return {
			inav: ["推荐", "手机", "智能", "电视", "电脑", "暑期大促", "双摄", "全面屏", "生活周边", "盒子"],
			num: 0,
			navsy:[
				{ src: require("../assets/img/sy_nav1.jpg"), name: "米粉卡"},
				{ src: require("../assets/img/sy_nav2.jpg"), name: "新品发布"},
				{ src: require("../assets/img/sy_nav3.jpg"), name: "小米闪购"},
				{ src: require("../assets/img/sy_nav4.jpg"), name: "以旧换新"},
				{ src: require("../assets/img/sy_nav5.jpg"), name: "活动频道"},
			],
			navzn:[
				{ src: require("../assets/img/lntelligence/nav1.jpg"), name: "智能家电"},
				{ src: require("../assets/img/lntelligence/nav2.jpg"), name: "智能家具"},
				{ src: require("../assets/img/lntelligence/nav3.jpg"), name: "运动个护"},
				{ src: require("../assets/img/lntelligence/nav4.jpg"), name: "手机周边"},
				{ src: require("../assets/img/lntelligence/nav5.jpg"), name: "儿童玩具"},
			],
			navds:[
				{ src: require("../assets/img/television/nav1.jpg"), name: "超神特价"},
				{ src: require("../assets/img/television/nav2.jpg"), name: "32-43英寸"},
				{ src: require("../assets/img/television/nav3.jpg"), name: "49-50英寸"},
				{ src: require("../assets/img/television/nav4.jpg"), name: "55英寸"},
				{ src: require("../assets/img/television/nav5.jpg"), name: "65-75英寸"},
			],
			navdn: [
				{ src: require("../assets/img/computer/nav1.jpg"), name: "热卖机型"},
				{ src: require("../assets/img/computer/nav2.jpg"), name: "游戏本"},
				{ src: require("../assets/img/computer/nav3.jpg"), name: "12.5英寸"},
				{ src: require("../assets/img/computer/nav4.jpg"), name: "13.3英寸"},
				{ src: require("../assets/img/computer/nav5.jpg"), name: "15.6英寸"},
			],
			navcx: [
				{ src: require("../assets/img/promotion/nav1.jpg"), name: "手机特价"},
				{ src: require("../assets/img/promotion/nav2.jpg"), name: "以旧换新"},
				{ src: require("../assets/img/promotion/nav3.jpg"), name: "最高省1500"},
				{ src: require("../assets/img/promotion/nav4.jpg"), name: "游戏本减400"},
				{ src: require("../assets/img/promotion/nav5.jpg"), name: "智能好物"},
			],
			navsh: [
				{ src: require("../assets/img/life/nav1.jpg"), name: "家具生活"},
				{ src: require("../assets/img/life/nav2.jpg"), name: "箱包出行"},
				{ src: require("../assets/img/life/nav3.jpg"), name: "服装鞋类"},
				{ src: require("../assets/img/life/nav4.jpg"), name: "精品眼镜"},
				{ src: require("../assets/img/life/nav5.jpg"), name: "其他配件"},
			],
            banner:[
            	{ src: require("../assets/img/sy_banner1.jpg"), tit: "小米6x"},
            	{ src: require("../assets/img/sy_banner2.jpg"), tit: "小米8"},
            	{ src: require("../assets/img/sy_banner3.jpg"), tit: "小米电视"},
            	{ src: require("../assets/img/sy_banner4.jpg"), tit: "小米空气净化器"},
            ],
            bannerZn:[
            	{ src: require("../assets/img/lntelligence/banner1.jpg"), tit: "电风扇"},
            	{ src: require("../assets/img/lntelligence/banner2.jpg"), tit: "智能摄像"},
            	{ src: require("../assets/img/lntelligence/banner3.jpg"), tit: "剃须刀"}
            ],
            bannerDs:[
            	{ src: require("../assets/img/television/banner.jpg"), tit: "电视"}
            ],
            bannerDn: [
            	{ src: require("../assets/img/computer/banner1.jpg"), tit: "电脑1"},
            	{ src: require("../assets/img/computer/banner2.jpg"), tit: "电脑2"},
            	{ src: require("../assets/img/computer/banner3.jpg"), tit: "电脑3"},
            ],
            bannerCx: [
            	{ src: require("../assets/img/promotion/banner.jpg"), tit: "年终大促"}
            ],
            bannerSh: [
            	{ src: require("../assets/img/life/banner1.jpg"), tit: "米家运动鞋"},
            	{ src: require("../assets/img/life/banner2.jpg"), tit: "米家运动鞋"},
            	{ src: require("../assets/img/life/banner3.jpg"), tit: "米家运动鞋"},
            ],
            bannerHz: [
            	{ src: require("../assets/img/box/banner.jpg"), tit: "盒子4c"}
            ],
            sjtjt:[
            	{ src: require("../assets/img/sy_mrjx1.jpg"), tit: "小米max2"},
            ],
            sjtjb:[
            	{ src: require("../assets/img/hm6.jpg"), name: "红米6", brief: "AI双摄，小屏高性能", present: "￥799"},
            	{ src: require("../assets/img/hm6a.jpg"), name: "红米6a", brief: "AI人脸解锁，小巧屏高性能", present: "￥599"},
            	{ src: require("../assets/img/xm6x.jpg"), name: "小米6x", brief: "标配骁龙660 AIE处理器", present: "￥1399", original: "￥1499"},
            	{ src: require("../assets/img/hm_note5.jpg"), name: "红米note5", brief: "1.4μm大像素 AI双摄", present: "￥999", original: "￥1099"},
            	{ src: require("../assets/img/hm5_plus.jpg"), name: "红米5 plus", brief: "全面屏，4000mAh大电量", present: "￥899", original: "￥999"},
            	{ src: require("../assets/img/hms2.jpg"), name: "红米s2", brief: "1600万像素自拍手机", present: "￥899", original: "￥999"},
            ],
            dstjt:[
            	{ src: require("../assets/img/ds4a_55.jpg"), tit: "小米电视4A 55英寸"}
            ],
            dstjb:[
            	{ src: require("../assets/img/ds4a_32.jpg"), name: "小米电视4A 32英寸", brief: "64位处理器，高清智能电视", present: "￥849", original: "￥999"},
            	{ src: require("../assets/img/ds4a_43.jpg"), name: "小米电视4A 青春版", brief: "全高清屏，人工智能语音", present: "￥1499", original: "￥1699"},
            	{ src: require("../assets/img/ds4a_50.jpg"), name: "小米电视4A 50英寸", brief: "4K HDR，人工智能语音系统", present: "￥1999", original: "￥2199"},
            	{ src: require("../assets/img/ds4c_32.jpg"), name: "小米电视4C 32英寸", brief: "高清液晶屏，人工智能系统", present: "￥849", original: "￥999"},
            ],
            dntjt:[
            	{ src: require("../assets/img/bjb13.3.jpg"), tit: "13.3 笔记本四核增强i5 8G "}
            ],
            dntjb:[
            	{ src: require("../assets/img/bjb15.6_i7.jpg"), name: "游戏本15.6 i7 16GB", brief: "电竞级性能怪兽", present: "￥8599", original: "￥8999"},
            	{ src: require("../assets/img/bjb15.6_i5.jpg"), name: "游戏本 15.6  i5 GTX", brief: "电竞级性能怪兽", present: "￥5799", original: "￥5999"},
            	{ src: require("../assets/img/bjb13.3_i7.jpg"), name: "13.3 笔记本 八代四核i7", brief: "第8代四核i7处理器", present: "￥5999", original: "￥5999"},
            	{ src: require("../assets/img/bjb12.5_ari.jpg"), name: "12.5 笔记本Air 128GB", brief: "轻薄长续航，超窄边框", present: "￥3599", original: "￥3599"},
            ],
            sj1b:[
            	{ src: require("../assets/img/mobile/hm6.jpg"), name: "红米6", brief: "AI双摄，小屏高性能", present: "￥799" },
            	{ src: require("../assets/img/mobile/hm6a.jpg"), name: "红米6A", brief: "AI人脸解锁，小巧屏高性能", present: "￥599" },
            	{ src: require("../assets/img/mobile/mix2s.jpg"), name: "MIX 2S", brief: "骁龙845旗舰处理器，AI双摄", present: "￥3299" },
            	{ src: require("../assets/img/mobile/hs.jpg"), name: "黑鲨游戏手机 液冷更快", brief: "液冷更快，独显芯片", present: "￥2999" },
            ],
            adver:[
            	{ src: require("../assets/img/mobile/gg_mi8.jpg"), name: "小米8"}
            ],
            sj2t:[
            	{ src: require("../assets/img/mobile/mi6x.jpg"), name: "小米6X", present:"￥1399起", brief: "全索尼相机，标配骁龙660 AIE处理器", original: "￥1499"},
            	{ src: require("../assets/img/mobile/hm_note5.jpg"), name: "红米Note 5 AI双摄", present:"￥999起", brief: "1.4μm大像素 AI双摄", original: "￥1099"},
            ],
            sj2b:[
            	{ src: require("../assets/img/mobile/max2.jpg"), name:"小米Max 2 大屏大电量", brief:"6.44 大屏，5300mAh大电量", present: "￥1099起", original: "￥1399"},
            	{ src: require("../assets/img/mobile/hm5_plus.jpg"), name:"红米5 Plus", brief:"全面屏，4000mAh大电量", present: "￥899起", original: "￥999"},
            	{ src: require("../assets/img/mobile/mix2.jpg"), name:"小米MIX 2", brief:"5.99 大屏，4轴光学防抖", present: "￥2599起", original: "￥3299"},
            	{ src: require("../assets/img/mobile/hms2.jpg"), name:"红米自拍手机S2", brief:"1600万像素自拍手机", present: "￥899起", original: "￥999"},
            ],
            sj3b:[
            	{ src: require("../assets/img/mobile/hm5.jpg"), name: "红米5 16GB", brief: "千元全面屏，前置柔光自拍", present: "￥699", original: "￥799"},
            	{ src: require("../assets/img/mobile/hms2.jpg"), name: "红米S2 3GB+32GB", brief: "1600万像素自拍手机", present: "￥899", original: "￥999"},
            	{ src: require("../assets/img/mobile/hm6.jpg"), name: "红米6", brief: "AI双摄，小屏高性能", present: "￥799", original: ""},
            	{ src: require("../assets/img/mobile/hm6a.jpg"), name: "红米6A", brief: "AI人脸解锁，小巧屏高性能", present: "￥599", original: ""},
            	{ src: require("../assets/img/mobile/hm5_plus.jpg"), name: "红米5 Plus 32GB", brief: "全面屏，前置柔光自拍", present: "￥899", original: "￥999"},
            	{ src: require("../assets/img/mobile/hm5.jpg"), name: "红米5 3GB+32GB", brief: "千元全面屏，前置柔光自拍", present: "￥799", original: "￥899"},
            ],
            zn1b:[
            	{ src: require("../assets/img/lntelligence/jsq1a.jpg"), name: "小米净水器1A", brief: "小身材节省空间，大流量直出纯净水", present: "￥1499", original:""},
            	{ src: require("../assets/img/lntelligence/lyq4.jpg"), name: "小米路由器4", brief: "双频双核 更快更稳定", present: "￥179", original:"￥199"},
            	{ src: require("../assets/img/lntelligence/sdq.jpg"), name: "米家扫地机器人", brief: "智商高，扫得干净扫得快", present: "￥1699", original:""},
            	{ src: require("../assets/img/lntelligence/9hphc.jpg"), name: "九号平衡车", brief: "年轻人的酷玩具", present: "￥1999", original:""},
            	{ src: require("../assets/img/lntelligence/txd.jpg"), name: "米家电动剃须刀", brief: "剃得干净，剃得快", present: "￥199", original:""},
            	{ src: require("../assets/img/lntelligence/tfj.jpg"), name: "小米体脂秤", brief: "简约纤薄掌握身体数据", present: "￥199", original:""},
            	{ src: require("../assets/img/lntelligence/ys.jpg"), name: "米家声波电动牙刷", brief: "高效动力，刷的干净", present: "￥199", original:""},
            	{ src: require("../assets/img/lntelligence/etsb2.jpg"), name: "米兔儿童电话手表2 ", brief: "6 天使用，10 天待机", present: "￥399", original:""},
            	{ src: require("../assets/img/lntelligence/kqjhq2s.jpg"), name: "小米米家空气净化器 2S", brief: "经典再升级，好空气看得见", present: "￥899", original:""},
            	{ src: require("../assets/img/lntelligence/fs.jpg"), name: "米家直流变频落地扇", brief: "用科技创造自然风", present: "￥349", original:""},
            ],
            zn2t:[
            	{ src: require("../assets/img/lntelligence/tyy.jpg"), name: "米家投影仪", present: "￥3299", brief: "三秒自动对焦，好用又好看"}
            ],
            zn2b:[
            	{ src: require("../assets/img/lntelligence/fs.jpg"), name: "米家直流变频落地扇", brief: "用科技创造自然风", present: "￥349", original:""},
            	{ src: require("../assets/img/lntelligence/xmxj.jpg"), name: "小默相机", brief: "发现新视角 自拍大不同", present: "￥399", original:""},
            	{ src: require("../assets/img/lntelligence/mjlsh.jpg"), name: "小米米家滤水壶", brief: "小米米家滤水壶", present: "￥99", original:""},
            	{ src: require("../assets/img/lntelligence/xmsh3.jpg"), name: "小米手环3 ", brief: "全新OLED可触摸大屏", present: "￥169", original:""},
            	{ src: require("../assets/img/lntelligence/lyq4.jpg"), name: "小米路由器4 ", brief: "双频双核 更快更稳定", present: "￥179", original:"￥199"},
            	{ src: require("../assets/img/lntelligence/mtxxj.jpg"), name: "米兔卡片学习机 ", brief: "宝宝学习好 妈妈看得见", present: "￥299", original:""},
            	{ src: require("../assets/img/lntelligence/ydsb2.jpg"), name: "Amazfit智能运动手表2", brief: "陶瓷表圈，50米防水", present: "￥999", original:""},
            	{ src: require("../assets/img/lntelligence/txd.jpg"), name: "米家电动剃须刀", brief: "剃得干净，剃得快", present: "￥199", original:""},
            	{ src: require("../assets/img/lntelligence/jsq1a.jpg"), name: "小米净水器1A", brief: "小身材节省空间，大流量直出纯净水", present: "￥1499", original:""},
            	{ src: require("../assets/img/lntelligence/mjxayx.png"), name: "小米小爱音箱mini", brief: "能听会说的人工智能音箱", present: "￥169", original:""},
            ],
            tele1t:[
            	{ src: require("../assets/img/television/tele4a_32.jpg"), name: "小米电视4A 32英寸", present: "￥849", original: "￥999", brief: "64位四核处理器，人工智能系统"},
            	{ src: require("../assets/img/television/tele4a_50.jpg"), name: "小米电视4A 50英寸", present: "￥1999", original: "￥2199", brief: "4K HDR，人工智能语音系统"},	
            ],
            tele1b:[
            	{ src: require("../assets/img/television/tele4a_qcb.jpg"), name: "43电视4A 青春版", brief: "全高清屏，人工智能语音", present: "￥1499", original: "￥1699"},
            	{ src: require("../assets/img/television/tele4a_55.jpg"), name: "小米电视4A 55英寸", brief: "4K HDR，64位处理器", present: "￥2499", original: "￥2799"},
            	{ src: require("../assets/img/television/tele4c_32.jpg"), name: "小米电视4C 32英寸", brief: "高清液晶屏，人工智能系统", present: "￥849", original: "￥999"},
            	{ src: require("../assets/img/television/tele4c_50.jpg"), name: "小米电视4C 50英寸", brief: "钢琴烤漆，4K HDR", present: "￥1999", original: "￥2199"},
            ],
            tele2t:[
            	{ src: require("../assets/img/television/tele4x_55.jpg"), name: "小米电视4X 55英寸", present: "￥2499", original: "￥2799", brief: "4K HDR，人工智能语音，超窄边钢琴烤漆"},
            ],
            tele2b:[
            	{ src: require("../assets/img/television/tele4s_55.jpg"), name: "55 电视4S 曲面", brief: "4K曲面屏，金属机身", present: "￥2999", original: "￥3299"},
            	{ src: require("../assets/img/television/tele4a_65.jpg"), name: "小米电视4A 65英寸", brief: "4K超清大屏，64位处理器", present: "￥3999", original: "￥4499"},
            ],
            tele3b:[
            	{ src: require("../assets/img/television/tele4a_32_1.jpg"), name: "小米电视4A 32英寸", present: "￥849", original: "￥999", brief: "64位四核处理器，人工智能系统"},
            	{ src: require("../assets/img/television/tele4a_55.jpg"), name: "小米电视4A 55英寸", brief: "4K HDR，64位处理器", present: "￥2499", original: "￥2799"},
            	{ src: require("../assets/img/television/tele4a_50_1.jpg"), name: "小米电视4A 50英寸", present: "￥1999", original: "￥2199", brief: "4K HDR，人工智能语音系统"},	
            	{ src: require("../assets/img/television/tele4c_50.jpg"), name: "小米电视4C 50英寸", brief: "钢琴烤漆，4K HDR", present: "￥1999", original: "￥2199"},
            	{ src: require("../assets/img/television/tele4a_40.jpg"), name: "小米电视4A 40英寸", brief: "FHD全高清屏，四核处理器", present: "￥1399", original: "￥1599"},
            	{ src: require("../assets/img/television/tele4c_43.jpg"), name: "小米电视4C 43英寸", brief: "超窄边，高清智能电视", present: "￥1499", original: "￥1799"},
            	{ src: require("../assets/img/television/tele4a_43.jpg"), name: "43 电视4A 青春版", brief: "全高清屏，人工智能语音", present: "￥1499", original: "￥1699"},
            	{ src: require("../assets/img/television/tele4a_65.jpg"), name: "小米电视4A 65英寸", brief: "4K超清大屏，64位处理器", present: "￥3999", original: "￥4499"},
            ],
            dn1t: [
            	{ src: require("../assets/img/computer/dn1t_1.jpg"), name: "游戏本 15.6  i5 8GB GTX 1050Ti ", present: "￥5999", brief: "电竞级性能怪兽，冷酷到底的散热系统"},
            	{ src: require("../assets/img/computer/dn1t_2.jpg"), name: "游戏本15.6 i7 GTX 1060 16GB ", present: "￥8999", brief: "电竞级性能怪兽，冷酷到底的散热系统"},
            	{ src: require("../assets/img/computer/dn1t_3.jpg"), name: "13.3 笔记本 八代四核i7 深空灰 ", present: "￥5999", brief: "第8代四核i7处理器，MX150 2G独显，指纹解锁"},
            	{ src: require("../assets/img/computer/dn1t_4.jpg"), name: "15.6 笔记本Pro i5 8GB ", present: "￥5599", brief: "更强悍的专业笔记本，全金属强化机身"},
            	{ src: require("../assets/img/computer/dn1t_5.jpg"), name: "12.5 笔记本Air 128GB 银色 ", present: "￥3599", brief: "轻薄全金属机身，超长续航，超窄边框"},
            ],
            dn1b: [
            	{ src: require("../assets/img/computer/dn1b_1.jpg"), name: "13.3 笔记本i7 独显", brief: "轻薄全金属，超长续航", present: "￥5499", original:"￥5999"},
            	{ src: require("../assets/img/computer/dn1b_2.jpg"), name: "13.3 笔记本i5 独显", brief: "指纹解锁，全金属机身", present: "￥4999", original:"￥5199"},
            	{ src: require("../assets/img/computer/dn1b_3.jpg"), name: "15.6 笔记本i7 8GB", brief: "全新高性能独显", present: "￥6399", original:""},
            	{ src: require("../assets/img/computer/dn1b_4.jpg"), name: "小米游戏鼠标", brief: "掌中游戏利器，为真玩家而生", present: "￥249", original:""},
            ],
            prom1t: [
            	{ src: require("../assets/img/promotion/hm6_pro.jpg"), name: "红米6 Pro", present: "￥999起", original: "", brief: "AI双摄，高颜值大电量"},
            	{ src: require("../assets/img/promotion/hm6x.jpg"), name: "红米6X", present: "￥1399起", original: "￥1499", brief: "全索尼相机，标配骁龙660 AIE处理器"},
            	{ src: require("../assets/img/mobile/hm_note5.jpg"), name: "红米6 Pro", present: "￥999起", original: "￥1099", brief: "1.4μm大像素 AI双摄"},
            	{ src: require("../assets/img/promotion/xmds_4a.jpg"), name: "32 小米电视4A 体育版", present: "￥769起", original: "￥999", brief: "高清液晶屏，第6代画质引擎"},
            ],
            prom1b: [
            	{ src: require("../assets/img/ds4a_32.jpg"), name: "小米电视4A 32英寸", brief: "64位处理器，高清智能电视", present: "￥899", original: "￥999"},
            	{ src: require("../assets/img/ds4a_50.jpg"), name: "小米电视4A 50英寸", brief: "4K HDR，人工智能语音系统", present: "￥1999", original: "￥2199"},
            	{ src: require("../assets/img/promotion/xmds_4c.jpg"), name: "55 电视4C 体育版", brief: "64位四核处理器，超窄边", present: "￥2299", original: "￥2899"},
            	{ src: require("../assets/img/promotion/bjb.jpg"), name: "13.3 笔记本 四核i5", brief: "四核增强版，独立显卡", present: "￥5399", original: ""},
            	{ src: require("../assets/img/promotion/bjb2.jpg"), name: "游戏本15.6 i7 16GB", brief: "电竞级性能怪兽", present: "￥8999", original: ""},
            	{ src: require("../assets/img/promotion/mjsdj.jpg"), name: "米家扫地机器人", brief: "智商高，扫得干净扫得快", present: "￥1699", original: ""},
            	{ src: require("../assets/img/promotion/jsq.jpg"), name: "小米净水器（厨下式）", brief: "400加仑大流量，隐藏安装", present: "￥1999", original: ""},
            	{ src: require("../assets/img/promotion/lyq4.jpg"), name: "小米路由器4", brief: "双频双核 更快更稳定", present: "￥179", original: "￥199"},
            	{ src: require("../assets/img/promotion/dfs.jpg"), name: "米家直流变频落地扇", brief: "用科技创造自然风", present: "￥349", original: ""},
            	{ src: require("../assets/img/promotion/ddhbc.jpg"), name: "小米米家电动滑板车", brief: "便携折叠，自由穿行", present: "￥1999", original: ""},
            	{ src: require("../assets/img/promotion/sxj.jpg"), name: "小米米家智能摄像机云台版", brief: "高清画质，守护家的每一面", present: "￥199", original: ""},
            	{ src: require("../assets/img/promotion/xmznyx.jpg"), name: "小米小爱音箱mini", brief: "能听会说的人工智能音箱", present: "￥169", original: ""},
            ],
            screen1t: [
            	{ src: require("../assets/img/screen/mix2s.jpg"), name: "小米MIX 2S", present: "￥3299起", original: "", brief: "骁龙845 旗舰处理器，AI双摄相机"},
            	{ src: require("../assets/img/screen/hmnote_5.jpg"), name: "红米Note 5 AI双摄", present: "￥999起", original: "￥1099", brief: "1.4μm大像素 AI双摄"},
            	{ src: require("../assets/img/screen/hm5_plus.jpg"), name: "红米5 Plus", present: "￥899", original: "￥999", brief: "全面屏，4000mAh大电量"},
            	{ src: require("../assets/img/screen/hm5.jpg"), name: "红米5", present: "￥699起", original: "￥799", brief: "前置柔光自拍，骁龙处理器，超长续航"},
            ],
            screen2t: [
            	{ src: require("../assets/img/screen/mix2s.jpg"), name: "小米MIX 2S", present: "￥3299", original: "", brief: "骁龙845 旗舰处理器，AI双摄相机"},
            	{ src: require("../assets/img/screen/mix2_zz.jpg"), name: "小米MIX 2 全陶瓷尊享版 白色", present: "￥3499", original: "￥4699", brief: "全面屏2.0，Unibody 全陶瓷"},
            	{ src: require("../assets/img/screen/mix2.jpg"), name: "小米MIX 2", present: "￥2599", original: "￥3299", brief: "5.99 大屏，骁龙835旗舰处理器 "},	
            ],
            life1b: [
            	{ src: require("../assets/img/life/cp1.jpg"), name: "8H 乳胶弹簧静音床垫 ", present: "￥1599起", brief: "健康每一处  床垫会呼吸"},
            	{ src: require("../assets/img/life/cp2.jpg"), name: "乳胶床垫·青春版 ", present: "￥599", brief: "真心品质帮助睡眠"},
            	{ src: require("../assets/img/life/cp3.jpg"), name: "米家wiha螺丝刀套装 ", present: "￥99", brief: "满足大多数日常所需"},
            	{ src: require("../assets/img/life/cp4.jpg"), name: "90分旅行箱 24寸 ", present: "￥349", brief: "静音轮胎，内饰纺织布料"},
            	{ src: require("../assets/img/life/cp5.jpg"), name: "90分金属登机箱 ", present: "￥999", brief: "去旅行，趁年轻"},
            	{ src: require("../assets/img/life/cp6.jpg"), name: "米兔招财猫足金吊坠 ", present: "￥888", brief: "把好运戴在身边"},
            	{ src: require("../assets/img/life/cp7.jpg"), name: " TS 防蓝光护目镜 ", present: "￥99", brief: "新 视 界，有目共睹"},
            	{ src: require("../assets/img/life/cp8.jpg"), name: "尼龙偏光太阳镜 ", present: "￥199起", brief: "重塑专业，打造时尚"},
            	{ src: require("../assets/img/life/cp9.jpg"), name: "米家运动鞋2 ", present: "￥199", brief: "轻盈灵巧 动静皆宜"},
            	{ src: require("../assets/img/life/cp10.jpg"), name: "8H护颈乳胶枕两件装 ", present: "￥438", original: "￥478", brief: "多重黑科技 睡眠新神器"},
            	{ src: require("../assets/img/life/cp11.jpg"), name: "Free Tie 真皮板鞋 男款 ", present: "￥199", original: "", brief: "做一双简单的板鞋"},
            	{ src: require("../assets/img/life/cp12.jpg"), name: "90分旅行箱 20寸 ", present: "￥299", original: "", brief: "静音轮胎，内饰纺织布料"},
            	{ src: require("../assets/img/life/cp13.jpg"), name: "90分轻商务登机箱  ", present: "￥399", original: "", brief: "20寸免托运"},
            	{ src: require("../assets/img/life/cp14.jpg"), name: "多功能都市胸包 ", present: "￥69", original: "", brief: "装下你出行的所有需求"},
            	{ src: require("../assets/img/life/cp15.jpg"), name: "极简都市双肩包 ", present: "￥149", original: "", brief: "方形立体设计"},
            	{ src: require("../assets/img/life/cp16.jpg"), name: "自动折叠伞 ", present: "￥99", original: "", brief: "防泼水伞布，轻盈拒水"},
            ],
            life1t: [
            	{ src: require("../assets/img/box/cp1.jpg"), name: "小米盒子4", present: "￥299", original: "", brief: "人工智能语音机顶盒，海量片源"},
            	{ src: require("../assets/img/box/cp2.jpg"), name: "小米盒子4c", present: "￥199", original: "", brief: "第4代小米盒子储存，体验双升级"},
            	{ src: require("../assets/img/box/cp3.jpg"), name: "小米盒子3 增强版 ", present: "￥399", original: "￥449", brief: "高端 4K 网络机顶盒，标配智能遥控器"},
            	{ src: require("../assets/img/box/cp4.jpg"), name: "小米盒子3c", present: "￥199", original: "￥249", brief: "64 位处理器，PatchWall 人工智能系统"},
            	{ src: require("../assets/img/box/cp5.jpg"), name: "小米盒子3s", present: "￥299", original: "￥349", brief: "4K 超高清机顶盒，64 位处理器支持 HDR"},
            ]
		}
	},
	components: {
		List,
		Banner,
		SyNav,
		SyTj,
		SyCpmbT,
		SyCpmbB,
		Footer,
		SjBanner,
		Advertisement,
		SjMainT,
		MainT,
		MainB
	},
	methods:{
		tab: function(index){
			this.num = index;
			var tabbodys = document.querySelectorAll(".bodys"),
				len = tabbodys.length;
			for(var i=0; i<len; i++){
				tabbodys[i].style.height = 0;
			}
			tabbodys[this.num].style.height = "auto";
		}
	},
	mounted(){
		new Swiper ('.swiper-container_banner', {
			pagination: {
		      el: '.swiper-pagination',
		   },
		}),
		new Swiper ('.swiper-container', {
			slidesPerView: 'auto',
		})
		
	}
}
</script>


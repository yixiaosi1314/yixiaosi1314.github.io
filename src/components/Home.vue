<template>
    <div class="box">
        <!-- 导航区域 -->
        <div class="header">
           <div class="header_sub">
               <el-menu
              class="el-menu-demo"
              mode="horizontal"
              text-color="#ccc"
              :router="true"
              active-text-color="#ffd04b">
                 <el-menu-item index="home">首页</el-menu-item>
                 <el-menu-item index="article">文章推荐</el-menu-item>
                 <el-menu-item index="aboutme">关于我</el-menu-item>
                 <el-menu-item index="cases">案例</el-menu-item>
                 <el-menu-item >
                     <template>
                       <div class="callme">
                           <span class="me">联系我</span>
                           <img src="../assets/erweima.jpg" class="erweima">
                       </div>
                     </template>
                 </el-menu-item>
              </el-menu>
           </div>
           
           <!-- 主体区域 -->
           <div class="logbox"><img src="../assets/logo.png" class="logo"></div>
           <div class="hello">HELLO,</div>
           <div class="yellow"></div>
           <div class="ds">
               <vue-typed-js :strings="['我是段思，一个自学者,爱好编程，摄影，设计与旅行！']" :loop="true" :showCursor="false" 	>
                  <span class="typing"></span>
               </vue-typed-js>
               <!-- <div class="daziji">{{str2}}</div> -->
               <!-- <div>我是段思，一个自学者</div>
               <div>爱好编程，摄影，设计与旅行！</div> -->
               <div class="homebtn" @click="addrouter">
                   <span>了解详情</span>
                   <div class="btnrow_box">
                       <div class="btnrow"></div>
                    </div>
                   <div class="circle"></div>
               </div>
           </div>
        </div>
        <div class="content">
            <!-- 顶部修饰区域 -->
            <div class="top">
                <div class="leftrow"></div>
                <div class="books">推荐书籍</div>
                <div class="one">DESIGN  SKILLS</div>
                <div class="row"></div>
                <div class="two">MA OUO BJADK AD HK</div>
                <div class="rightrow"></div>
            </div>
           <!-- 主题内容区域 -->
           <div class="sub">
                <div class="bigbox">
                    <div class="detabox" @click="webPack">
                        <div class="over">
                            <img src="../assets/img.png">
                        </div>
                    </div>
                    <span class="boxone" @click="webPack">webpack打包之后的文件过大的解决方法</span>
                </div>
                <div class="bigbox">
                    <div class="detabox" @click="lazyload">
                        <div class="over">
                            <img src="../assets/img2.png">
                        </div>
                    </div>
                    <span class="boxone" @click="lazyload">什么是懒加载</span>
                </div>
                <div class="bigbox">
                    <div class="detabox"  @click="router">
                        <div class="over">
                            <img src="../assets/img3.png">
                        </div>
                    </div> 
                    <span class="boxone" @click="router">前端路由原理解析和实现</span>
                </div>
                
                
            </div>
            <!-- 更多 -->
            <el-button class="morebtn" @click="articleRouter">MORE <i class="el-icon-arrow-right el-icon-right"></i></el-button>
        </div>
         <!-- 案例模块 -->
        <div class="case">
            <div class="case_text">MY <br> CASES <br>DISPLAY</div>
            <div class="case_row"></div>
            <div class="case_font">我的案例展示</div>
            
            <div class="case_img_box">
                <div v-for="(value,index) in imgulrs" :key="index" class="case_imgs" :class="index" >
                    <img :src="value">
                    <div class="imgulr_bgc">
                        <p>电商店铺设计</p>
                        <p>网站专题—无痕剃须时代的风向标</p>
                    </div>
                </div>
                
                
            </div>
        </div>
          <!-- 技能模块 -->
        <div class="skill">
           <div class="top">
               <div class="leftrow"></div>
               <div class="books">我的技能</div>
               <div class="one">MY SKILLS</div>
               <div class="row"></div>
               <div class="two">MA OUO BJADK AD HK</div>
               <div class="rightrow"></div>
           </div> 
           <div class="intr">我从小就对科技有着无尽的好奇心，因此一直在通过互联网学习编程</div>
           <!-- 技能条 -->
           <div class="skill_box">
               <div class="skill_bar">
                 <div class="skill_perc"> JAVA</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc vue"> VUE</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc htmlcss"> HTML+CSS</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc skill_js"> JS</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc study"> 学习能力</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc design"> 程序设计</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc applets"> 小程序</div>
               </div>
               <div class="skill_bar">
                   <div class="skill_perc page"> 电商网页</div>
               </div>
           </div>
        </div>
        <!-- 底部区域 -->
        <div class="footer">
            <ul class="contact">
                <li>联系方式：</li>
                <li><i class="el-icon-message"></i>704183787@qq.com</li>
                <li><i class="el-icon-location-outline"></i>湖南省长沙市岳麓区学士路755号</li>
                <li><i class="el-icon-phone-outline"></i> 15116347651</li>
            </ul>
            <div class="copy">CopyRight © 2021  duansi.  All Rights Resrved</div>
        </div>
    </div>
</template>

<script>
export default {
   data() {
       return {
           activeIndex:'1',
           activeName:'first',
           imgulrs:{
               imgulr:require('../assets/img2.png'),
               imgulr1:require('../assets/img3.png'),
               imgulr2:require('../assets/img4.png'),
               imgulr3:require('../assets/img5.png'),
           }
           

       }
   },
   created() {
      // this.typing()
      console.log(this.imgulrs);
   },
   methods:{
       look() {
           console.log(this.index);
       },  

       addrouter() {
           this.$router.push('/aboutme')
       },

       articleRouter() {
           this.$router.push('/article')
       },
       webPack() {
           const {href} = this.$router.resolve('/webpack')
            window.open(href, '_blank')
       },
       lazyload() {
           const {href} = this.$router.resolve('/lazyload')
            window.open(href, '_blank')
       },
       router() {
           const {href} = this.$router.resolve('/router')
            window.open(href, '_blank')
       }
        
   }
}
</script>

<style lang="less" scoped>
.logbox{
    width: 88px;

}

.logo {
    width: 100%;
    margin-top: 43px;
    margin-left: 69px;
}

.hello {
    position: absolute;
    top: 299px;
    left: 104px;
    width: 506px;
    height: 251px;
    font-size: 190px;
    font-family: Bebas;
    color: #FFFFFF;
    line-height: 251px;
}

.yellow {
    width: 375px;
    height: 24px;
    background: #FFE600;
    margin-top: 411px;
    margin-left: 301px;
}

.ds {
    position: relative;
    width: 420px;
    height: 84px;
    margin-top: 53px;
    margin-left: 308px;
    font-size: 30px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 42px;
}
.typing{
    position: absolute;
    top: 0;
}

.homebtn {
    position: relative;
    width: 276px;
    height: 76px;
    background: #34393D;
    margin-top: 195px;
    box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.7), 0px 2px 0px 0px #464B4E;
    border-radius: 39px;
}
.homebtn:hover span{
    transform: translateX(10px);
    
}
.homebtn:hover .btnrow{
     transform: translateX(67px);
}
.homebtn:hover .circle{
    border: 2px solid #fff;
}
.homebtn span {
    position: absolute;
    top: 19px;
    left: 36px;
    width: 104px;
    height: 37px;
    font-size: 26px;
    font-weight: 600;
    color: #E9EFF3;
    line-height: 37px;
    transition: 0.2s;
    text-shadow: 0px 1px 0px #6F6F71, 0px 10px 10px rgba(0, 0, 0, 0.5), 0px -5px 4px #494E53;
}
.btnrow_box{
    
    position: absolute;
    top: 36px;
    right: 47px;
    width: 67px;
    height: 3px;
    z-index: 2;
    overflow: hidden;

}
.btnrow {
    width: 67px;
    height: 3px;
    background: linear-gradient(270deg, #FAFAFA 0%, rgba(64, 70, 73, 0.6) 100%);
    border-radius: 1px;
    transition: 0.2s;
}

.circle {
    position: absolute;
    top: 19px;
    right: 29px;
    width: 38px;
    height: 38px;
    background: linear-gradient(134deg, #505559 0%, #828588 100%);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    z-index: 1;
}
.content .top {
    position: relative;
}
.leftrow{
    position: absolute;
    top: 108px;
    left: 308px;
    width: 506px;
    height: 2px;
    background: #D9DADC;
}
.rightrow{
    position: absolute;
    top: 108px;
    left: 1106px;
    width: 506px;
    height: 2px;
    background: #D9DADC;
}

.books{
    position: absolute;
    top: 62px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 500;
    color: #566788;
    line-height: 25px;
}

.one{
    position: absolute;
    top: 87px;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
    font-size: 30px;
    font-weight: 500;
    color: #30446A;
    line-height: 42px;
}

.row{
    position: absolute;
    top: 139px;
    left: 945px;
    width: 28px;
    height: 4px;
    background: #30446A;
}

.two{
    position: absolute;
    top: 161px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: 400;
    color: #BBC0CB;
    line-height: 14px;
}
.skill{
    position: relative;
    width: 1920px;
    height: 834px;
    border-top: 1px solid #EDF0F4 ;
    background: #EDF0F4;
}

.intr{
    width: 640px;
    height: 114px;
    margin: 192px 0 0 660px;
    font-size: 40px;
    font-family: SourceHanSerifCN-SemiBold, SourceHanSerifCN;
    font-weight: 600;
    color: #30446A;
    line-height: 57px;
}
.skill_bar{
    float: left;
    width: 538px;
    height: 54px;
    background: #DEE4EB;
    box-shadow: 1px 2px 2px 0px #C2C5C9 inset, 0px -2px 0px 0px #F7F8FA inset;
    border-radius: 26px;
    overflow: hidden;
    margin-left:240px ;
    margin-top: 50px;
    line-height: 46px;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    text-align:left ;
}
.skill_bar .skill_perc{
    width: 57%;
    height: 46px;
    background: linear-gradient(90deg, #71B1F9 0%, #3078ED 100%);
    border-radius: 23px;
    margin: 4px ;
    padding-left: 22px ;
}
.skill_bar .vue{
    width: 90%;
    height: 46px;
    background: linear-gradient(90deg, #F3A369 0%, #EC7D2E 100%);
    border-radius: 23px;
}
.skill_bar .htmlcss{
    width: 91%;
    height: 46px;
    background: linear-gradient(90deg, #7ACF3A 0%, #5BAB0C 100%);
    border-radius: 23px;
}
.skill_bar .skill_js{
    width: 85%;
height: 46px;
background: linear-gradient(90deg, #2BCEF6 0%, #129CE5 100%);
border-radius: 23px;
}
.skill_bar .study{
    width: 80%;
height: 46px;
background: linear-gradient(90deg, #FF986F 0%, #ED6732 100%);
border-radius: 23px;
}

.skill_bar .design{
width: 56%;
height: 46px;
background: linear-gradient(90deg, #DA40EE 0%, #B430ED 100%);
border-radius: 23px;
} 
.skill_bar  .applets{
width: 60%;
height: 46px;
background: linear-gradient(90deg, #6A87F6 0%, #6839EF 100%);
border-radius: 23px;
}
.skill_bar .page{
    width: 70%;
height: 46px;
background: linear-gradient(90deg, #F3638F 0%, #ED3063 100%);
border-radius: 23px;
}
.skill_box{
    margin-top: 20px;
}
.case{
    position: relative;
    width: 1920px;
    height: 675px;
    border-top: 1px solid #27292D ;
    background: #27292D;
}
.case_text{
    width: 255px;
    height: 210px;
    margin: 115px 0 0 148px;
    font-size: 60px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 70px;
}
.case_row{
    width: 34px;
    height: 6px;
    background: #F4F4F4;
    margin: 27px 0 0 152px;
}
.case_font{
    height: 25px;
    margin: 32px 0 0 146px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #E6E7E8;
    line-height: 25px;
}


.content{
    position: relative;
    width: 1920px;
    height: 977px;
    background: #EDF0F4;
}


.sub{
    position: absolute;
    top: 200px;
    left: 90px;
    
    
}


.sub .bigbox{
    position: relative;
    float: left;
    margin-right: 65px;
    margin-bottom: 113px;
    font-size: 18px;
    font-weight: 500;
    color: #30446A;
    line-height: 25px;
}

.sub .detabox{
    position: relative;
    width: 530px;
    height: 320px;
    background: linear-gradient(136deg, #EAEEF2 0%, #ECEFF3 100%);
    box-shadow: 20px 40px 44px 0px rgba(175, 183, 191, 0.3), 60px 52px 54px 0px rgba(176, 183, 193, 0.3), 2px 1px 0px 0px #FCFCFC;
    border-radius: 8px;
}
.detabox .over{
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 510px;
    height: 310px;
    overflow: hidden;
}
.sub .detabox img{
    width: 100%;
    transition:  all 0.6s;
}

.sub .detabox img:hover{
    transform: scale(1.06)
}
.sub .bigbox span:hover{
    font-weight: 600px;
    color: #2BCEF6;
}
.boxone{
    position: absolute;
    top: 340px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
}


 .morebtn{
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 196px;
    height: 56px;
    
    background: linear-gradient(136deg, #EAEEF2 0%, #ECEFF3 100%);
    box-shadow: 1px 1px 0px 0px #F7F8FA;
    border-radius: 3px;
    transform: translateX(-50%);
}
.el-icon-arrow-right{
    font-size: 18px;
    margin-left: 10px ;
}
.case_btnbox{
    position: relative;
    margin:75px 0 0 150px;
    width: 150px;
}
.case_btnbox .page{
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
}
.case_btnbox .el-button{
    
    width: 46px;
    height: 46px;
    background: #34393D;
}
.case_btnbox_right{
    float: right;
}

.case_img_box{
    position: absolute;
    top: 100px;
    left:500px ;
    width: 1500px;
    height: 500px;

}
.case_imgs{
    position: relative;
    float: left;
    width: 344px;
    height: 450px;
    margin: 10px 0 0 20px;
}
.case_imgs img{
    width: 344px;
    height: 344px;
}
// .case_img_box .case_imgs::before{
//     content: "电商店铺设计";
//     position: absolute;
//     left: 30px;
//     bottom: 60px;
//     width: 96px;
//     height: 22px;
//     font-size: 16px;
//     font-weight: 600;
//     color: #F1F1F1;
//     line-height: 22px;
// }
// .case_img_box .case_imgs::after{
//         content: "网站专题—无痕剃须时代的风向标";
//         position: absolute;
//         left: 30px;
//         bottom: 30px;
//         width: 210px;
//         height: 20px;
//         font-size: 14px;
//         font-weight: 400;
//         color: rgba(255, 255, 255, 0.65);
//         line-height: 20px; 
// }
.imgulr_bgc{
    margin-top: -20px;
    padding:  20px;
    color: #F1F1F1;
    font-size: 14px;
}
.imgulr_bgc div{
    font-weight: 900;
    font-size: 18px;
}
.case_imgs:hover .imgulr_bgc{
    background: #FFC419;
    color: #353637;
}
</style>

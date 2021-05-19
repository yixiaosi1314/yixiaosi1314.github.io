<template>
    <div class="box">
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

           <div class="text">
               <p>自我简介:</p>
               <div>因为一些原因，让我离科班擦肩而过，奈何我还是对计算机有着无限向往，如今通过自学，希望在it行业走出自己的一片天</div>
               <div>对电脑有着浓厚的兴趣，曾几何时，也痴迷与游戏无法自拔，也希望有朝一日能做出自己的游戏</div>
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
                <li><i class="el-icon-arrow-right el-icon-phone-outline"></i> 15116347651</li>
            </ul>
            <div class="copy">CopyRight © 2021  duansi.  All Rights Resrved</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.text{
    position: absolute;
    top: 200px;
    left: 200px;
    width: 400px;
    height: 600px;
    
    background-image: linear-gradient(#5187c4, #1c2f45);
    background-size: auto 200%;
    background-position: 0 100%;
    transition: background-position 0.5s;
    color: honeydew;
    font-size: 20px;
    
}
.text div{
    margin: 10px;
    padding:  15px;
}

.text:hover{
    background-position: 0 0;
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
    right: 308px;
    width: 506px;
    height: 2px;
    background: #D9DADC;
}

.books{
    position: absolute;
    top: 62px;
    left: 50%;
    transform: translateX(-50%);
    height: 25px;
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
    height: 14px;
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
    margin: 192px auto 0;
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
    width: 309px;
    height: 46px;
    background: linear-gradient(90deg, #71B1F9 0%, #3078ED 100%);
    border-radius: 23px;
    margin: 4px ;
    padding-left: 22px ;
}
.skill_bar .vue{
    width: 465px;
    height: 46px;
    background: linear-gradient(90deg, #F3A369 0%, #EC7D2E 100%);
    border-radius: 23px;
}
.skill_bar .htmlcss{
    width: 464px;
    height: 46px;
    background: linear-gradient(90deg, #7ACF3A 0%, #5BAB0C 100%);
    border-radius: 23px;
}
.skill_bar .skill_js{
    width: 429px;
height: 46px;
background: linear-gradient(90deg, #2BCEF6 0%, #129CE5 100%);
border-radius: 23px;
}
.skill_bar .study{
    width: 408px;
height: 46px;
background: linear-gradient(90deg, #FF986F 0%, #ED6732 100%);
border-radius: 23px;
}

.skill_bar .design{
width: 303px;
height: 46px;
background: linear-gradient(90deg, #DA40EE 0%, #B430ED 100%);
border-radius: 23px;
} 
.skill_bar  .applets{
width: 360px;
height: 46px;
background: linear-gradient(90deg, #6A87F6 0%, #6839EF 100%);
border-radius: 23px;
}
.skill_bar .page{
    width: 342px;
height: 46px;
background: linear-gradient(90deg, #F3638F 0%, #ED3063 100%);
border-radius: 23px;
}
.skill_box{
    margin-top: 20px;
}
</style>
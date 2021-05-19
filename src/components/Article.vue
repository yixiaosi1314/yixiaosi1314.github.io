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
              <!-- 导航模块 -->
              <!-- <el-menu mode="horizontal" class="nav" router>
                 <el-menu-item>首页</el-menu-item>
                 <el-menu-item index="article/java">JAVA</el-menu-item>
                 <el-menu-item index="3">Html</el-menu-item>
                 <el-menu-item index="4">算法与教学</el-menu-item>
                 <el-menu-item index="5">艺术与设计</el-menu-item>
                 <el-menu-item index="6">Vue</el-menu-item>
                 <el-menu-item index="7">JS</el-menu-item>
              </el-menu> -->
              <el-tabs v-model="activeName" class="nav">
                <el-tab-pane label="JAVA" name="second">
                    <div class="bigbox">
                       <div class="detabox" @click="lazyload">
                           <img src="../assets/img2.png">
                       </div>
                       <div class="boxone" @click="lazyload">什么是懒加载</div>
                    </div>
                    <div class="bigbox">
                       <div class="detabox"  @click="router">
                           <img src="../assets/img3.png">
                       </div> 
                       <div class="boxone" @click="router">前端路由原理解析和实现</div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Html" name="third">敬请期待</el-tab-pane>
                <el-tab-pane label="Vue" name="fourth">敬请期待</el-tab-pane>
                <el-tab-pane label="算法与教学" name="fifth">
                    <div class="bigbox">
                    <div class="detabox" @click="webPack">
                        <img src="../assets/img.png">
                    </div>
                    <span class="boxone" @click="webPack">webpack打包之后的文件过大的解决方法</span>
                </div>
                </el-tab-pane>
                <el-tab-pane label="艺术与设计" name="sixth">敬请期待</el-tab-pane>
              </el-tabs>

              

              <!-- 详情模块 -->
             
              

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
      data() {
          return {
              activeName:'second'
          }
      },

      created() {},

      methods:{
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


.content{
    width: 1920px;
    height: 1377px;
    background: #EDF0F4;
}
.content .top{
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
    right: 308px;
    width: 506px;
    height: 2px;
    background: #D9DADC;
}

.books{
    position: absolute;
    top: 62px;
    left: 924px;
    width: 72px;
    height: 25px;
    font-size: 18px;
    font-weight: 500;
    color: #566788;
    line-height: 25px;
}

.one{
    position: absolute;
    top: 87px;
    left: 842px;
    width: 236px;
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
    left: 895px;
    width: 142px;
    height: 14px;
    font-size: 10px;
    font-weight: 400;
    color: #BBC0CB;
    line-height: 14px;
}
.sub{
    position: relative;
}
.sub .nav{
    position: absolute;
    top: 225px;
    left: 50%;
    transform: translateX(-50%);
    width: 1466px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #30446A;
    line-height: 22px;
     background-color: transparent;
}

.nav .el-menu-item{
    margin-right: 125px;
}
.deta{
    position: absolute;
    top: 327px;
    left: 100px;
    
}
.deta .bigbox{
    position: relative;
    float: left;
    margin-right: 65px;
    margin-bottom: 113px;
    font-size: 18px;
    font-weight: 500;
    color: #30446A;
    line-height: 25px;
}

.deta .detabox{
    width: 530px;
    height: 320px;
    background: linear-gradient(136deg, #EAEEF2 0%, #ECEFF3 100%);
    box-shadow: 20px 40px 44px 0px rgba(175, 183, 191, 0.3), 60px 52px 54px 0px rgba(176, 183, 193, 0.3), 2px 1px 0px 0px #FCFCFC;
    border-radius: 8px;
}
.deta .detabox img{
    margin: 14px;
}

.boxone:hover{
    color: royalblue;

}

.boxtwo{
    position: absolute;
    top: 373px;
    left: 230px;
    font-size: 14px;
    font-weight: 400;
    color: #AAAAAA;
    line-height: 20px;
}

.morebtn{
    width: 196px;
    height: 56px;
    background: linear-gradient(136deg, #EAEEF2 0%, #ECEFF3 100%);
    box-shadow: 1px 1px 0px 0px #F7F8FA;
    border-radius: 3px;
    margin: 84px 762px 84px;
}
.el-icon-arrow-right{
    font-size: 18px;
    margin-left: 10px ;
}
.bigbox{
    float: left;
    margin: 20px;
}
</style>

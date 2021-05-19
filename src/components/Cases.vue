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
        <!-- 案例模块 -->
        <div class="case">
            <div class="case_text">MY <br> CASES <br>DISPLAY</div>
            <div class="case_row"></div>
            <div class="case_font">我的案例展示</div>
            <div class="haha">敬请期待...</div>
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
    width: 108px;
    height: 25px;
    margin: 32px 0 0 146px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #E6E7E8;
    line-height: 25px;
}
.haha{
    position: absolute;
    top: 250px;
    left: 600px;
    font-size: 50px;
    color: honeydew;
}
</style>
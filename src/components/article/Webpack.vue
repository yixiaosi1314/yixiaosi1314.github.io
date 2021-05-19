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
                           <img src="../../assets/erweima.jpg" class="erweima">
                       </div>
                     </template>
                 </el-menu-item>
              </el-menu>
           </div>
        </div>
        <!-- 内容文本  -->
        <div class="text">
            <h2>webpack打包之后的文件过大的解决方法</h2>
            <p>
                以前一直使用create-react-app这个脚手架进行react开发，后面因为一些自定义的配置，转而使用webpack搭建一套自己的脚手架。但是在使用webpack打包之后发现，纳尼？怎么文件这么大？？？
                于是研究了一下如何处理webpack打包之后文件太大的情况，简单记录下来。
            </p>

            <h3 id="one">首先配置全局变量</h3>

            <p>
                首先，通过指定环境，告诉webpack我们当前处于production环境中，要按照production的方式去打包。
            </p>
            <div class="daima">
                <div> //指定环境，将process.env.NODE_ENV环境与library关联</div>
                <div> new Webpack.DefinePlugin({</div>
                <div class="suojin">'process.env.NODE_ENV': JSON.stringify('production'),</div>
                <div>}),</div>
            </div>

            <h3>优化devtool中的source-map.</h3>

            <p>dev-tool提供了很多种选项，用来增强我们debug的能力，我们熟知的有：source-map,inline-source-map,cheap-source-map等等。详细的用法可以参考Devtool官方文档，
            Devtool配置对比，webpack sourcemap 选项多种模式的一些解释，</p>
            <p>https://webpack.github.io/docs/configuration.html#devtool如果你的文件在打包之后突然变成好几M，那么不用想，肯定是因为source-map的原因。source-map在开发阶段确实很好用，调试起来很方便，但是在生产环境下就没必要部署了。
            建议在prod环境下关闭source-map。</p>

            <h3  id="two">剥离css文件，单独打包</h3>

            <p>安装webpack插件extract-text-webpack-plugin。 npm install extract-text-webpack-plugin --save-dev。 使用方法：</p>
            <div class="daima">
                <div>plugins:[</div>
                <div class="suojin"> new ExtractTextPlugin('static/css/styles.[contenthash].css'),</div>
                <div>]</div>
            </div>
            <p>这里使用了contenthash，webpack会根据内容去生成hash值。</p>
            <h3>使用UglifyJSPlugin压缩。</h3>
            <p>通过UglifyJSPlugin可以压缩我们的*.js文件。 安装方法: npm install uglifyjs-webpack-plugin --save-dev。</p>
            <div class="daima">
                <div>const UglifyJsPlugin = require('uglifyjs-webpack-plugin')</div>
                <div>module.exports = {</div>
                <div class="suojin">plugins: [</div>
                <div class="siem">new UglifyJSPlugin({</div>
                <div class="liuem">parallel: 4,</div>
                <div class="liuem">uglifyOptions: {</div>
                <div class="baem">output: {</div>
                <div class="shiem">comments: false,</div>
                <div class="shiem">beautify: false,</div>
                <div class="baem">},</div>
                <div class="baem">compress: {</div>
                <div class="shiem">warnings: false</div>
                <div class="baem">},</div>
                <div class="liuem">},</div>
                <div class="liuem">cache: true,</div>
                <div class="siem">}),</div>
                <div class="suojin">]</div>
                <div>}</div>
            </div>

            <h3 id="three">提取公共依赖</h3>

            <p>使用CommonsChunkPlugin插件，将多个js文件进行提取，建立一个独立的文件。这个文件包含一些共用模块，浏这样览器只在刚开始的时候加载一次，
            便缓存起来供后续使用。而不用每次访问一个新界面时，再去加载一个更大的文件。</p>
            <div class="daima">
                <div> entry:{</div>
                <div class="suojin">app:'./entry',</div>
                <div class="suojin">vendor:['react','other-lib'],</div>
                <div> },</div>
                <div> plugins:[</div>
                <div class="suojin"> new Webpack.optimize.CommonsChunkPlugin({</div>
                <div class="siem"> name: 'vendor',</div>
                <div class="suojin">}),</div>
                <div>]</div>
            </div>

            <h3 id="fore">开启gzip压缩</h3>

            <p>我们使用compression-webpack-plugin插件进行压缩。 安装：npm install compression-webpack-plugin --save-dev。 
            compression-webpack-plugin 详细用法 使用：</p>
            <div class="daima">
                <div>const CompressionPlugin = require("compression-webpack-plugin");</div>
                <div>plugins:[</div>
                <div>new CompressionPlugin({</div>
                <div class="suojin">//目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串</div>
                <div class="suojin">asset: '[path].gz[query]', </div>
                <div class="suojin">algorithm: 'gzip',//算法</div>
                <div class="suojin">test: new RegExp(</div>
                <div class="siem">'\\.(js|css)$'    //压缩 js 与 css</div>
                <div class="suojin">),</div>
                <div class="suojin">threshold: 10240,//只处理比这个值大的资源。按字节计算</div>
                <div class="suojin">minRatio: 0.8//只有压缩率比这个值小的资源才会被处理</div>
                <div>})</div>
                <div>]</div>
            </div>
            <p>压缩结果：</p>
            <div class="images">
                <img src="../../assets/1.png">
                <img src="../../assets/2.png">
            </div>

            <h3 id="five">开启html压缩，自动添加上面生成的静态资源</h3>

            <p>添加插件html-webpack-plugin 安装： npm install html-webpack-plugin --save-dev 用法：</p>
            <div class="daima">
                <div>plugins:[</div>
                <div class="suojin">new HtmlWebpackPlugin({</div>
                <div class="siem">title: '',</div>
                <div class="siem">template: __dirname + '/../public/index.html',</div>
                <div class="siem">minify: {</div>
                <div class="liuem">removeComments: true,</div>
                <div class="liuem">collapseWhitespace: true,</div>
                <div class="liuem">removeRedundantAttributes: true,</div>
                <div class="liuem">useShortDoctype: true,</div>
                <div class="liuem">removeEmptyAttributes: true,</div>
                <div class="liuem">removeStyleLinkTypeAttributes: true,</div>
                <div class="liuem">keepClosingSlash: true,</div>
                <div class="liuem">minifyJS: true,</div>
                <div class="liuem">minifyCSS: true,</div>
                <div class="liuem">minifyURLs: true,</div>
                <div class="siem">},</div>
                <div class="siem">chunksSortMode:'dependency'</div>
                <div class="suojin">}),</div>
                <div>]</div>
            </div>

            <div class="zhanwei"></div>
        </div>
        
        <!-- 尾部区域 -->
        <div class="tail">
               <div><span><i class="el-icon-user-solid">文章作者：</i>yixiaosi</span></div>
               <div>
                   <i class="el-icon-link">原文链接:</i>
                   <a href="https://juejin.cn/post/6844903569917739021">https://juejin.cn/post/6844903569917739021</a>
               </div>
        </div>

        <!-- 目录 -->
        <ol class="catalogue" :class="{ fixed: isfixTab }">
            <li><a href="#one">1.配置全局变量</a></li>
            <li><a href="#two">2.剥离css文件</a></li>
            <li><a href="#three">3.提取公共依赖</a></li>
            <li><a href="#fore">4.开启gzip压缩</a></li>
            <li><a href="#five">5.自动添加静态资源</a></li>
            
        </ol>
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
            isfixTab:false
        }
    },
    created() {
        this.handleTabFix()
    },
    mounted () {
        window.addEventListener('scroll', this.handleTabFix, true)
    },
    //离开当前组件前一定要清除滚动监听，否则进入其他路由会报错
    beforeRouteLeave (to, from, next) {
      window.removeEventListener('scroll', this.handleTabFix, true)
      next()
    },
    methods:{
        handleTabFix() {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 
          scrollTop > 450 ? this.isfixTab = true : this.isfixTab = false
          console.log(scrollTop);
        }

    }
}
</script>

<style lang="less" scoped>

.box .header{
    height: 500px;
    background-size: 100%;
}

.box{
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(125deg,#E4FFCD,#6DD5FA,#2980B9,#E4FFCD);  
    background-size: 400%;
    animation:mymove 20s ease infinite;
    -webkit-animation: mymove 20s ease infinite;
    -moz-animation: mymove 20s ease infinite;
}

@keyframes mymove{
		0% {background-position: 0% 0%; }
		50% {background-position: 50% 100%; }
		100% {background-position: 100% 0%; }
}

.text {
    width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    border-radius: 10px;
}
.tail{
    width: 800px;
    margin: 30px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid red;
    border-radius: 10px;
}
.tail div{
    margin: 10px;
}
.tail a{
    margin-left: 10px;
    color: green;
}
.tail a:hover{
    color: skyblue;
}
h3{
    margin: 20px 0;
}

.daima{
   
    background-color: #ccc;
    margin: 10px 0;
    font-size: 14px;
}
.daima div{
    padding: 5px 20px;
}
.suojin{
    margin-left: 2em;
}
.siem{
    margin-left: 4em;
}
.liuem{
    margin-left: 6em;
}
.baem{
    margin-left: 8em;
}
.shiem{
    margin-left: 10em;
}
.images img{
    width: 100%;
    margin-bottom: 20px;
}

.catalogue{
    position: absolute;
    top: 485px;
    left: 1400px;
    width: 200px;
    padding: 0 0 50px 30px;
    background-color:green;
    color: #fff;
}
.box .fixed{
    position: fixed;
    top: 25px;
    left: 1400px;
}
a{
    color: #fff;
}
.catalogue li {
    margin: 10px;
}
.zhanwei{
    height: 50px;
}
</style>
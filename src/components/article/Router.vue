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
            <h2>前端路由原理解析和实现</h2>
            <h3 id="one">什么是前端路由？</h3>
            <p>路由的概念来源于服务端，在服务端中路由描述的是 URL 与处理函数之间的映射关系。 </p>
            <p>在 Web 前端单页应用 SPA(Single Page Application)中，路由描述的是 URL 与 UI 之间的映射关系，
                这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）。
            </p>

            <h3 id="two">如何实现前端路由？</h3>

            <p>
                要实现前端路由，需要解决两个核心
            </p>
            <ol>
                <li>如何改变 URL 却不引起页面刷新？</li>
                <li>如何检测 URL 变化了？</li>
            </ol>

            <p>下面分别使用 hash 和 history 两种实现方式回答上面的两个核心问题。</p>

            <p>hash 实现</p>
            <ol>
                <li>hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，改变 URL 中的 hash 部分不会引起页面刷新</li>
                <li>通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：通过浏览器前进后退改变 URL、通过 &lt a>标签改变 URL、
                    通过window.location改变URL，这几种情况改变 URL 都会触发 hashchange 事件
                 </li>
            </ol>

            <p>history 实现</p>
            <ol>
                <li>history 提供了 pushState 和 replaceState 两个方法，这两个方法改变 URL 的 path 部分不会引起页面刷新</li>
                <li>history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件有些不同：通过浏览器前进后退改变 URL 
                时会触发 popstate 事件，通过pushState/replaceState或 &lt a>标签改变 URL 不会触发 popstate 事件。好在我们可以拦截
                pushState/replaceState的调用和 &lt a>标签的点击事件来检测 URL 变化，所以监听 URL 变化可以实现，只是没有 hashchange
                 那么方便。
                 </li>
            </ol>

            <h3 id="three">原生JS版前端路由实现</h3>

            <p>基于上节讨论的两种实现方式，分别实现 hash 版本和 history 版本的路由，示例使用原生 HTML/JS 实现，不依赖任何框架。，</p>

            <h4>基于 hash 实现</h4>
            <p>运行效果：</p>
            <div>
                <img src="../../assets/3.png">
            </div>
            <p>HTML 部分：</p>
            <div class="daima">
                <div>&lt body></div>
                <div class="suojin">&lt ul></div>
                <div class="siem">&lt !-- 定义路由 --></div>
                <div class="siem">&lt li> &lt a href="#/home">home&lt /a>&lt /li></div>
                <div class="siem">&lt li>&lt a href="#/about">about&lt /a>&lt /li></div>
                <div></div>
                <div class="siem">&lt !-- 渲染路由对应的 UI --></div>
                <div class="siem">&lt div id="routeView">&lt /div></div>
                <div class="suojin">&lt /ul></div>
                <div>&lt /body></div>
            </div>
            <p>JavaScript 部分：</p>
            <div class="daima">
                <div>// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件</div>
                <div>window.addEventListener('DOMContentLoaded', onLoad)</div>
                <div>// 监听路由变化</div>
                <div>window.addEventListener('hashchange', onHashChange)</div>
                <div></div>
                <div>// 路由视图</div>
                <div>var routerView = null</div>
                <div></div>
                <div>function onLoad () {</div>
                <div class="suojin">routerView = document.querySelector('#routeView')</div>
                <div class="suojin"> onHashChange()</div>
                <div>}</div>
                <div></div>
                <div>// 路由变化时，根据路由渲染对应 UI</div>
                <div>function onHashChange () {</div>
                <div class="suojin">switch (location.hash) {</div>
                <div class="siem">case '#/home':</div>
                <div class="liuem">routerView.innerHTML = 'Home'</div>
                <div class="liuem"> return</div>
                <div class="siem">case '#/about':</div>
                <div class="liuem">routerView.innerHTML = 'About'</div>
                <div class="liuem">return</div>
                <div class="siem">default:</div>
                <div class="liuem">return</div>
                <div class="suojin">}</div>
                <div>}</div>
            </div>

            <h4>基于 history 实现</h4>
            <p>运行效果：</p>
            <div>
                <img src="../../assets/4.png">
            </div>
            <p>HTML 部分：</p>
            <div class="daima">
                <div>&lt body></div>
                <div class="suojin">&lt ul></div>
                <div class="siem">&lt !-- 定义路由 --></div>
                <div class="siem">&lt li> &lt a href="#/home">home&lt /a>&lt /li></div>
                <div class="siem">&lt li>&lt a href="#/about">about&lt /a>&lt /li></div>
                <div></div>
                <div class="siem">&lt div id="routeView">&lt /div></div>
                <div class="suojin">&lt /ul></div>
                <div>&lt /body></div>
            </div>
            <p>JavaScript 部分：</p>
            <div class="daima">
                <div>// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件</div>
                <div>window.addEventListener('DOMContentLoaded', onLoad)</div>
                <div>// 监听路由变化</div>
                <div>window.addEventListener('hashchange', onHashChange)</div>
                <div></div>
                <div>// 路由视图</div>
                <div>var routerView = null</div>
                <div></div>
                <div>function onLoad () {</div>
                <div class="suojin">routerView = document.querySelector('#routeView')</div>
                <div class="suojin"> onPopState()</div>
                <div></div>
                <div class="suojin">// 拦截 &lt a> 标签点击事件默认行为， 点击时使用 pushState 修改 URL并更新手动 UI，从而实现点击链接更新 URL 和 UI 的效果。</div>
                <div class="suojin"> var linkList = document.querySelectorAll('a[href]')</div>
                <div class="suojin">linkList.forEach(el => el.addEventListener('click', function (e) {</div>
                <div class="siem">e.preventDefault()</div>
                <div class="siem">history.pushState(null, '', el.getAttribute('href'))</div>
                <div class="siem">onPopState()</div>
                <div class="suojin">}))</div>
                <div>}</div>
                <div></div>
                <div>// 路由变化时，根据路由渲染对应 UI</div>
                <div>function onPopState () {</div>
                <div class="suojin"> switch (location.pathname) {</div>
                <div class="siem">case '/home':</div>
                <div class="liuem">routerView.innerHTML = 'Home'</div>
                <div class="liuem">return</div>
                <div class="siem">case '/about':</div>
                <div class="liuem">routerView.innerHTML = 'About'</div>
                <div class="liuem">return</div>
                <div class="siem">default:</div>
                <div class="liuem">return</div>
                <div class="suojin">}</div>
                <div>}</div>

            </div>

            <h3 id="fore">Vue 版本前端路由实现</h3>

            <h4>基于 hash 实现</h4>
            <p>运行效果：</p>
            <div>
                <img src="../../assets/5.png">
            </div>
            <p>使用方式和 vue-router 类似（vue-router 通过插件机制注入路由，但是这样隐藏了实现细节，为了保持代码直观，这里没有使用 Vue 插件封装）：</p>
            <div class="daima">
                <div>&lt body></div>
                <div class="suojin">&lt ul></div>
                <div class="siem">&lt !-- 定义路由 --></div>
                <div class="siem">&lt li> &lt a href="#/home">home&lt /a>&lt /li></div>
                <div class="siem">&lt li>&lt a href="#/about">about&lt /a>&lt /li></div>
                <div></div>
                <div class="siem">&lt div id="routeView">&lt /div></div>
                <div class="suojin">&lt /ul></div>
                <div>&lt /body></div>
            </div>

            <div class="daima">
                <div>const routes = {</div>
                <div class="suojin">'/home': {</div>
                <div class="siem">template: ' &lt h2>Home &lt /h2>'</div>
                <div class="suojin">},</div>
                <div class="suojin">'/about': {</div>
                <div class="siem">template: ' &lt h2>About &lt /h2>'</div>
                <div class="suojin">}</div>
                <div>}</div>
                <div></div>
                <div>const app = new Vue({</div>
                <div class="suojin">el: '.vue.hash',</div>
                <div class="suojin">components: {</div>
                <div class="siem">'router-view': RouterView,</div>
                <div class="siem">'router-link': RouterLink</div>
                <div class="suojin">},</div>
                <div class="suojin">beforeCreate () {</div>
                <div class="siem">this.$routes = routes</div>
                <div class="suojin">}</div>
                <div>})</div>
                <div></div>
            </div>
            <p>router-view 实现</p>
            <div class="daima">
                <div> &lt template></div>
                <div class="suojin"> &lt component :is="routeView" /></div>
                <div> &lt /template></div>
                <div></div>
                <div> &lt script></div>
                <div>import utils from '~/utils.js'</div>
                <div>export default {</div>
                <div class="suojin">data () {</div>
                <div class="siem">return {</div>
                <div class="liuem">routeView: null</div>
                <div class="siem">}</div>
                <div class="suojin">},</div>
                <div class="suojin">created () {</div>
                <div class="siem">this.boundHashChange = this.onHashChange.bind(this)</div>
                <div class="suojin">},</div>
                <div class="suojin">beforeMount () {</div>
                <div class="siem">window.addEventListener('hashchange', this.boundHashChange)</div>
                <div class="suojin"> },</div>
                <div class="suojin">mounted () {</div>
                <div class="siem">this.onHashChange()</div>
                <div class="suojin">},</div>
                <div class="suojin">beforeDestroy() {</div>
                <div class="siem">window.removeEventListener('hashchange', this.boundHashChange)</div>
                <div class="suojin">},</div>
                <div class="suojin">methods: {</div>
                <div class="siem">onHashChange () {</div>
                <div class="liuem">const path = utils.extractHashPath(window.location.href)</div>
                <div class="liuem">this.routeView = this.$root.$routes[path] || null</div>
                <div class="liuem">console.log('vue:hashchange:', path)</div>
                <div class="siem">}</div>
                <div class="suojin">}</div>
                <div>}</div>
                <div> &lt /script></div>

            </div>

            <h3 id="five">小结</h3>
            <p>前端路由的核心实现原理很简单，但是结合具体框架后，框架增加了很多特性，如动态路由、路由参数、路由动画等等，这些导致路由实现变的
                复杂。本文去粗取精只针对前端路由最核心部分的实现进行分析，并基于 hash 和 history 两种模式，分别提供原生JS/Vue 两种实现，
                共计六个实现版本供参考，希望对你有所帮助。</p>

            <p>所有的示例的代码放在 Github 仓库：
                <a href="https://github.com/whinc/web-router-principle"  target="_blank">github.com/whinc/web-r…</a>
            </p>

            <div class="zhanwei"></div>
        </div>
        
        <!-- 尾部区域 -->
        <div class="tail">
               <div><span><i class="el-icon-user-solid">文章作者：</i>yixiaosi</span></div>
               <div>
                   <i class="el-icon-link">原文链接:</i>
                   <a href="https://juejin.cn/post/6844903842643968014" target="_blank">https://juejin.cn/post/6844903842643968014</a>
               </div>
        </div>

        <!-- 目录 -->
        <ol class="catalogue" :class="{ fixed: isfixTab }">
            <li><a href="#one">什么是前端路由？</a></li>
            <li><a href="#two">如何实现前端路由？</a></li>
            <li><a href="#three">原生JS版前端路由实现</a></li>
            <li><a href="#fore">Vue 版本前端路由实现</a></li>
            <li><a href="#five">小结</a></li>
            
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
    font-family: '楷体';
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
    color: #2980B9;
}
.catalogue a{
    color: #fff;
}
.catalogue li {
    margin: 10px;
}
.zhanwei{
    height: 50px;
}
</style>
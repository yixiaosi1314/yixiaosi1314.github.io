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
           <h2>浅析懒加载</h2>
           <h3 id="one">什么是懒加载</h3>
           <p>懒加载也叫延迟加载，指的是在长网页中延迟加载图像，是一种很好优化网页性能的方式。用户滚动到它们之前，可视区域外的图像不会加载。
               这与图像预加载相反，在长网页上使用延迟加载将使网页加载更快。在某些情况下，它还可以帮助减少服务器负载。常适用图片很多，页面很
               长的电商网站场景中。
           </p>
           <h3 id="two">为什么要用懒加载</h3>
           <p>
               <div>
                   <span>1.</span>
                   能提升用户的体验，不妨设想下，用户打开像手机淘宝长页面的时候，如果页面上所有的图片都需要加载，由于图片数目较大，等待时间很长，用户难免会心生抱怨，这就严重影响用户体验。
               </div>
               <div>
                   <span>2.</span>
                   减少无效资源的加载，这样能明显减少了服务器的压力和流量，也能够减小浏览器的负担。
               </div>
               <div>
                   <span>3.</span>
                   防止并发加载的资源过多会阻塞js的加载，影响网站的正常使用。
               </div>
           </p>
           <h3 id="three">懒加载的原理</h3>
           <p>
               首先将页面上的图片的 src 属性设为空字符串，而图片的真实路径则设置在data-original属性中，
               当页面滚动的时候需要去监听scroll事件，在scroll事件的回调中，判断我们的懒加载的图片是否进入可视区域,如果
               图片在可视区内将图片的 src 属性设置为data-original 的值，这样就可以实现延迟加载。
           </p>
           <h3 id="fore">懒加载实现步骤</h3>

           <div class="daima">
               <div>&lt html lang="en"></div>
               <div>&lt head></div>
               <div class="suojin">&lt meta charset="UTF-8"></div>
               <div class="suojin">&lt title>Lazyload &lt /title></div>
               <div class="suojin">&lt style></div>
               <div class="siem">.image-item {</div>
               <div class="liuem">display: block;</div>
               <div class="liuem">margin-bottom: 50px;</div>
               <div class="liuem">height: 200px;//一定记得设置图片高度</div>
               <div class="siem">}</div>
               <div class="suojin">&lt /style></div>
               <div>&lt /head></div>
               <div>&lt body></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/1.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/2.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/3.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/4.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/5.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/6.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/7.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/8.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/9.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/10.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/11.png"/></div>
               <div class="suojin">&lt img src="" class="image-item" lazyload="true"  data-original="images/12.png"/></div>
               <div class="suojin">&lt script></div>
               <div class="suojin">var viewHeight =document.documentElement.clientHeight//获取可视区高度</div>
               <div class="suojin">function lazyload(){</div>
               <div class="siem">var eles=document.querySelectorAll（'img[data-original][lazyload]'）</div>
               <div class="siem">Array.prototype.forEach.call(eles,function(item,index){</div>
               <div class="siem">var rect</div>
               <div class="siem">if(item.dataset.original==="")</div>
               <div class="siem">return</div>
               <div class="siem">rect=item.getBoundingClientRect()// 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置</div>
               <div class="siem">if(rect.bottom>=0 && rect.top < viewHeight){</div>
               <div class="liuem">!function(){</div>
               <div class="baem">var img=new Image()</div>
               <div class="baem">img.src=item.dataset.original</div>
               <div class="baem">img.onload=function(){</div>
               <div class="shiem">item.src=img.src</div>
               <div class="baem">}</div>
               <div class="baem">item.removeAttribute（"data-original"）//移除属性，下次不再遍历</div>
               <div class="baem">item.removeAttribute（"lazyload"）</div>
               <div class="liuem">}()</div>
               <div class="siem">}</div>
               <div class="suojin">})</div>
               <div class="suojin">}</div>
               <div class="suojin">lazyload()//刚开始还没滚动屏幕时，要先触发一次函数，初始化首页的页面图片</div>
               <div class="suojin">document.addEventListener（"scroll"，lazyload)</div>
               <div class="suojin">&lt /script></div>
               <div>&lt /body></div>
               <div>&lt /html></div>
           </div>
           <h3 id="five">总结</h3>
           <p>懒加载是提高页面性能有效的办法，原理是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用。</p>

           <div class="zhanwei"></div>
        </div>
        
        <!-- 尾部区域 -->
        <div class="tail">
               <div><span><i class="el-icon-user-solid">文章作者：</i>yixiaosi</span></div>
               <div>
                   <i class="el-icon-link">原文链接:</i>
                   <a href="https://juejin.cn/post/6844903614138286094">https://juejin.cn/post/6844903614138286094</a>
               </div>
        </div>

        <!-- 目录 -->
        <ol class="catalogue" :class="{ fixed: isfixTab }">
            <li><a href="#one">什么是懒加载</a></li>
            <li><a href="#two">为什么要用懒加载</a></li>
            <li><a href="#three">懒加载的原理</a></li>
            <li><a href="#fore">懒加载实现步骤</a></li>
            <li><a href="#five">总结</a></li>
            
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
    font-size: 12px;
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
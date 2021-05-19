import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Article from '../components/Article.vue'
import Aboutme from '../components/Aboutme.vue'
import Cases from '../components/Cases.vue'
import Webpack from '../components/article/Webpack.vue'
import Lazyload from '../components/article/Lazyload.vue'
import Router from '../components/article/Router.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        {
            path: '/article',
            component: Article,
            //redirect: 'Article',

        },
        { path: '/aboutme', component: Aboutme },
        { path: '/cases', component: Cases },
        { path: '/webpack', component: Webpack },
        { path: '/lazyload', component: Lazyload },
        { path: '/router', component: Router },


    ]
})

export default router
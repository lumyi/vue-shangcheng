import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入Test组件
import Login from "./components/tabbar/Login.vue"
import Goodlist from "./components/tabbar/Goodlist.vue"
import GoodInfo from "./components/tabbar/GoodInfo.vue"
import Home from "./components/tabbar/Home.vue"
import Newslist from "./components/home/Newslist.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import ShopCart from "./components/home/ShopCart.vue"
Vue.use(Router)
//2:为Test组件配置访问路径 /Login
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    // {path:'/',component:Home,children:[
    //   {path:'/Home',component:Home}
    // ]},
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    
    {path:'/Login',component:Login},
    {path:'/Goodlist',component:Goodlist},
    {path:'/GoodInfo',component:GoodInfo},
    {path:'/Newslist',component:Newslist},
    {path:'/NewsInfo',component:NewsInfo},
    {path:'/ShopCart',component:ShopCart},


  ]
})
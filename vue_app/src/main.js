import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false

// 引入Vuex组件
import Vuex from "vuex"
// 注册Vuex组件
Vue.use(Vuex)
// 创建store对象
var store=new Vuex.Store({
  state:{
    cartCount:sessionStorage.getItem("cartCount")||0
  },
  mutations:{
    increment(state){
      state.cartCount++;
      sessionStorage.setItem("cartCount",state.cartCount);
    }
  },
  getters:{
    optCartCount:function(state){
      return state.cartCount;
    }
  }
})
// 将store绑定在Vue实例


//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//1:引入mint-ui组件
import {Header,Button,Swipe,SwipeItem} from "mint-ui"
//2:注册mint-ui组件
Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

// 引入 qs
// 解决axios的post请求问题
import qs from "qs"
// 注册 qs
Vue.prototype.qs=qs;

// 设置跨域
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

// 时间过滤器
Vue.filter("timer",function(value){
  // return new Date(value).toLocaleString();
  var time=new Date(value);
  var year=time.getFullYear();
  var month=time.getMonth();
  if(month<10){month="0"+month}; //month<10&&month="0"+month
  var date=time.getDate();
  if(date<10){date="0"+date};
  var hours=time.getHours();
  if(hours<10){hours="0"+hours};
  var minutes=time.getMinutes();
  if(minutes<10){minutes="0"+minutes};
  var seconds=time.getSeconds();
  if(seconds<10){seconds="0"+seconds};
  return year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+seconds;
});

new Vue({ 
  router,
  render: h => h(App),
  store
}).$mount('#app')

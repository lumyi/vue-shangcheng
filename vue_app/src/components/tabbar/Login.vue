<template>
  <div class="app-login">
    <h1>登入组件</h1>
    <form>
      用户名：
      <input type="text" v-model="uname">
      <br>
      密码：
      <input type="password" v-model="upwd">
      <br>
      <input type="button" value="登录" @click="login">
      </form>
  </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
  data(){
    return {
      uname:"",
      upwd:"",
    }
  },
  methods:{
    //登入
    login(){
      // console.log(123);
      // 1：获取用户输入用户名和密码
      var u=this.uname;
      var p=this.upwd;
      // console.log(u+":"+p)
      // 2：创建正则验证用户名和密码格式是否正确
      var reg=/^[a-z0-9_]{3,8}$/i;
      if(!reg.test(u)){
        Toast("用户名格式不正确，请检查");
        return;
      }
      if(!reg.test(p)){
        Toast("密码格式不正确，请检查");
        return;
      }
      // 3：发送ajax
      
      this.axios.get(
        "http://127.0.0.1:3000/login",
        {
          params:{
            uname:u,
            upwd:p
          }
        }).then((res)=>{
          if(res.data.code==1){
            Toast(res.data.msg);
          }else{
            Toast(res.data.msg);
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>>

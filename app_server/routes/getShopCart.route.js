const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
    // 拦截没有登入的用户
    // console.log(req.sessionID);
    // if(!req.session.uid){
    //     res.send({code:-1,data:[],msg:"请登入"});
    //     return;
    // }
    // 1：参数 uid 用户登录成功保存在服务器
    // 服务器对象 session
    // var uid=req.session.uid;//后面替换
    var uid=1;
    // 2:sql
    var sql="select id,uid,pid,price,pname from xz_cart where uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })

})

module.exports=router;
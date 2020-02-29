const express=require("express");
const router=express.Router();
const pool=require("../pool");



// 功能一：用户登录
router.get('/',(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="select id from xz_login where uname=? and upwd=md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) console.log(err);
        if(result.length==0){
            res.send({code:-1,msg:"用户名或者密码错误"});
        }else{
            // 登入成功
            // 获取用户的id
            var uid=result[0].id;
            // 保存到session对象中
            req.session.uid=uid;
            console.log(req.sessionID);
            res.send({code:1,msg:"登入成功"+req.session.uid});
        }
    })
})

module.exports=router;
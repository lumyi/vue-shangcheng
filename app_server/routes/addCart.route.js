const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.get('/',(req,res)=>{
    // 1:获取参数
    var obj=req.query;
    var uid=5;
    var pid=obj.pid;
    var price=obj.price;
    var pname=obj.pname;
    // 2:判断用户是否登入
    // 3:查询用户是否添加过此商品
    var sql="select id from xz_cart where uid=? and pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            // 如果没有查询结果添加此商品
            var sql=`insert into xz_cart(uid,pid,price,pname,count) values(${uid},${pid},${price},'${pname}',1)`;
        }else{
            // 如果有查询结果更新数量
            var sql=`update xz_cart set count=count+1 where uid=${uid} and pid=${pid}`;
        };
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send({code:1,msg:"添加成功"});
        })

    });
    
    

})
module.exports=router;
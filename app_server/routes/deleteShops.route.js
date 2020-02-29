const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.get('/',(req,res)=>{
    var ids=req.query.ids;
    var sql="delete from xz_cart where id in ("+ids+")";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除多个商品"});
        }else{
            res.send({code:-1,msg:"删除失败"});
        }
    })
})

module.exports=router;
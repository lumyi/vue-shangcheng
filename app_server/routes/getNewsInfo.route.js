const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.get('/',(req,res)=>{
    var nid=req.query.nid;
    var reg=/^[0-9]{1,}$/;
    if(!reg.test(nid)){
        res.send({code:-1,msg:"参数格式不正确"});
        return;
    };
    var sql="select id,img_url,title,ctime from xz_news where id=?";
    pool.query(sql,[nid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,data:result});
        }
    })
})

module.exports=router;
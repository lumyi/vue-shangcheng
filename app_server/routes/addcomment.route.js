const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.post('/',(req,res)=>{
    var nid=req.body.nid;
    var content=req.body.content;
    var sql="insert into xz_comment values(null,?,?,now())";
    pool.query(sql,[nid,content],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"添加成功"});
    });
})

module.exports=router;
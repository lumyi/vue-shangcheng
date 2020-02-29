const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.get('/',(req,res)=>{
    var nid=req.query.nid;
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno){pno=1};
    if(!pageSize){pageSize=5};
    pno=(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
    var sql="select id,nid,content,ctime from xz_comment where nid=? limit ?,?";
    pool.query(sql,[nid,pno,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })
})

module.exports=router;
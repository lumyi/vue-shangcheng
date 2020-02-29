const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.get('/',(req,res)=>{
    var lid=req.query.lid;
    var sql="select lid,price,title,lname from xz_laptop where lid=?";
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})

module.exports=router;
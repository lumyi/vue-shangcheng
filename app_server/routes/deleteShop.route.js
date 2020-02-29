const express = require('express');
const router=express.Router();
const pool=require('../pool');

router.post('/',(req,res)=>{
    var id =req.body.id;
    var sql="delete from xz_cart where id=?";
    id=parseInt(id);
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"});
        }else{
            res.send({code:-1,msg:"删除失败"});

        }
    })
})

module.exports=router;
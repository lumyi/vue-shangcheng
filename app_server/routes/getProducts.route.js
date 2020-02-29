const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    if(!pno){pno=1};
    if(!pageSize){pageSize=4};
    pno=(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
    // res.send(pno+":"+pageSize);
    var sql="select l.lid,l.lname,l.price,p.md from xz_laptop l,xz_laptop_pic p where l.lid=p.laptop_id group by l.lid limit ?,?";
    pool.query(sql,[pno,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })

})

module.exports=router;
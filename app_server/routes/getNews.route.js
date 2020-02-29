const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/',(req,res)=>{
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    if(!pno){pno=1};
    if(!pageSize){pageSize=7};
    var sql="select id,img_url,title,ctime,point from xz_news limit ?,?";
    pno=(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
    pool.query(sql,[pno,pageSize],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result});
    })

})

module.exports=router;
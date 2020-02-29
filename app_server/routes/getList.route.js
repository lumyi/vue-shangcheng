const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var rows=[
        {id:1,imgURL:"http://localhost:3000/img/index/banner1.png"},
        {id:2,imgURL:"http://localhost:3000/img/index/banner2.png"},
        {id:3,imgURL:"http://localhost:3000/img/index/banner3.png"},
        {id:4,imgURL:"http://localhost:3000/img/index/banner4.png"}
    ];
    res.send({code:1,data:rows});
})

module.exports=router;
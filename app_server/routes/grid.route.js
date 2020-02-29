const express=require("express");
const router=express.Router();
const pool=require("../pool");



// 功能一：用户登录
router.get('/',(req,res)=>{
    var rows=[
        {id:1,title:"新闻",imgURL:"http://localhost:3000/img/grid/menu1.png"},
        {id:2,title:"商品",imgURL:"http://localhost:3000/img/grid/menu2.png"},
        {id:3,title:"点餐",imgURL:"http://localhost:3000/img/grid/menu3.png"},
        {id:4,title:"新闻",imgURL:"http://localhost:3000/img/grid/menu4.png"},
        {id:5,title:"新闻",imgURL:"http://localhost:3000/img/grid/menu5.png"},
        {id:6,title:"新闻",imgURL:"http://localhost:3000/img/grid/menu6.png"}
    ];
    res.send({code:1,data:rows});
})

module.exports=router;
// 1:引入mysql express
const mysql=require("mysql");
const express=require("express");
const cors=require("cors")
const session=require("express-session")

// 3:创建express对象，服务器
var server=express();

//配置允许访问 脚手架8080
server.use(cors({
    origin:['http://localhost:8080','http://127.0.0.1:8080'],
    credentials:true
}))
// 配置express-session
server.use(session({
    secret:"128位随机字符串",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60
    }
}))
// 托管静态页面
server.use(express.static("public"));

// 配置中间件--body-parser
const bodyParser=require('body-parser');
server.use(bodyParser.urlencoded({extended:false}));

// 监听端口
server.listen(3000);

/*引入路由模块*/
const login=require("./routes/login.route");
const getProducts=require("./routes/getProducts.route");
const getList=require("./routes/getList.route");
const grid=require("./routes/grid.route");
const getNews=require("./routes/getNews.route");
const getNewsInfo=require("./routes/getNewsInfo.route");
const addcomment=require("./routes/addcomment.route");
const getComment=require("./routes/getComment.route");
const getShopCart=require("./routes/getShopCart.route");
const deleteShop=require("./routes/deleteShop.route");
const deleteShops=require("./routes/deleteShops.route");
const addCart=require("./routes/addCart.route");
const findProduct=require("./routes/findProduct.route");

/*使用路由器来管理路由*/
server.use("/login",login);
server.use("/getProducts",getProducts);
server.use("/getList",getList);
server.use("/grid",grid);
server.use("/getNews",getNews);
server.use("/getNewsInfo",getNewsInfo);
server.use("/addcomment",addcomment);
server.use("/getComment",getComment);
server.use("/getShopCart",getShopCart);
server.use("/deleteShop",deleteShop);
server.use("/deleteShops",deleteShops);
server.use("/addCart",addCart);
server.use("/findProduct",findProduct);




-- 任务登入表
-- 1：创建表 xz_login
CREATE TABLE xz_login (
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
    upwd VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));

-- 创建新闻表
CREATE TABLE xz_news(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(255),
    ctime DATETIME,
    point INT,
    content VARCHAR(2000)
);
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","111",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","112",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","113",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","114",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","115",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","116",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","117",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","118",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","119",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","120",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","121",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","122",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","123",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","124",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","125",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","126",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","127",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","128",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","129",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","130",now(),0,"111");
INSERT INTO xz_news VALUES(NULL,"http://localhost:3000/img/1.png","131",now(),0,"111");

-- 创建评论表
CREATE TABLE xz_comment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nid INT,
    content VARCHAR(150),
    ctime DATETIME
);

-- 创建购物车表
CREATE TABLE xz_cart(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    pid INT,
    price DECIMAL(10,2),
    pname VARCHAR(255)
);
INSERT INTO xz_cart VALUES(null,1,11,100,'茶');
INSERT INTO xz_cart VALUES(null,1,12,100,'烟');
INSERT INTO xz_cart VALUES(null,1,13,100,'酒');
INSERT INTO xz_cart VALUES(null,1,14,100,'茶');
INSERT INTO xz_cart VALUES(null,1,15,100,'烟');
INSERT INTO xz_cart VALUES(null,1,16,100,'酒');
INSERT INTO xz_cart VALUES(null,1,17,100,'茶');
INSERT INTO xz_cart VALUES(null,1,28,100,'烟');
INSERT INTO xz_cart VALUES(null,1,29,100,'酒');
INSERT INTO xz_cart VALUES(null,1,20,100,'茶');
INSERT INTO xz_cart VALUES(null,1,21,100,'烟');
INSERT INTO xz_cart VALUES(null,1,23,100,'酒');
INSERT INTO xz_cart VALUES(null,1,24,100,'茶');
INSERT INTO xz_cart VALUES(null,1,25,100,'烟');
INSERT INTO xz_cart VALUES(null,1,26,100,'酒');
INSERT INTO xz_cart VALUES(null,1,27,100,'茶');
INSERT INTO xz_cart VALUES(null,1,28,100,'烟');
INSERT INTO xz_cart VALUES(null,1,29,100,'酒');
INSERT INTO xz_cart VALUES(null,1,30,100,'茶');
INSERT INTO xz_cart VALUES(null,2,1,110,'烟');

ALTER TABLE xz_cart ADD count INT;
UPDATE xz_cart SET count=1;
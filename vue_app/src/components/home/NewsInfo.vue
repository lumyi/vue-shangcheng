<template>
    <div class="app-newsInfo">
        <!-- 新闻详情 -->
        <div class="mui-card">
            <div class="mui-card-header mui-card-media" :style="`height:40vw;background-image:url(${info.img_url})`"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>{{info.ctime | timer}}</p>
                    <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
		</div>
        <!-- 新闻评论 -->
        <div class="mui-card">
            <div class="mui-card-header">
                
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <textarea placeholder="请评论，最多150字" maxlength="150" v-model="comment">
                    </textarea>
                    <mt-button size="large" type="primary" @click="addComment">发表评论</mt-button>
                </div>
            </div>
            <div class="mui-card-footer"></div>
		</div>
        <!-- 新闻评论列表 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <div class="cmt-list">
                       <div class="cmt-item" v-for="(item,i) of commentList" :key="i">
                           <div>第{{i+1}}楼 {{item.ctime | timer}}</div>
                           <div>评论内容：{{item.content}}</div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            nid:this.$route.query.nid,
            info:{},//新闻信息
            comment:"",//评论内容
            pno:0,
            pageSize:5,
            commentList:[]//评论列表
        }
    },
    created(){
        this.findInfo();
        this.loadMore();
    },
    methods:{
        //获取新闻信息
        findInfo(){
            this.axios.get(
                "http://localhost:3000/getNewsInfo",
                {
                    params:{
                        nid:this.nid
                    }
                }
            ).then((res)=>{
                this.info=res.data.data[0];
            })
        },
        //发表评论
        addComment(){
            // 新闻编号，新闻内容
            // 新闻内容两头清空，判断
            this.comment=this.comment.trim();
            if(this.comment==''){
                Toast('评论为空');
                return;
            };
            // 发送post
            var postData=this.qs.stringify({
                nid:this.nid,
                content:this.comment
            });
            this.axios.post(
                "http://localhost:3000/addcomment",
                postData
            ).then((res)=>{
            // 提示添加成功
                Toast(res.data.msg);
                // 清空评论
                this.comment="";
                // 加载评论列表
                this.pno=0;
                this.commentList=[];
                this.loadMore();
            })
            
        },
         // 加载更多评论
        loadMore(){
            this.pno++;
            var reg=/^[0-9]{1,}$/;
            if(!reg.test(this.pno)){Toast("pno格式不正确");return};
            if(!reg.test(this.pageSize)){Toast("pageSize格式不正确");return};
            this.axios.get(
                "http://localhost:3000/getComment",
                {
                    params:{
                        nid:this.nid,
                        pno:this.pno,
                        pageSize:this.pageSize
                    }
                }
            ).then((res)=>{
                // var rows=this.commentList.concat(res.data.data);
                // this.commentList=rows;
                this.commentList=res.data.data;
            })
        }
    }


}

</script>

<style>
    
</style>
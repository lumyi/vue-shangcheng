<template>
    <div class="app-goodlist">
        <!-- 商品详情 start -->
        <div class="good-item" v-for="(item,i) of list" :key="i">
            <img :src="`http://localhost:3000/${item.md}`" alt="" @click.prevent="jumpInfo" :data-lid="item.lid">
            <h4>{{item.lname}}</h4>
            <div class="info">
                <span class="now">¥{{item.price.toFixed(2)}}</span>
            </div>
            <div class="sell">
                <span>热卖中</span>
            </div>
        </div>
        <!-- 商品详情 end -->
        <!-- 加载更多··· -->
        <mt-button size="large" type="primary" @click="loadMore">加载更多···</mt-button>
    </div>
</template>
<script>
export default { 
    data(){
        return {
            pno:0,
            pageSize:4,
            list:[]
        }
    },
    methods:{
        // 跳转到商品详情页
        jumpInfo(e){
            var lid = e.target.dataset.lid;
            this.$router.push(`/GoodInfo?lid=${lid}`);
        },
        loadMore(){
            // 获取当前页码,控制加载下一页
            this.pno++;
            // 获取商品信息
            this.axios.get(
                "http://localhost:3000/getProducts",
                {
                    params:{
                        pno:this.pno,
                        pageSize:this.pageSize
                    }
                }
            ).then((res=>{
                // 获取服务器换返回的的结果 用concat拼接
                var rows=this.list.concat(res.data.data);
                this.list=rows;
            }))
        }
    },
    created(){
        // 页面加载好，商品信息默认加载
        this.loadMore();
    }
}
</script>

<style>
    /* 外层父元素 */
    .app-goodlist{
        display: flex;  
        flex-wrap: wrap;
        justify-content:space-between;
        padding:4px;
    }
    /* 商品详情 */
    .app-goodlist .good-item{
        width:49%;
        border:1px solid #ccc;
        margin:2px 0;
        padding:2px;
        display:flex;
        flex-direction:column;
        min-height:245px;
    }
    /* 商品图片 */
    .app-goodlist .good-item img{
        width:100%;
    }
    /* 商品名称 */
    /* 商品价格 */
</style>
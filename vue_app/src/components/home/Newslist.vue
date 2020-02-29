<template>
    <div class="app-news">
        <!-- 新闻列表 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,i) of newslist" :key="i">
                <router-link :to="`/NewsInfo?nid=${item.id}`">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>{{item.ctime | timer}}</span>
                            <span>点击 {{item.point}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <!-- 加载更多 -->
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            pno:0,
            newslist:[]
        }
    },
    methods:{
        loadMore(){
            this.pno++;
            this.axios.get(
                "http://localhost:3000/getNews",
                {
                    params:{
                        pno:this.pno
                    }
                }
            ).then((res)=>{
                // console.log(res.data);
                var rows=this.newslist.concat(res.data.data);
                this.newslist=rows;
            })
        },
    },
    created(){
        this.loadMore();
    }

}
</script>

<style>
    .app-news .mui-ellipsis{
        display:flex;
        font-size:12px;
        color:226aff;
        justify-content:space-between;

    }
</style>
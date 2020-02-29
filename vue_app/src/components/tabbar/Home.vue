<template>
    <div class="app-home">
        <!-- 轮播图  mint-->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,i) of list" :key="i">
                <img :src="item.imgURL">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格  mui-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,i) of grids" :key="i">
                <a href="#">
                    <img :src="item.imgURL" @click.prevent="jump" :data-id="item.id">
                    <div class="mui-media-body">{{item.title}}</div>
                </a>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],//轮播图
            grids:[]//九宫格
        }
    },
    methods:{
        // 跳转
        jump(e){
            // e.preventDefault();
            console.log(e);
            var id =parseInt(e.target.dataset.id);
            console.log(id);
            var path="/";
            switch(id){
                case 1:
                    path="/Newslist";
                    break;
                case 2:
                    path="/Goodlist";
                    break;
                default:
                    path="/";
            }
            console.log(path);
            this.$router.push(path);
        },
        // 加载轮播图数据
        handleImage(){
            this.axios.get(
                "http://localhost:3000/getList"
            ).then((res)=>{
                // console.log(res.data.data)
                this.list=res.data.data;
            })
        },
        // 加载九宫格
        grid(){
            this.axios.get(
                'http://localhost:3000/grid'
            ).then((res)=>{
                // console.log(res.data.data);
                this.grids=res.data.data;
            })
        }
    },
    created(){ 
        this.handleImage();
        this.grid();
    }
    
}
</script>
<style scoped>
    /* 轮播图的高度 */
    .app-home .mint-swipe {
        height:200px;
    }
    .app-home .mint-swipe img{
        width:100%;
    }
    /* 九宫格图片宽度 物理宽度和逻辑宽度 */
    .app-home .mui-grid-9 img{
        width:60px;
        height:60px;
    }
    .app-home .mui-grid-view.mui-grid-9 {
        background:#fff;
    }
</style>
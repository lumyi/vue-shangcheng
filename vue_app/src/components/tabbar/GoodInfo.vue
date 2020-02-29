<template>
    <div id="app-goodInfo">
        <h2>商品详细信息</h2>
        <div class="mui-card">
            <div class="mui-card-header">商品名称：{{info.lname}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>销售价：{{info.price.toFixed(2)}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lid:this.$route.query.lid,//上个组件传递的id
            info:{price:0},//显示商品对象
        }
    },
    created(){
        this.findProduct()
    },
    methods:{
        // 添加购物车
        addCart(){
            this.axios.get(
                "http://localhost:3000/addCart",
                {
                    params:{
                        pid:this.lid,
                        pname:this.info.lname,
                        price:this.info.price
                    }
                }
            ).then((res)=>{
                    console.log(res.data);
                    // 如果将商品已经加入购物车
                    this.$store.commit("increment");
                })
        },
        // 组件创建成功后，加载当前商品信息
        findProduct(){
            this.axios.get(
                "http://localhost:3000/findProduct",
                {
                    params:{
                        lid:this.lid
                    }
                }
            ).then((res)=>{
                this.info=res.data.data[0];
            })
        }
    }
}
</script>
<style>

</style>
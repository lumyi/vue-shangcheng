<template>
    <div class="app-shopcart">
        <div class="mui-card">
            <div class="mui-card-header">
                <!-- 添加全选框 -->
                全选<input type="checkbox" @click="selectAll" v-model="isSelected">
            </div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <ul class="mui-table-view">
                            <!-- 商品列表 -->
                            <li class="mui-table-view-cell mui-media" v-for="(item,i) of shopList" :key="i">
                                <input type="checkbox" name="shop" :data-id="item.id" v-model="item.cb" @click="selected" :data-i="i">
                                <a href="javascript:;">
                                    <img class="mui-media-object mui-pull-left" src="http://localhost:3000/img/1.png">
                                    <div class="mui-media-body">
                                        <p class='mui-ellipsis'>
                                            {{item.pname}}
                                            {{item.price.toFixed(2)}}
                                            <mt-button size="small" type="primary" :data-id="item.id"
                                            :data-i="i" @click="deleteShop">删除</mt-button>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="mui-card-footer">
                <input type="button" value="删除指定商品" @click="delShops">
            </div>
        </div>
    </div>
</template>
 
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            shopList:[],
            isSelected:false,
        }
    },
    created(){
        this.getShopList();
    },
    methods:{
        // 全选框
        selectAll(e){
            var cb=e.target.checked;
            for(var item of this.shopList){
                item.cb=cb;
            }
            this.isSelected=cb;
            // console.log(this.isSelected)
        },
        // 删除多个商品
        delShops(){
            var ids="";
            for(var item of this.shopList){
                if(item.cb==true){
                    ids+=item.id+",";
                }
            }
            ids=ids.replace(/,$/,"");
            if(ids.length==0){
                Toast("请选中要删除的商品");
                return;
            }
            // console.log(ids);
            this.axios.get(
                "http://localhost:3000/deleteShops",
                {
                    params:{
                        ids
                    }
                }
            ).then((res)=>{
                Toast(res.data.msg);
                this.getShopList();
            })
        },
        selected(e){
            // var id=e.target.dataset.id;
            // for(var item of this.shopList){
            //     if(item.id==id){
            //         if(item.cb==false){
            //             item.cb=true;
            //         }else{
            //             item.cb=false
            //         }
            //     }
            // }
            // 当前复选框选中状态
            var cb=e.target.checked;
            // 当前复选框在数组中的下标
            var i=e.target.dataset.i;
            // 让数组中的cb和当前复选框的状态一致
            this.shopList[i].cb=cb;
            // console.log(this.shopList);
            // 跟全选框关联
            var listSize=this.shopList.length;
            var count=0;
            for(var item of this.shopList){
                if(item.cb==true){
                    count+=1;
                }
            }
            if(listSize==count){
                this.isSelected=true;
            }else{
                this.isSelected=false;
            }
        },
        // 获得购物车中的商品
        getShopList(){
            this.axios.get(
                "http://localhost:3000/getShopCart"
            ).then((res)=>{
                // 为删除多个商品，添加cb属性，记录是否被选中
                var rows=res.data.data;
                for(var item of rows){
                    item.cb=false;
                }
                this.shopList=rows;
                // console.log(this.shopList);
                // 没有登入成功
                if(res.data.code==-1){
                    Toast(res.data.msg);
                }
            })
        },
        // 删除购物车中单个商品
        deleteShop(e){
            var i=e.target.dataset.i;
            var id=e.target.dataset.id;
            var postData=this.qs.stringify({
                id
            });
            this.axios.post(
                "http://localhost:3000/deleteShop",
                postData
            ).then((res)=>{
                Toast(res.data.msg);
                // 删除购物车中对应的商品，
                // this.getShopList();
                this.shopList.splice(i,1);
            })
        }

    }
}
</script>

<style>

</style>
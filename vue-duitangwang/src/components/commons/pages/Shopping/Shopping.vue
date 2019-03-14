<template>
    <div class="backend">
        <div class="center">
            <router-link
                v-for="nav in navs"
                :key="nav.id"
                :to="nav.path"
            >

           {{nav.name}} </router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .backend{
        width:100%;
        height:auto;
        background-color: rgba(126, 125, 125, 0.5);
        text-align: center;
    }
    .center{
        position: relative;
    }
    a{
        margin: 13px 14px 5px 10px;
        padding: 0 9px;
        border: 1px solid #fff;
        border-radius: 4px;
        font-size: 14px;
        line-height: 34px;
        display: inline-block;
        color: #fff;
    }
</style>
<script>
export default {
    data(){
        return {
            navs:[
                {id:1,name:"#上衣",path:"/"},
                {id:2,name:"#裙裤",path:"/"},
                {id:3,name:"#配饰",path:"/"},
                {id:4,name:"#鞋子",path:"/"},
                {id:5,name:"#包袋",path:"/"},
                {id:6,name:"#日杂",path:"/"},
            ]
        }
    }
}
</script>



<template>
    <div id="topBar">
        <el-row class="top-bar">
          <div class="top-wrapper">
            <el-breadcrumb separator="/" class="sole-bar">
              <span class="icon"><i class="el-icon-menu"></i></span>
              <el-breadcrumb-item :to="{ path: '/table' }">器具</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/table' }">{{breadlist}}</el-breadcrumb-item>
              <!--<el-breadcrumb-item>待处理</el-breadcrumb-item>-->
            </el-breadcrumb>
          </div>
        </el-row>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        avatar_url: 'http://img0.imgtn.bdimg.com/it/u=1787407765,2524017231&fm=11&gp=0.jpg',
        breadlist:''
      }
    },
    created() {
      this.getBread();
    },
    mounted() {
      console.log(66, this.$route)
    },
    methods: {
      getBread(){

        this.breadlist = this.$route.matched;
        this.$route.matched.forEach((item,index)=>{
          //先判断父级路由是否是空字符串或者meta是否为首页，直接复写路径到根路径
          item.meta.CName ===
          '首页' ? item.path =
            '/' : this.$route.path ===
            item.path;
        });
      }
    },
    watch:{
      $route(){
        this.breadlist = this.$route.name
        console.log(66, this.$route.name)
      }
    }
  }
</script>

<style scoped>
    #topBar{
      /*background: #B3C0D1;*/
    }
    .icon{
        color: #000000;
        float: left;
        margin-right: 5px;
    }

     .top-wrapper {
       height: 40px;
       background: #f9f9f9;
       border-bottom: 1px solid;
       padding-left: 20px;
     }

    .sole-bar{
      line-height: 40px;
    }
</style>

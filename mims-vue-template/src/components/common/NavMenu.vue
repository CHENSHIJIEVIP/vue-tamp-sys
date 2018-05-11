<template>
    <div id="navNenu">
        <el-menu default-active="1" id="nav-menu" unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <!--<div class="tools-btn">
                &lt;!&ndash;<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                  <el-radio-button :label="false">展开</el-radio-button>
                  <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>&ndash;&gt;
            </div>-->
            <!--<div>
              <el-menu-item index="1"  v-for="(item,index) of navMenu" :key="index"><router-link :to="item.path" class="nav-link"><i class="el-icon-document active-temp"></i>{{ item.name}}</router-link></el-menu-item>
              <el-submenu index="2" v-for="(itemChild,index) of item.child" :key="index">
                <template slot="title"><span class="active-temp"><i class="el-icon-plus active-temp"></i>{{itemChild.name}}</span></template>
                <el-submenu index="2-2" v-for="(itemChildlist,index) of itemChild.child" :key="index">
                  <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>{{itemChild.name}}</span></template>
                  <el-menu-item index="2-2-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>{{itemChildlist.name}}</router-link></el-menu-item>
                </el-submenu>
              </el-submenu>
            </div>-->
            <!--<el-menu-item index="2"><router-link to="/table" class="nav-link"><i class="el-icon-document active-temp"></i>首页</router-link></el-menu-item>
            <el-submenu index="1">
                <template slot="title"><span class="active-temp"><i class="el-icon-plus active-temp"></i>导航一</span></template>
                <el-menu-item index="1-1"><router-link to="/question" class="nav-link"><i class="el-icon-document active-temp"></i>Ajax Demo</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/user" class="nav-link"><i class="el-icon-document active-temp"></i>Vuex(User)</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><span class="active-temp"><i class="el-icon-plus active-temp"></i>导航二</span></template>
                <el-menu-item index="2-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>导航2-1</router-link></el-menu-item>
                <el-menu-item index="2-1"><router-link to="/#" class="nav-link"><i class="el-icon-document active-temp"></i>导航2-2</router-link></el-menu-item>
                <el-submenu index="2-2">
                  <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>导航2-3</span></template>
                  <el-menu-item index="2-2-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>导航2-3-1</router-link></el-menu-item>
                </el-submenu>
            </el-submenu>-->
            <div class="menuList">
                <el-menu-item index=""><router-link to="/home" class="nav-link"><i class="el-icon-menu active-temp"></i>首页</router-link></el-menu-item>
                <el-submenu index="1">
                  <template slot="title"><span class="active-temp"><i class="el-icon-menu active-temp"></i>器具</span></template>
                  <el-menu-item index="1-1"><router-link to="/ledger" class="nav-link"><i class="el-icon-document active-temp"></i>台账一览表</router-link></el-menu-item>
                  <el-menu-item index="1-2"><router-link to="/user" class="nav-link"><i class="el-icon-document active-temp"></i>器具新增</router-link></el-menu-item>
                  <el-submenu index="1-3">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具维修</span></template>
                    <el-menu-item index="1-3-1"><router-link to="/table" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-3-2"><router-link to="/132" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-3-3"><router-link to="/133" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-4">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具使用</span></template>
                    <el-menu-item index="1-4-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-4-2"><router-link to="/142" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-4-3"><router-link to="/143" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-5">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具报废</span></template>
                    <el-menu-item index="1-5-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-5-2"><router-link to="/152" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-5-3"><router-link to="/153" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-6">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具备件</span></template>
                    <el-menu-item index="1-6-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-6-2"><router-link to="/162" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-6-3"><router-link to="/163" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-7">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具停用</span></template>
                    <el-menu-item index="1-7-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-7-2"><router-link to="/172" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-7-3"><router-link to="/173" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-8">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具释放</span></template>
                    <el-menu-item index="1-8-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-8-2"><router-link to="/182" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-8-3"><router-link to="/183" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="1-9">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>器具采购</span></template>
                    <el-menu-item index="1-9-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="1-9-2"><router-link to="/192" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="1-9-3"><router-link to="/193" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"><span class="active-temp"><i class="el-icon-menu active-temp"></i>周检</span></template>
                  <el-submenu index="2-1">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>周检计划</span></template>
                    <el-menu-item index="2-1-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>待处理</router-link></el-menu-item>
                    <el-menu-item index="2-1-2"><router-link to="/212" class="nav-link"><i class="el-icon-document active-temp"></i>已处理</router-link></el-menu-item>
                    <el-menu-item index="2-1-3"><router-link to="/213" class="nav-link"><i class="el-icon-document active-temp"></i>查询</router-link></el-menu-item>
                  </el-submenu>
                  <el-submenu index="2-2">
                    <template slot="title" class="active-temp"><span class="active-temp"><i class="el-icon-plus active-temp"></i>周检统计</span></template>
                    <el-menu-item index="2-2-1"><router-link to="/221" class="nav-link"><i class="el-icon-document active-temp"></i>超期器具</router-link></el-menu-item>
                    <el-menu-item index="2-2-2"><router-link to="/222" class="nav-link"><i class="el-icon-document active-temp"></i>周检率</router-link></el-menu-item>
                  </el-submenu>
                  <el-menu-item index="2-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>完检确认</router-link></el-menu-item>
                  <el-menu-item index="2-1"><router-link to="/#" class="nav-link"><i class="el-icon-document active-temp"></i>周检确认</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title"><span class="active-temp"><i class="el-icon-menu active-temp"></i>送检</span></template>
                  <el-menu-item index="3-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>新送检单</router-link></el-menu-item>
                  <el-menu-item index="3-2"><router-link to="/32" class="nav-link"><i class="el-icon-document active-temp"></i>受理中送检单</router-link></el-menu-item>
                  <el-menu-item index="3-3"><router-link to="/33" class="nav-link"><i class="el-icon-document active-temp"></i>已完成送检单</router-link></el-menu-item>
                  <el-menu-item index="3-4"><router-link to="/34" class="nav-link"><i class="el-icon-document active-temp"></i>已退回送检单</router-link></el-menu-item>
                  <el-menu-item index="3-5"><router-link to="/35" class="nav-link"><i class="el-icon-document active-temp"></i>完检确认</router-link></el-menu-item>
                  <el-menu-item index="3-6"><router-link to="/36" class="nav-link"><i class="el-icon-document active-temp"></i>溯源机构</router-link></el-menu-item>
                  <el-menu-item index="3-7"><router-link to="/37" class="nav-link"><i class="el-icon-document active-temp"></i>送检统计</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title"><span class="active-temp"><i class="el-icon-menu active-temp"></i>设置</span></template>
                  <el-menu-item index="4-1"><router-link to="/404" class="nav-link"><i class="el-icon-document active-temp"></i>备案账号</router-link></el-menu-item>
                  <el-menu-item index="4-2"><router-link to="/42" class="nav-link"><i class="el-icon-document active-temp"></i>备案样品</router-link></el-menu-item>
                  <el-menu-item index="4-3"><router-link to="/43" class="nav-link"><i class="el-icon-document active-temp"></i>送检信息</router-link></el-menu-item>
                  <el-menu-item index="4-4"><router-link to="/44" class="nav-link"><i class="el-icon-document active-temp"></i>登录用户</router-link></el-menu-item>
                  <el-menu-item index="4-5"><router-link to="/45" class="nav-link"><i class="el-icon-document active-temp"></i>单位管理</router-link></el-menu-item>
                  <el-menu-item index="4-6"><router-link to="/46" class="nav-link"><i class="el-icon-document active-temp"></i>角色权限</router-link></el-menu-item>
                </el-submenu>
            </div>


        </el-menu>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            isCollapse: false,
            navMenu : []
          }
        },
        methods:{
            handleOpen(key, keyPath) {
              console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
              console.log(key, keyPath);
            }
        },
        /*created(){
          this.$http({
            method: 'get',
            url: './static/data/navMenu.json',
          }).then(res => {
            this.navMenu = res.data;
            console.log(this.navMenu);
          }).catch(error => {
              console.log(error)
            });
        }*/

    }
</script>

<style scoped>
    /*控制内容区域屏幕的高度*/
    #navNenu{
        width: 15%;
        height: calc(974px - 80px);
        float: left;
    }
    .menuList{
    }
</style>

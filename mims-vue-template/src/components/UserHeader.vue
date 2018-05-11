<template>
  <div id="userHeader">
    <div class="navbar-header">
      <a href="javascript:void(0)" class="navbar-brand">
        <small>
          <i class="icon-leaf"></i>
          计量器具管理系统<span></span>
        </small>
      </a>
    </div>
    <div class="user-login">
      <div class="user-area pull-right">
        <div class="user-avatar">
          <!--<span class="avatar-img" :style="{ backgroundImage: 'url(' + avatar_url + ')' }"></span>-->
          <span class="avatar-img"></span>
          <i class="el-icon-arrow-down"></i>
          <div class="drop-menu">
            <ul>
              <!--<li><i class="iconfont">&#xe603;</i>管理员</li>-->
              <li @click="outLogin"><i class="iconfont">&#xe602;</i>退出</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    outLogin(){
      this.$router.replace('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #userHeader{
      height: 60px;
      background: #438eb9;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      margin-bottom: 5px;
     /* background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,0.15) 50%,rgba(30,30,30,0) 100%);*/
      background-color: #3f9fd9;
      margin-bottom: 10px;
    }

    .navbar-header{
      width: 200px;
      font-family: 'Shojumaru', cursive, Arial, serif;
      line-height: 56px;
      text-align: center;
      position: relative;
    }

    .navbar-brand{
      font-size: 24px;
      color: #ffffff;
    }

    .drop-menu li{
    }

</style>

<template>
  <div id="userHeader">
    <div class="navbar-header pull-left">
      <a href="javascript:void(0)" class="navbar-brand">
        <small>
          <i class="icon-leaf"></i>
          计量器具管理系统<span></span>
        </small>
      </a>
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
  }

  .navbar-brand{
    font-size: 24px;
    color: #ffffff;
  }

  .drop-menu li{
  }

</style>

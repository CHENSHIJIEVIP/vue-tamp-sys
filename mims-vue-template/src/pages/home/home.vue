<template>
    <div id="home">
        <h2>计量器具管理系统 <small>欢迎进入...</small></h2>
        <!--<a href="javascript:;" @click="getFun">get</a>
        <div>{{msg}}</div>-->
    </div>
</template>
<script>
  export default {
    data () {
      return {
        activeName: '1',
        msg:'sdf'
      }
    },
    methods:{
/*      getFun(){
        axios.get('http://localhost:8087/static/test/test.json').then(response=>{
          console.info(response);
        }).catch(error =>{
          console.info(error);

        })

      }*/
      getFun: function () {
        this.$http({
          url: '/static/test/test.json',
          type: 'get'
        }).then(res => {
          console.log(res.data)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
    h2{
      font-size: 18px;
      font-weight: bold;
      color: #317eac;
      letter-spacing: 2px;
    }

    small{
      font-size: 14px;
      font-weight: normal;
      color: #999999;
    }
</style>

<template>
  <div class="login">
      <div id="login">
        <div class="center">
          <h1>
            <i class="el-icon-info"></i>
            <span class="white">计量器具管理系统</span>
          </h1>
          <h4 class="blue">© 中检远航</h4>
        </div>
        <div class="login-form">
          <h4 class="header blue lighter bigger change-title">
            <i class="icon-coffee green"></i>
            用户登录
          </h4>
          <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
                   class="demo-ruleForm login-container">
            <el-form-item prop="username">
              <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号" class="input-style"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码" class="input-style"></el-input>
            </el-form-item>
            <div class="btn-box">
              <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
              <el-form-item style="width:100%;">
                <el-button type="primary" style="width:20%;" @click.native.prevent="handleLogin" :loading="logining" >登录</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
  </div>
</template>

<script>

  import {requestLogin} from '../../api/api';
  export default {
      data(){
        return {
          logining: false,
          account: {
            username: 'admin',
            pwd: '123456'
          },
          rules: {
            username: [
              {required: true, message: '请输入账号', trigger: 'blur'},
              //{ validator: validaePass }
            ],
            pwd: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              //{ validator: validaePass2 }
            ]
          },
          checked: true
        };
      },
      methods:{
        handleLogin() {
          this.$refs.AccountFrom.validate((valid) => {
            if (valid) {

              this.logining = true;
             /* var loginParams = { username: this.account.username, password: this.account.pwd };
              this.$http.post('http://localhost:8087/static/test/login.json',loginParams).then(response=>{
                console.info(response);
              }).catch(error=>{
                console.info(error);
              });*/
              //NProgress.start();
              var loginParams = { username: this.account.username, password: this.account.pwd };
              //    let loginParams = new URLSearchParams();
              //    loginParams.append("username",this.account.username);
              //   loginParams.append("password",this.account.pwd);
              requestLogin(loginParams).then(data => {
                this.logining = false;

                let { msg, code, token } = data;
                if(code == '200'){
                  //登录成功，把用户信息保存在sessionStorage中
                  sessionStorage.setItem('access-token', token);
                  console.info(data);
                  //跳转到后台主界面
                  this.$router.push({ path: '/home' });
                }else{
                  this.$message({
                    message: msg,
                    type: 'error'
                  });
                }

              });

            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
  }
</script>

<style lang="scss" scoped>

  .login{
    border: 1px solid red;
  }

  .el-form-item {
    width: 250px;
    margin: 20px auto;
  }

  .input-style{
    background-color:transparent !important;
    border:none !important;
    outline:none !important;
  }

  .btn-box{
    margin: 10px;
  }

  .remember{
    float: left;
    margin: 10px 65px 0 125px;
  }

  .center{
    width: 600px;
    text-align: center;
    margin: 20px auto 0;
  }

  h1 {
      color: #fff;
      font-size: 32px;
      font-weight: normal;
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  h4 {
      color: #478fca;
      font-size: 18px;
      font-weight: normal;
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .change-title{
      padding-left: 55px;
      border-bottom: 1px solid white;
      color: #3a8ee6;
      width: 360px;
      margin-left: 68px;
  }

  .error-tip{
    text-align: center;
    padding-top: 10px;
    color: red;
  }

  #login{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    overflow:hidden;
    background-color: #323542;
    /*padding-bottom: 260px;*/
    .login-form{
      width:500px;
      height:350px;
      margin:0 auto;
      margin-top: 10px;
      padding-top: 25px;
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,0.15) 50%,rgba(30,30,30,0) 100%);
    }
  }


</style>

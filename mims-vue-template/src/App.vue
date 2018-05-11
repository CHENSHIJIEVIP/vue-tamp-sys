<template>
    <div id="app">
          <user-header></user-header>
          <div class="main">
            <NavMenu></NavMenu>
            <Container></Container>
          </div>
    </div>
</template>

<script>

import UserHeader from './components/UserHeader'
import Footer from './components/Footer'
import NavMenu from './components/common/NavMenu'
import Container from './components/common/Container'

export default {
    name: 'app',
    components: {
        UserHeader,
        Footer,
        NavMenu,
        Container
    }
}
</script>

<style lang="scss">
    @import './assets/css/common/base.css';
    @import './assets/css/common/comment.css';
    @import './assets/css/common/common.css';
    @import './assets/css/style.scss';

    #app{
      width: 100%;
      height: 100%;
      background: #ffffff;
    }

    #main{
      background-color: #1A191F;
      width: 100%;
      height: 100%;
    }
</style>

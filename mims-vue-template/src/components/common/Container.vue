<template>
  <div id="container">
    <TopBar></TopBar>
    <transition name="slide-fade">
      <div class="content">
          <router-view></router-view>
      </div>
    </transition>
</div>
</template>

<script>
import TopBar from './TopBar.vue'

export default {
  components: {
    TopBar
  }
}
</script>
<style scoped>
  #container{
      width: 85%;
      float: left;
  }
  .content {
    width: 100%;
    padding: 25px;
    background: #f9f9f9;
  }

</style>

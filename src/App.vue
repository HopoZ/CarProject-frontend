<template>

  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>
  </div>

</template>

<script>
import dataview from './components/dataview/index.vue'
import router from './router';
export default {
  name: 'App',
  components: {
    dataview
  },
  data() {
    return {}
  }
}
</script>

<style>
/* 设置整个页面的背景图片 */
html {
  background-image: url('./views/picture/background.png');
  background-color: #BEF9FF;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%; /* 确保背景铺满整个页面 */
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

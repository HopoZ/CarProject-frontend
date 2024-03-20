<template>
  <!-- 页面跳转 -->
  <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div> -->
  <div id="app">
    <h1>车辆详细信息</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="error">Error: {{ error }}</div>
      <div v-else>
        <p>是否疲劳：{{ data.isTired }}</p>
        <p>是否酒驾：{{ data.isDrunk }}</p>
        <p>酒驾概率：{{ data.drunkDrivingPro }}</p>
        <p>疲劳驾驶概率：{{ data.sleepDrivingPro }}</p>
        <p>车内酒精浓度比：{{ data.alcoholConc }}</p>
        <p>温度：{{ data.temperature }}</p>
        <p>维度：{{ data.latitude }}</p>
        <p>经度：{{ data.longitude }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {getData} from '@/api/index.js';
export default {
  name: 'App',
  data() {
    return {
      loading: false,
      error: null,
      data: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      getData('粤B12345') // 这里传入具体的车牌号
        .then(response => {
          this.data = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.error = '请求出错：' + error;
          this.loading = false;
        });
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

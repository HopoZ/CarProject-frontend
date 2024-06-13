<template>
  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>
    <div class="footer">
      <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2024038837号</a>
      <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2024038837号-1</a>
    </div>
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
  border: none;
}

#app {
  font-family: 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

/* 美化页脚 */
.footer {
  margin-top: 16px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1); /* 添加半透明背景 */
  border-radius: 8px; /* 添加圆角 */
  display: flex;
  justify-content: center;
  gap: 20px; /* 间距 */
}

.footer a {
  color: #ffffff; /* 改变字体颜色 */
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s; /* 添加颜色过渡效果 */
}

.footer a:hover {
  color: #ffdd57; /* 悬停时改变颜色 */
}
</style>

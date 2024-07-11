<template>
  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>
    <div class="footer">
      <div class="footer-content">
        <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2024038837号 </a>
        <a href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2024038837号-1</a>
      </div>
      <div class="footer-bg">
        <img src="./picture/FootBg.png" alt="Footer Background">
      </div>
    </div>
  </div>
</template>

<script>
import dataview from './components/dataview/index.vue';
import router from './router';

export default {
  name: 'App',
  components: {
    dataview
  },
  data() {
    return {};
  }
}
</script>

<style>
/* 设置整个页面的背景图片 */
html {
  background-image: url('picture/background.png');
  background-size: cover;
  background-color: #141d4d;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%; /* 确保背景铺满整个页面 */
  border: none;
}

#app {
  font-family: OPPOSans, 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

/* 美化页脚 */
.footer {
  position: relative;
  margin-top: 16px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1); /* 添加半透明背景 */
  border-radius: 8px; /* 添加圆角 */
  display: flex;
  justify-content: center;
  align-items: flex-end; /* 垂直居中 */
  gap: 20px; /* 间距 */
  height: 50px; /* 设置高度 */
}

.footer-content {
  position: absolute;
  z-index: 1;
  display: flex;
  bottom: 0;
  align-items: center; /* 垂直居中 */
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

.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.footer-bg img {
  width: 100%;
  height: auto;
}
</style>

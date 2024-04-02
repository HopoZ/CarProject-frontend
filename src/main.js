import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(dataV);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");



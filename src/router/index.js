import Vue from "vue";
import VueRouter from "vue-router";
import AMap from "@/views/AMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Amap",
    component: AMap,
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/components/dataview"),
  },
  {
    path: "/temp",
    name: "temp",
    component: () => import("@/views/Temp.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

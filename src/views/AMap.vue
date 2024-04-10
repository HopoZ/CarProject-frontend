<template>
  <div-full-screen-container>
    <div id="amapcontainer" class="map-container"></div>
    <div class="art-font">
      <h1 class="cyberspace">
        <center>车联网系统</center>
      </h1>
    </div>
  </div-full-screen-container>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import { getData, getCarDataList } from '@/api/index.js';
import router from '@/router';

export default {
  name: 'AMap',
  data() {
    return {
      map: null,
      marker: null,
      CarDataList: [],
      carNumber: 'MNO345',
      data: {},
    };
  },
  mounted() {
    this.carNumber = this.$route.query.carNumber;
    if (this.carNumber === undefined) {
      this.carNumber = 'MNO345';
    };
    this.GetCarDataList();
  },
  destroyed() {
    // 销毁地图
    this.map.destroy();
    this.map = null;
    // this.mapModule.dispose();
    this.mapModule = null;
    console.log("==================destroyed==================");
  },
  methods: {
    // 获取车辆列表数据
    GetCarDataList() {
      getCarDataList()
        .then(async response => {
          this.CarDataList = response.data;
          await this.GetData(this.carNumber);
          this.initAMap();
        })
        .catch(error => {
          console.error('获取车辆列表失败:', error);
        });
    },
    // 获取单个车辆的数据
    async GetData(carNumber) {
      await getData(carNumber)
        .then(response => {
          this.data = response.data;
          console.log('Nice', this.data);
        })
        .catch(error => {
          this.error = '请求出错：' + error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //初始化地图
    initAMap() {
      AMapLoader.load({
        key: "c1fbb7c609b76acfd38caab2fdd7fc17", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.ControlBar", 'AMap.Geocoder', 'AMap.Marker',
          'AMap.CitySearch', 'AMap.Geolocation', 'AMap.AutoComplete', 'AMap.InfoWindow'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        // 获取到作为地图容器的DOM元素，创建地图实例
        this.map = new AMap.Map("amapcontainer", { //设置地图容器id
          pitch: 50, //地图俯仰角度，有效范围 0 度- 83 度
          viewMode: '3D',//使用3D视图
          // terrain: true, //开启地形图
          // mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom: this.zoom, // 地图显示的缩放级别
          zoomEnable: true, // 地图是否可缩放，默认值为true
          dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
          doubleClickZoom: true, // 地图是否可通过双击鼠标放大地图，默认为true
          zoom: 18, //初始化地图级别
          center: [this.data.longitude, this.data.latitude], // 初始化中心点坐标 某辆车的坐标
        });
        // 创建所有地图钉（标记）并添加到当前位置
        this.CarDataList.forEach(async (car) => {
          console.log('hhhhh', car.carNumber);
          console.log('m', this.data);
          await this.GetData(car.carNumber);
          console.log('n', this.data);
          const marker = new AMap.Marker({
            position: [this.data.longitude, this.data.latitude], // 设置标记位置
            map: this.map, // 将标记添加到地图上
            // icon: 'https://raw.githubusercontent.com/HopoZ/CarProject-frontend/main/reference/car.png?token=GHSAT0AAAAAACO7T65SZVUUQNTDWD6YTKXCZQO7RKA', // 设置标记图标
            title: this.data.carNumber, // 设置标记的标题(悬浮显示)
            label: {
              content: car.carNumber, // 设置标记标题内容
            }
          });
          // 为地图钉添加点击事件处理程序
          marker.on('click', () => {
            const title = marker.getTitle();
            console.log('点击了地图钉:', title);
            router.push({ path: '/detail', query: { carNumber: title } });
          });
          //自建图层测试
          var imageLayer = new AMap.ImageLayer({
            url: 'https://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/img/dongwuyuan.jpg',
            bounds: new AMap.Bounds(
              [116.327911, 39.939229],
              [116.342659, 39.946275]
            ),
            // zooms: [15, 20]
          });
          this.map.add(imageLayer);


          // HARD 3D车辆
          // // 加载AMap.GltfLoader插件
          // AMap.plugin(["AMap.GltfLoader"], function () {
          //   // 创建AMap.GltfLoader插件实例
          //   var gltf = new AMap.GltfLoader();

          //   // 调用load方法，加载 glTF 模型资源
          //   var urlDuck = '/reference/Taxi.gltf';  // 模型资源文件路径，远程/本地文件均可
          //   gltf.load(urlDuck, function (gltfCity) {
          //     // gltfCity 为解析后的gltf对象
          //   });
        });
      }).catch(e => {
        console.log(e)
      })
    },

  }
}
</script>
<style scoped>
/* 地图容器样式 */
.map-container {
  width: 100%;
  height: 90vh;
}
</style>
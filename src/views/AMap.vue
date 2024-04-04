<template>
  <div id="amapcontainer" class="amapcontainer"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import { getData, getCarDataList, registerCar, deleteCar } from '@/api/index.js';
import { useRouter } from 'vue-router';
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
    this.GetCarDataList();
  },
  methods: {
    // 获取车辆列表数据
    GetCarDataList() {
      getCarDataList()
        .then(response => {
          this.CarDataList = response.data;
          this.carNumber = this.CarDataList[1].carNumber;
          this.GetData(this.carNumber);
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
        key: "4312bcd2670b1cfd1739fe37fdeb1d38", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.1Beta", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale", "AMap.ToolBar", "AMap.ControlBar", 'AMap.Geocoder', 'AMap.Marker',
          'AMap.CitySearch', 'AMap.Geolocation', 'AMap.AutoComplete', 'AMap.InfoWindow'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        // 获取到作为地图容器的DOM元素，创建地图实例
        this.map = new AMap.Map("amapcontainer", { //设置地图容器id
          pitch: 50, //地图俯仰角度，有效范围 0 度- 83 度
          viewMode: '3D',//使用3D视图
          // terrain: true, //开启地形图
          // mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
          resizeEnable: true,
          zoom: this.zoom, // 地图显示的缩放级别
          viewMode: "3D", // 使用3D视图 
          zoomEnable: true, // 地图是否可缩放，默认值为true
          dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
          doubleClickZoom: true, // 地图是否可通过双击鼠标放大地图，默认为true
          zoom: 18, //初始化地图级别
          center: [this.data.longitude, this.data.latitude], // 初始化中心点坐标 某辆车的坐标
        });

        // 创建 AMap.Icon 实例：
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50),    // 图标尺寸
          image: '/reference/car.png',  // Icon的图像
          imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50)   // 根据所设置的大小拉伸或压缩图片
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
            icon: icon, // 设置标记图标
            title: this.data.carNumber, // 设置标记的标题(悬浮显示)
            label: {
              content: car.carNumber, // 设置标记标题内容
              offset: new AMap.Pixel(0, 0), // 设置标记标题偏移
            }
          });
          // 为地图钉添加点击事件处理程序
          marker.on('click', () => {
            const title = marker.getTitle();
            console.log('点击了地图钉:', title);
            router.push({ path: '/detail', query: { carNumber: title } });
          });

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
/* 页面标题样式 */
.page-title {
  font-size: 24px;
  /* 设置字体大小 */
  text-align: center;
  /* 设置文本居中 */
  margin-bottom: 20px;
  /* 设置下边距 */
  position: relative;
  /* 设置定位为相对定位 */
  z-index: 2;
  /* 设置一个较高的 z-index 值 */
}

/* 地图容器样式 */
.amapcontainer {
  width: 100%;
  height: 110vh;

}
</style>
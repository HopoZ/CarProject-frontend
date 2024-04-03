<template>
  <div id="amapcontainer" style="width: 100%; height: 620px"></div>
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
          console.log('Nice',this.data);
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
          resizeEnable: true,
          zoom: this.zoom, // 地图显示的缩放级别
          viewMode: "3D", // 使用3D视图 
          zoomEnable: true, // 地图是否可缩放，默认值为true
          dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
          doubleClickZoom: true, // 地图是否可通过双击鼠标放大地图，默认为true
          zoom: 11, //初始化地图级别
          center: [126.642464, 45.756967], // 初始化中心点坐标 哈尔滨
          // mapStyle: "amap://styles/darkblue", // 设置颜色底层
        });
        // 创建所有地图钉（标记）并添加到当前位置
        this.CarDataList.forEach(async (car) => {
          console.log('hhhhh',car.carNumber);
          console.log('m',this.data);
          await this.GetData(car.carNumber);
          console.log('n',this.data);
          const marker = new AMap.Marker({
            position: [this.data.longitude,this.data.latitude], // 设置标记位置
            map: this.map, // 将标记添加到地图上
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
            router.push({ path: '/', query: { carNumber: title } });
          });
        });

      }).catch(e => {
        console.log(e)
      })
    },
  }
}
</script>
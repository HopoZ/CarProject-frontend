<template>

  <div id="data-view">
    <div class="car-photo-container">
      <img src="http://82.156.65.122:8080/photo/MNO345.jpg" alt="car photo" class="car-photo">
      <div class="caption">非法驾驶员!</div>
    </div>
    <h1>{{ this.carNumber }}车辆详细信息</h1>
    <!-- 使用 Element UI 的按钮组件作为触发按钮 -->
    <el-button @click="showCarList">展示车辆列表</el-button>
    <center><dv-decoration-5 style="width:300px;height:40px;" /></center>

    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else-if="error">错误：{{ error }}</div>
    <!-- 车辆详细信息 -->
    <dv-border-box-12 v-else>
      <table>
        <tr>
          <td>信息项</td>
          <td>值</td>
        </tr>
        <tr>
          <td>是否疲劳</td>
          <td>{{ data.isTired }}</td>
        </tr>
        <tr>
          <td>是否酒驾</td>
          <td>{{ data.isDrunk }}</td>
        </tr>
        <tr>
          <td>温度</td>
          <td>{{ data.temperature }}</td>
        </tr>
        <tr>
          <td>纬度</td>
          <td>{{ data.latitude }}</td>
        </tr>
        <tr>
          <td>经度</td>
          <td>{{ data.longitude }}</td>
        </tr>
      </table>
    </dv-border-box-12>


    <!-- Element UI 的模态框 -->
    <el-dialog :visible.sync="carListVisible" title="车辆列表" @close="hideCarList">
      <el-table :data="CarDataList" border style="width: 100%">
        <!-- 在这里只保留了车牌号一列 -->
        <el-table-column prop="carNumber" label="车牌号"></el-table-column>
      </el-table>
      <!-- 添加注册车辆的表单 -->
      <form @submit.prevent="registerNewCar">
        <label for="carNumber">车牌号：</label>
        <input type="text" id="carNumber" v-model="newCarNumber" required>
        <button type="submit">注册车辆</button>
      </form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="hideCarList">关闭</el-button>
      </span>
    </el-dialog>

    <!-- 酒驾概率图 -->
    <div class="chart-row">
      <div class="chart-container">
        <h2>酒驾概率</h2>
        <dv-decoration-9 style="width:150px;height:150px;">{{ data.drunkDrivingPro }}%</dv-decoration-9>
      </div>
      <!-- 酒精浓度比图 -->
      <div class="chart-container">
        <h2>酒精浓度比</h2>
        <dv-decoration-9 style="width:150px;height:150px;">{{ data.alcoholConc }}%</dv-decoration-9>
      </div>
    </div>
    <!-- 展示地图 -->
    <div id="amapcontainer" style="width: 100%; height: 620px"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import AMapLoader from '@amap/amap-jsapi-loader';
import { getData, getCarDataList, registerCar } from '@/api/index.js';
export default {
  mounted() {
    this.GetCarDataList();
  },
  components: {
  },
  name: 'App',
  data() {
    return {
      loading: true,
      error: null,
      data: {},
      CarDataList: [],
      newCarNumber: '', // 添加新车牌号的数据项
      carListVisible: false,
      carNumber: '123456',

    };
  },
  methods: {
    GetCarDataList() {
      // 获取车辆列表数据
      getCarDataList()
        .then(response => {
          this.CarDataList = response.data;
          this.carNumber = this.CarDataList[4].carNumber;
          // console.log("CarDataList:\n",this.CarDataList);
          this.GetData();

        })
        .catch(error => {
          console.error('获取车辆列表失败:', error);
        });
    },
    GetData() {
      // 获取单个车辆的数据
      getData(this.carNumber)
        .then(response => {
          this.data = response.data;
          this.initAMap(); // 确保在数据加载完毕后初始化地图
        })
        .catch(error => {
          this.error = '请求出错：' + error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
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
          center: [113.370824, 23.131265], // 初始化中心点坐标 广州
          // mapStyle: "amap://styles/darkblue", // 设置颜色底层
        });
        // 创建一个地图钉（标记）并添加到当前位置
        new AMap.Marker({
          position: [this.data.longitude, this.data.latitude], // 设置标记位置
          map: this.map, // 将标记添加到地图上
          title: '当前位置' // 设置标记的标题
        }).setMap(this.map);
      }).catch(e => {
        console.log(e)
      })
    },
    registerNewCar() {
      // 调用注册车辆函数并传递新车牌号
      registerCar(this.newCarNumber)
        .then(response => {
          // 处理注册成功后的逻辑，可能需要重新加载车辆数据或刷新页面
          console.log('车辆注册成功:', response);
          // 重新加载数据
          this.GetCarDataList();
          // 清空输入框
          this.newCarNumber = '';
        })
        .catch(error => {
          // 处理注册失败的情况，可以在界面上显示错误信息
          console.error('车辆注册失败:', error);
          // 清空输入框
          this.newCarNumber = '';
        });
    },
    showCarList() {
      this.carListVisible = true;
    },
    hideCarList() {
      this.carListVisible = false;
    }
  }
};
</script>

<style>
#data-view {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

#map {
  height: 400px;
  /* 确保地图容器有一个非零的高度 */
}

.chart-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  /* 可以根据需要进行调整 */
}

.car-photo-container {
  position: relative;
}

.car-photo-container .caption {
  position: absolute;
  top: 30px;
  /* 距离图片底部的距离 */
  left: 10px;
  /* 距离图片左侧的距离 */
  background-color: rgba(0, 0, 0, 0.5);
  /* 设置背景颜色，可根据需要调整 */
  color: #fff;
  /* 设置文字颜色，可根据需要调整 */
  padding: 4px 8px;
  /* 设置内边距，可根据需要调整 */
  font-size: 12px;
  /* 设置字体大小，可根据需要调整 */
  border-radius: 4px;
  /* 设置圆角，可根据需要调整 */
}

.car-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  /* 设置图片宽度 */
  height: auto;
  /* 自适应高度 */
}
</style>

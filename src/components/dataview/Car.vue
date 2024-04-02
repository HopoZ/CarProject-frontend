<template>

  <div id="data-view">
    <h1>{{ this.carNumber }}车辆详细信息</h1>
    <!-- 使用 Element UI 的按钮组件作为触发按钮 -->
    <el-button @click="showCarList">展示车辆列表</el-button>
    <center><dv-decoration-5 style="width:300px;height:40px;" /></center>
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else-if="error">错误：{{ error }}</div>
    <dv-border-box-12 v-else>
      <!-- 车辆详细信息 -->
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
    <div>
    <img src="http://82.156.65.122:8080/photo/MNO345.jpg" alt="car photo">
    </div>
    <!-- 展示地图 -->
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
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
          this.initMap(); // 确保在数据加载完毕后初始化地图
        })
        .catch(error => {
          this.error = '请求出错：' + error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    initMap() {
      // 确保此函数在DOM更新后调用
      this.$nextTick(() => {
        const map = L.map('map').setView([this.data.latitude, this.data.longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        // 添加标记
        L.marker([this.data.latitude, this.data.longitude]).addTo(map)
          .bindPopup('当前位置').openPopup();
      });
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
</style>

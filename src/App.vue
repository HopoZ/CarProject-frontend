<template>
  <div id="app">
    <h1>{{this.carNumber}}车辆详细信息</h1>
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else-if="error">错误：{{ error }}</div>
    <div v-else>
      <!-- 车辆详细信息 -->
      <table>
        <tr>
          <th>信息项</th>
          <th>值</th>
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
          <td>酒驾概率</td>
          <td>{{ data.drunkDrivingPro }}</td>
        </tr>
        <tr>
          <td>车内酒精浓度比</td>
          <td>{{ data.alcoholConc }}</td>
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
        <tr>
          <td>车辆列表</td>
          <td>
            <button @click="showCarList">展示车辆列表</button>
          </td>
        </tr>
      </table>
    </div>

    <!-- 添加注册车辆的表单 -->
    <form @submit.prevent="registerNewCar">
      <label for="carNumber">车牌号：</label>
      <input type="text" id="carNumber" v-model="newCarNumber" required>
      <button type="submit">注册车辆</button>
    </form>


    <!-- 车辆列表模态框 -->
    <div class="modal" :class="{ 'is-active': carListVisible }">
      <div class="modal-background" @click="hideCarList"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">车辆列表</p>
          <button class="delete" aria-label="close" @click="hideCarList"></button>
        </header>
        <section class="modal-card-body">
          <table>
            <tr>
              <th>序号</th>
              <th>车牌号</th>
            </tr>
            <tr v-for="(detail, index) in CarDataList" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ detail.carNumber }}</td>
            </tr>
          </table>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="hideCarList">关闭</button>
        </footer>
      </div>
    </div>
    <!-- 展示地图 -->
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import { getData, getCarDataList, registerCar } from '@/api/index.js';

export default {
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
  mounted() {
    this.GetCarDataList();
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
#app {
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
</style>

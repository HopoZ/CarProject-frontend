<template>

  <div id="data-view">
    <div class="car-photo-container" v-if="HavePhoto">
      <img src="http://82.156.65.122:8080/photo/MNO345.jpg" alt="car photo" class="car-photo">
      <div class="caption">非法驾驶员!</div>
    </div>
    <h1>{{ this.carNumber}}车辆详细信息</h1>
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


    <!-- Element UI 的模态框  车辆列表-->
    <el-dialog :visible.sync="carListVisible" title="车辆列表" @close="hideCarList">
      <el-table :data="CarDataList" border style="width: 100%">
        <el-table-column prop="carNumber" label="车牌号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="info" @click="ChangeCar(scope.row.carNumber)">切换</el-button>
            <el-button type="danger" @click="DeleteCar(scope.row.carNumber)">删除</el-button>
          </template>
        </el-table-column>
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

    <div class="chart-row">
      <!-- 酒驾概率图 -->
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

    <router-link to="/">返回</router-link>

    
  </div>
</template>

<script>
import { getData, getCarDataList, registerCar, deleteCar } from '@/api/index.js';
import { RouterView } from 'vue-router';
import router from '@/router';
export default {
  mounted() {
    this.carNumber = this.$route.query.carNumber;
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
      carNumber: 'MNO345',
      HavePhoto: true

    };
  },
  methods: {
    // 获取车辆列表数据
    GetCarDataList() {
      getCarDataList()
        .then(response => {
          this.CarDataList = response.data;
          this.GetData();

        })
        .catch(error => {
          console.error('获取车辆列表失败:', error);
        });
    },
    // 获取单个车辆的数据
    GetData() {
      getData(this.carNumber)
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          this.error = '请求出错：' + error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // 调用注册车辆函数并传递新车牌号
    registerNewCar() {
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
    DeleteCar(carNumber) {
      console.log("删除车辆", carNumber);
      // 调用删除车辆函数并传递车牌号
      deleteCar(carNumber)
        .then(response => {
          // 处理删除成功后的逻辑，可能需要重新加载车辆数据或刷新页面
          console.log('车辆删除成功:', response);
          // 重新加载数据
          this.GetCarDataList();
        })
        .catch(error => {
          // 处理删除失败的情况，可以在界面上显示错误信息
          console.error('车辆删除失败:', error);
        });
    },
    // 切换车辆
    ChangeCar(carNumber) {
      console.log("切换车辆", carNumber);
      this.carNumber = carNumber;
      this.GetData();
      this.carListVisible = false;
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

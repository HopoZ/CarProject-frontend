<template>
  <div>
    <div class="center-image">
      <img src="@/picture/center.png">
    </div>
    <div class="main_bar">

      <div id="imageContainer" style="z-index: 1;top: 40px; left: 40px;width: 250px" class="imageContainer">
        <!-- 这里是动态添加的图片元素将会被放置的位置 -->
      </div>
      <div id="iC" class="imageContainer" style="z-index: 1;top:5px; left: 30px;">
        <img id="img1" class="car-photo" src="@/picture/info1.png" style="display: none">
        <img id="img2" class="car-photo" src="@/picture/info2.png" style="display: none">
        <img id="img3" class="car-photo" src="@/picture/info3.png" style="display: none">
      </div>
      <div class="imageContainer" style="z-index: 0">
        <img src="@/picture/LeftUp.png">
      </div>

      <!-- 返回按钮 和 列表按钮 -->
      <div class="button-container">
        <div class="btn-conteiner">
          <a class="btn-content" href="#">
            <span class="btn-title" @click="Move">返回</span>
            <span class="icon-arrow">
              <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path id="arrow-icon-one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"></path>
                  <path id="arrow-icon-two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"></path>
                  <path id="arrow-icon-three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"></path>
                </g>
              </svg>
            </span>
          </a>
        </div>

        <button class="ListButton" @click="showCarList">车辆列表</button>
      </div>

      <div class="title">
        <img src="@/picture/top.png">
      </div>
      <div style="text-align: center;margin: 0 auto;width: 50%;">
        <div>

        </div>
        <div>
          <h1 class="expandText">{{ this.carNumber }}车辆详细信息</h1>
        </div>
      </div>
    </div>

    <div class="main">

      <div class="left_section">


        <!-- 车辆详细信息 -->
        <div>
          <div style="position: absolute;z-index: 0;left:14px">
            <img src="@/picture/Left.png">
          </div>
          <div class="leftDef">
            <dv-loading v-if="loading">Loading...</dv-loading>
            <div v-else-if="error">错误：{{ error }}</div>
            <table class="info-table">
              <tr>
                <td>
                  <center>车主姓名</center>
                </td>
                <td>大学牲</td>
              </tr>
              <tr>
                <td>
                  <center>出生日期</center>
                </td>
                <td>20240411</td>
              </tr>
              <tr>
                <td>
                  <center>联系方式</center>
                </td>
                <td>12345678987</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- 酒驾概率图 -->
        <div style="margin-top: -50px">
          <div style="position: relative;z-index: 0">
            <img src="@/picture/drunkPro.png">
          </div>
          <span class="positioned-span">
            {{ this.data.drunkDrivingPro }} %
          </span>
        </div>
      </div>


      <!-- Element UI 的模态框  车辆列表-->
      <el-dialog :visible.sync="carListVisible" title="车辆列表" @close="hideCarList" class="styleDialog" :fullscreen=false>
        <el-table :data="CarDataList" border class="styleTable" style="width: 100%;height: auto">
          <el-table-column prop="carNumber" label="车牌号"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="ChangeCar(scope.row.carNumber)">切换</el-button>
              <el-popconfirm confirm-button-text='好的' cancel-button-text='不用了' icon="el-icon-info" icon-color="red"
                @confirm="DeleteCar(scope.row.carNumber)" title="确定删除吗？">
                <el-button slot="reference" icon="el-icon-delete" circle type="danger"></el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <!-- 添加注册车辆的表单 -->
        <form @submit.prevent="registerNewCar">
          <label for="carNumber">车牌号：</label>
          <input type="text" id="carNumber" v-model="newCarNumber" required>
          <button type="submit">注册车辆</button>
        </form>
        <!--        <span slot="footer" class="dialog-footer">-->
        <!--          <el-button @click="hideCarList">关闭</el-button>-->
        <!--        </span>-->
      </el-dialog>

      <div class="mid_section">
        <!-- 酒精浓度比图 -->
        <div class="bottom_div">
          <div style="position: relative;z-index: 0">
            <img src="@/picture/alcoConc.png">
          </div>
          <span class="positioned-span">
            {{ (this.data.alcoholConc * 100).toFixed(2) }}%
          </span>
        </div>
      </div>

      <div class="right_section">
        <!-- 温度折线图 -->
        <div class="chart_container" ref="TempchartContainer" style="width: 600px; height:250px;margin-left: 100px;">
        </div>
        <!-- 心率折线图 -->
        <div class="chart_container" ref="HRchartContainer" style="width: 600px; height:250px;margin-left: 100px;">
        </div>
        <!-- 温度表盘图 -->
        <div class="bottom_div">
          <div style="position: relative;z-index: 0">
            <img src="@/picture/NowTemp.png">
          </div>
          <span class="positioned-span">
            {{ this.data.temperature }} °C
          </span>
        </div>
      </div>



    </div>


  </div>
</template>

<script>
import { getData, getCarDataList, registerCar, deleteCar, getTemperatureLog, getHeartRateLog } from '@/api/index.js';
import router from '@/router';
import { Notification } from 'element-ui';
import * as echarts from 'echarts';

export default {
  mounted() {
    document.title = 'car-detail';
    this.carNumber = this.$route.query.carNumber;
    this.GetCarDataList();
    this.AddPhoto();
    this.GetTempData();
    this.GetHeartRateData();
  },
  destroyed() {
    if (this.messageInstance) {
          this.messageInstance.close(); // 关闭之前的通知
    }
    // 清除定时器
    if (this.setIntervalId) {
      clearInterval(this.setIntervalId);
    }
    Notification.closeAll()
  },
  components: {},
  name: 'Car',
  data() {
    return {
      setIntervalId: null, // 存储 setInterval 的 ID
      messageInstance: null, // 用于存储当前的通知实例
      loading: true,
      error: null,
      data: {},
      CarDataList: [],
      newCarNumber: '', // 添加新车牌号的数据项
      carListVisible: false,
      carNumber: 'MNO345',
      HeartRateData: [
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:09:01" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:09:01" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:11:14" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:11:14" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:11:14" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:11:14" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:11:14" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-11 18:11:14" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:18:40" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:18:40" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:18:40" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:18:40" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:18:40" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:18:40" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 88, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
        { carNumber: "XYZ789", hr: 82, datetime: "2024-07-15 18:27:50" },
      ],
      carCount: 0,
      CarType: [],
      tempData: [
        { "carNumber": "MNO345", "temperature": 25, "datetime": "2024-04-08 20:34:52" },
        { "carNumber": "MNO345", "temperature": 26, "datetime": "2024-04-08 20:34:57" },
        { "carNumber": "MNO345", "temperature": 27, "datetime": "2024-04-08 20:35:02" },
        { "carNumber": "MNO345", "temperature": 28, "datetime": "2024-04-08 20:35:07" },
        { "carNumber": "MNO345", "temperature": 29, "datetime": "2024-04-08 20:35:12" },
        { "carNumber": "MNO345", "temperature": 30, "datetime": "2024-04-08 20:35:17" },
        { "carNumber": "MNO345", "temperature": 31, "datetime": "2024-04-08 20:35:22" },
        { "carNumber": "MNO345", "temperature": 32, "datetime": "2024-04-08 20:35:27" },
        { "carNumber": "MNO345", "temperature": 33, "datetime": "2024-04-08 20:35:32" },
        { "carNumber": "MNO345", "temperature": 34, "datetime": "2024-04-08 20:35:37" },
        { "carNumber": "MNO345", "temperature": 35, "datetime": "2024-04-08 20:35:42" },
        { "carNumber": "MNO345", "temperature": 36, "datetime": "2024-04-08 20:35:47" },
        { "carNumber": "MNO345", "temperature": 37, "datetime": "2024-04-08 20:35:52" },
        { "carNumber": "MNO345", "temperature": 38, "datetime": "2024-04-08 20:35:57" },
        { "carNumber": "MNO345", "temperature": 39, "datetime": "2024-04-08 20:36:02" },
        { "carNumber": "MNO345", "temperature": 40, "datetime": "2024-04-08 20:36:07" },
        { "carNumber": "MNO345", "temperature": 41, "datetime": "2024-04-08 20:36:12" },
        { "carNumber": "MNO345", "temperature": 42, "datetime": "2024-04-08 20:36:17" },
        { "carNumber": "MNO345", "temperature": 43, "datetime": "2024-04-08 20:36:22" },
        { "carNumber": "MNO345", "temperature": 44, "datetime": "2024-04-08 20:36:27" }
      ]
    };
  },
  methods: {
    //危险行为通知
     notifyDangerousBehavior() {
      let messages = [];

      if (this.data.phone) {
        messages.push('<strong style="font-size: 20px;">驾驶员疑似有开车<i> 打电话 </i>行为</strong>');
      }
      if (this.data.smoke) {
        messages.push('<strong style="font-size: 20px;">驾驶员疑似有开车<i> 抽烟 </i>行为</strong>');
      }
      if (this.data.water) {
        messages.push('<strong style="font-size: 20px;">驾驶员疑似有开车<i> 喝水 </i>行为</strong>');
      }

      if (messages.length > 0) {
        if (this.messageInstance) {
          this.messageInstance.close(); // 关闭之前的通知
        }
        this.messageInstance = this.$message({
          message: messages.join('<br><br>'),
          type: 'warning',
          showClose: true,
          dangerouslyUseHTMLString: true,
          duration: 0
        });
      }
    },
    // 格式化布尔值
     formatBoolean(value) {
      return value === 1 ? '疑似' : '暂无';
    },
    // 获取车辆列表数据
    GetCarDataList() {
      getCarDataList()
        .then(response => {
          this.CarDataList = response.data;
          this.GetData();
           this.setIntervalId = setInterval(this.GetData, 2000);
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
          console.log('获取这辆车数据成功:', this.data);
          this.notifyDangerousBehavior();
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
      router.push({ path: '/detail', query: { carNumber: carNumber } }).catch(err => {
      });
      window.location.reload();
    },
    showCarList() {
      this.carListVisible = true;
    },
    hideCarList() {
      this.carListVisible = false;
    },
    // 跳转到地图页
    Move() {
      router.push({ path: '/', query: { carNumber: this.carNumber } }).catch(err => {
      });
    },
    //渲染酒驾概率图
    renderDrunkDrivingChart() {
      const drunkDrivingChart = echarts.init(document.getElementById('drunkDrivingChart'));
      console.log("酒驾概率", this.data.drunkDrivingPro);
      const option = {
        series: [{
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: this.data.drunkDrivingPro }]
        }]
      };
      drunkDrivingChart.setOption(option);
    },
    //渲染酒精浓度比图
    renderAlcoholConcChart() {
      const alcoholConcChart = echarts.init(document.getElementById('alcoholConcChart'));
      const option = {
        series: [
          {
            type: 'gauge',
            progress: {
              show: true,
              width: 18
            },
            axisLine: {
              lineStyle: {
                width: 18,
                // 使用渐变色定义进度条的颜色，从浅蓝色到深蓝色
                color: [
                  [0.2, '#C7E9FF'], // 浅蓝色
                  [0.8, '#7EA6FF'], // 深蓝色
                  [1, '#4D9DFE']    // 深蓝色
                ]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 25,
              color: '#999',
              fontSize: 20
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                borderWidth: 10
              }
            },
            title: {
              show: false
            },
            detail: {
              formatter: '{value}%',
              valueAnimation: true,
              fontSize: 20,
              offsetCenter: [0, '70%']
            },
            data: [
              {
                value: parseFloat(this.data.alcoholConc * 100).toFixed(2)
              }
            ]
          }
        ]
      };

      alcoholConcChart.setOption(option);
    },
    // 渲染温度表盘图表
    renderTemperatureChart() {
      const temperatureChart = echarts.init(document.getElementById('temperatureChart'));
      const option = {
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
              color: '#C7E9FF'
            },
            progress: {
              show: true,
              width: 30,
              color: '#4D9DFE'
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 30
              }
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: '#999'
              }
            },
            axisLabel: {
              distance: -20,
              color: '#999',
              fontSize: 15
            },
            anchor: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              width: '60%',
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, '-15%'],
              fontSize: 60,
              fontWeight: 'bolder',
              formatter: '{value} °C',
              color: 'inherit'
            },
            data: [
              {
                value: this.data.temperature
              }
            ]
          },
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
              color: '#4D9DFE'
            },
            progress: {
              show: true,
              width: 6,
              color: '#C7E9FF'
            },
            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: this.data.temperature
              }
            ]
          }
        ]
      };
      temperatureChart.setOption(option);
    },
    //图片获取
    AddPhoto() {
      this.noPhotoInfoVisible = true;
      const imageKownUrl = 'http://82.156.65.122:8080/photoKnow/';
      const imageUnkownUrl = 'http://82.156.65.122:8080/photoUnknow/';

      const imgElement = document.createElement('img');


      imgElement.alt = 'car photo';
      imgElement.classList.add('car-photo');

      const container = document.getElementById('imageContainer');
      const carNumber = this.carNumber;


      container.innerHTML = ''; // 清空容器内的内容

      imgElement.src = imageKownUrl + carNumber + '.jpg';
      imgElement.onload = function () {
        console.log("src ", imgElement.src);
        container.appendChild(imgElement);
        document.getElementById('img1').style.removeProperty('display');
      }
      let nonphoto = false;
      imgElement.onerror = function () {
        if (nonphoto) {
          return;
        }
        imgElement.src = imageUnkownUrl + carNumber + '.jpg';
        imgElement.onload = function () {
          container.appendChild(imgElement);
          document.getElementById('img2').style.removeProperty('display');

          Notification.warning({
            title: '异常事件',
            message: '非法驾驶员',
            position: 'top-center'
          });
          nonphoto = true;
        }
        imgElement.onerror = function () {
          document.getElementById('img3').style.removeProperty('display');
          Notification.error({
            title: '硬件无返回照片',
            message: '无法获取当前驾驶员照片',
            position: 'top-left'
          });
          nonphoto = true;
          return;
        }
      }

    },
    // 获取车辆温度数据
    GetTempData() {
      getTemperatureLog(this.carNumber)
        .then(response => {
          if (response.data.data != null) {
            this.tempData = response.data.data;
          }
          console.log('获取后temp:', this.tempData);
          this.initTempChart();
        })
        .catch(error => {
          console.error('获取车辆温度数据失败:', error);
        });
    },
    // 初始化温度图表
    initTempChart() {
      const TempchartContainer = this.$refs.TempchartContainer;
      const myChart = echarts.init(TempchartContainer);
      const xAxisData = this.tempData.map(item => item.datetime);
      const temperatureData = this.tempData.map(item => item.temperature);
      const option = {
        title: {
          text: '车辆温度趋势',
          textStyle: {
            color: 'white' // 设置标题字体颜色
          }
        },
        xAxis: {
          type: 'category',
          name: '时间',
          data: xAxisData,
          axisLabel: {
            color: 'white' // 设置X轴标签的颜色
          },
          nameTextStyle: {
            color: 'white' // 设置X轴名称的颜色
          }
        },
        yAxis: {
          type: 'value',
          name: '温度',
          axisLabel: {
            color: 'white' // 设置Y轴标签的颜色
          },
          nameTextStyle: {
            color: 'white' // 设置Y轴名称的颜色
          }
        },
        series: [{
          data: temperatureData,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: '#ff5722' // 设置线条颜色
          }
        }],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        backgroundColor: 'transparent' // 设置图表背景颜色为透明
      };
      myChart.setOption(option);
    },
    //获取心率数据
    GetHeartRateData() {
      getHeartRateLog(this.carNumber)
        .then(response => {
          if (response.data.data != null) {
            this.HeartRateData = response.data.data;
          }
          console.log('获取后heart:', this.HeartRateData);
          this.initHRChart();
        })
        .catch(error => {
          console.error('获取车辆心率数据失败:', error);
        });
    },
    // 初始化心率图表
    initHRChart() {

      const HRchartContainer = this.$refs.HRchartContainer;
      const myChart = echarts.init(HRchartContainer);
      const xAxisData = this.HeartRateData.map(item => item.datetime);
      const hrData = this.HeartRateData.map(item => item.hr);
      const option = {
        title: {
          text: '驾驶员心率趋势',
          textStyle: {
            color: 'white'
          }
        },
        xAxis: {
          type: 'category',
          name: '时间',
          data: xAxisData,
          axisLabel: {
            color: 'white' // 设置X轴标签的颜色
          },
          nameTextStyle: {
            color: 'white' // 设置X轴名称的颜色
          }
        },
        yAxis: {
          type: 'value',
          name: '心率',
          axisLabel: {
            color: 'white' // 设置Y轴标签的颜色
          },
          nameTextStyle: {
            color: 'white' // 设置Y轴名称的颜色
          }
        },
        series: [{
          data: hrData,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: '#ff5722' // 设置线条颜色
          }
        }],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        backgroundColor: 'transparent' // 设置图表背景颜色
      };
      myChart.setOption(option);
    }
  }
};

</script>

<style scoped>
/* 修改定制化的el-table的css */
.styleTable {
  background-color: transparent !important;
}

.styleTable ::v-deep .el-table th .el-table__cell,
::v-deep .el-table th,
::v-deep .el-table td {
  background-color: #141D4D !important;
  color: white !important;
}
</style>
<style>
/*使文字产生动画效果*/
.expandText{
  animation: reveal 2s forwards;
}
@keyframes reveal {
  0% {
    opacity: 0;
    letter-spacing: -0.5em;
  }
  50% {
    opacity: 1;
    letter-spacing: 0.2em;
  }
  100% {
    letter-spacing: normal;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {

  padding: 8px;
}

.car-detail-table .title {
  color: white;
}

.car-detail-table td {
  color: white;

}

th {
  background-color: #f2f2f2;
}

#map {
  height: 400px;
  /* 确保地图容器有一个非零的高度 */
}


.button-container {
  position: absolute;
  top: 25px;
  right: 25px;
  width: auto;
  height: auto;

}

.imageContainer {
  position: relative;
}

.imageContainer img {
  position: absolute;
  top: 0;
  left: 0;
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


/* 返回按钮的样式 */
.btn-conteiner {
  display: flex;
  justify-content: center;
  --color-text: #ffffff;
  --color-background: #324ec2;
  --color-outline: rgb(11, 121, 237);
  --color-shadow: #00000080;
}

.btn-content {
  display: flex;
  align-items: center;
  padding: 5px 30px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: var(--color-text);
  background: var(--color-background);
  transition: 1s;
  border-radius: 100px;
  box-shadow: 0 0 0.2em 0 var(--color-background);
}

.btn-content:hover,
.btn-content:focus {
  transition: 0.5s;
  -webkit-animation: btn-content 1s;
  animation: btn-content 1s;
  outline: 0.1em solid transparent;
  outline-offset: 0.2em;
  box-shadow: 0 0 0.4em 0 var(--color-background);
}

.btn-content .icon-arrow {
  transition: 0.5s;
  margin-right: 0px;
  transform: scale(0.6);
}

.btn-content:hover .icon-arrow {
  transition: 0.5s;
  margin-right: 25px;
}

.icon-arrow {
  width: 20px;
  margin-left: 15px;
  position: relative;
  top: 6%;
}

/* SVG */
#arrow-icon-one {
  transition: 0.4s;
  transform: translateX(-60%);
}

#arrow-icon-two {
  transition: 0.5s;
  transform: translateX(-30%);
}

.btn-content:hover #arrow-icon-three {
  animation: color_anim 1s infinite 0.2s;
}

.btn-content:hover #arrow-icon-one {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.6s;
}

.btn-content:hover #arrow-icon-two {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.4s;
}

/* SVG animations */
@keyframes color_anim {
  0% {
    fill: white;
  }

  50% {
    fill: var(--color-background);
  }

  100% {
    fill: white;
  }
}

/* Button animations */
@-webkit-keyframes btn-content {
  0% {
    outline: 0.2em solid var(--color-background);
    outline-offset: 0;
  }
}

@keyframes btn-content {
  0% {
    outline: 0.2em solid var(--color-background);
    outline-offset: 0;
  }


}

.ListButton {
  --😀: #644dff;
  --😀😀: #4836bb;
  --😀😀😀: #654dff63;
  cursor: pointer;
  width: 184px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.125em;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  background: var(--😀);
  border: 2px solid var(--😀😀);
  border-radius: .75rem;
  box-shadow: 0 8px 0 var(--😀😀);
  transform: skew(-10deg);
  transition: all .1s ease;
  filter: drop-shadow(0 15px 20px var(--😀😀😀));
}

.ListButton:active {
  letter-spacing: 0px;
  transform: skew(-10deg) translateY(8px);
  box-shadow: 0 0 0 var(--😀😀😀);
}

/* 页面整体布局 */

.main {
  display: flex;
  width: 100vw;
  /* 确保容器不超过视口宽度 */
  box-sizing: border-box;
  /* 确保 padding 和 border 包括在元素的总宽度中 */
}

.left_section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 400px;
  width: 470px;
}

.left_section>div {
  position: relative;
}

.positioned-span {
  position: relative;
  bottom: 140px;
  /* 调整距离底部的距离 */
  right: -110px;
  /* 调整距离右侧的距离 */
  font-size: 28px;
}

.leftDef {
  position: relative;
  top: 300px;

}

.info-table {
  font-size: 18px;
  /* 设置表格字体大小 */
  margin-top: 50px;
}

.mid_section {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.mid_section .bottom_div {
  position: relative;
  top: 540px;

}

.right_section {
  flex: 1;
  margin-left: auto;
  /* 自动将右侧的空隙推向左侧 */
  display: flex;
  flex-direction: column;
}

.right_section .bottom_div {
  position: relative;
  top: 40px;
  margin-left: 100px;

}

.chart_row {
  display: flex;
  justify-content: space-around;
}

/*定制el-dialog的样式*/
/*标题背景色*/
.styleDialog .el-dialog__header {
  background-color: #141d4d;
}

/*body背景色*/
.styleDialog .el-dialog__body {
  background-color: #141d4d;
}


.center-image {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
</style>

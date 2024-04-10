<template>

  <div>
    <div id="imageContainer" class="imageContainer">
      <!-- 这里是动态添加的图片元素将会被放置的位置 -->
    </div>
    <!-- 返回按钮 -->
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
      <div class="btn-conteiner">
        <a class="btn-content" href="#">
          <span class="btn-title" @click="toChart">记录表</span>
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
    </div>


    <h1>{{ this.carNumber }}车辆详细信息</h1>
    <!-- 使用 Element UI 的按钮组件作为触发按钮 -->
    <el-button @click="showCarList">展示车辆列表</el-button>
    <center><dv-decoration-5 style="width:300px;height:40px;" /></center>

    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else-if="error">错误：{{ error }}</div>

    <!-- 车辆详细信息 -->
    <dv-border-box-11 title="车辆信息" v-else class="car-detail-table">
      <table>
        <tr>
          <td>
            <center><div :color="['blue']" style="width:100px;height:80px;"></div></center>
          </td>
          <td>
            <center><div :color="['blue']" :reverse="true" style="width:100px;height:80px;"></div></center>
          </td>
        </tr>
        <tr>
          <td>
            <center><dv-decoration-11 style="width:100px;height:60px;">是否疲劳</dv-decoration-11></center>
          </td>
          <td>{{ data.isTired }}</td>
        </tr>
        <tr>
          <td>
            <center><dv-decoration-11 style="width:100px;height:60px;">是否酒驾</dv-decoration-11></center>
          </td>
          <td>{{ data.isDrunk }}</td>
        </tr>
        <tr>
          <td>
            <center><dv-decoration-11 style="width:100px;height:60px;">当前温度</dv-decoration-11></center>
          </td>
          <td>{{ data.temperature }}</td>
        </tr>
      </table>
    </dv-border-box-11>


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

  </div>
</template>

<script>
import { getData, getCarDataList, registerCar, deleteCar } from '@/api/index.js';
import { RouterView } from 'vue-router';
import router from '@/router';
import { Notification } from 'element-ui';
export default {
  mounted() {
    this.carNumber = this.$route.query.carNumber;
    this.GetCarDataList();
    this.AddPhoto();
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
      this.AddPhoto();
      this.carListVisible = false;
    },
    showCarList() {
      this.carListVisible = true;
    },
    hideCarList() {
      this.carListVisible = false;
    },
    // 跳转到地图页
    Move() {
      router.push({ path: '/', query: { carNumber: this.carNumber } });
    },
    //跳转到记录表页
    toChart() {
      router.push({ path: '/temp', query: { carNumber: this.carNumber } });
    },

    //图片获取
    AddPhoto() {
      this.noPhotoInfoVisible = true;
      const imageKownUrl = 'http://82.156.65.122:8080/photoKnow/';
      const imggeUnkownUrl = 'http://82.156.65.122:8080/photoUnknow/';

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
      }
      let nonphoto = false;
      imgElement.onerror = function () {
        if (nonphoto) {
          return;
        }
        imgElement.src = imggeUnkownUrl + carNumber + '.jpg';
        imgElement.onload = function () {
          container.appendChild(imgElement);

          const caption = document.createElement('div');
          caption.textContent = '非法驾驶员!';
          caption.style.color = 'red';
          caption.classList.add('caption');
          container.appendChild(caption);
          nonphoto = true;
        }
        imgElement.onerror = function () {
          Notification.error({
            title: '硬件无返回',
            message: '无法获取驾驶员照片',
            position: 'top-left'
          });
          nonphoto = true;
          return;
        }
      }

    }
  }
};
</script>

<style>
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

.car-detail-table .title {
  color: blue;
}

.car-detail-table td {
  color: blue;

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

.button-container {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: auto;

}

.imageContainer {
  position: relative;
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
  --color-background: #7A84C8;
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
</style>

<template>
  <div>

<!--        <center><dv-decoration-7 :color="['blue', 'purple']">车联网系统</dv-decoration-7></center>-->
        <img src="@/picture/top.png">
      <div class="main_bar">
        <h2>
          <button type="button" class="button">
            <div class="button-top">数据概览</div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button>
        </h2>
        <h2>
          <button type="button" class="button">
            <div class="button-top">系统设置</div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button>
        </h2>
        <h2><button type="button" class="button">
            <div class="button-top">查询统计</div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button></h2>
        <h2><button type="button" class="button">
            <div class="button-top">信息录入</div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button></h2>
      </div>

    <div class=" main">

      <div class="left" style="display: flex;flex-direction: column;">
        <div><dv-border-box-12>
            <h2><dv-border-box-8>车辆总数</dv-border-box-8></h2>
            <div style="display: flex;flex-direction: column; align-items: center;">
                <div  style="position: absolute;z-index: 0">
                <img src="../picture/TxtBg.png" />
              </div>
              <div style="position: absolute;z-index: 1">
                <div>
                  <img src="../picture/Frame15.png" />
<!--                 TODO {{ CarDataList.length }}-->
                </div>
                <div>
                  <img src="../picture/Frame16.png" />
<!--                  TODO 车辆在线{{ CarDataList.length }}-->
                </div>
              </div>
            </div>
          </dv-border-box-12></div>

        <div><dv-border-box-12>
            <h2><dv-border-box-8>疑似疲劳车辆</dv-border-box-8></h2>
            <dv-scroll-board :config="CarDataListConfig1" style="width:90%;height:80%;margin-left: 20px;" />

          </dv-border-box-12></div>

      </div>

      <div class="mid" style="display: flex;flex-direction: column;">
        <h2><dv-border-box-10>行驶总览</dv-border-box-10></h2>
        <dv-border-box-11>
          <div id="amapcontainer" class="map-container"></div>
        </dv-border-box-11>
      </div>

      <div class="right" style="display: flex;flex-direction: column;">
        <div><dv-border-box-12>
            <h2><dv-border-box-8>行驶里程</dv-border-box-8></h2>
            <div style="display: flex;flex-direction: column; align-items: center;height: 100%">
              <div  style="position: absolute;z-index: 0">
                <img src="../picture/TxBgR.png" />
              </div>
              <div style="position: relative;z-index: 1;display: flex;flex-direction: row;align-items: center;justify-content: center;height: 100%;width: 100%">
                <div>
                  <img   src="../picture/Group60.png"/>
                </div>
                <div style="display: flex;flex-direction: column;margin-left: 2px;height: 40%;justify-content: space-between">
                  <div style="margin-bottom: 50px;"><strong>行驶里程总计数</strong><br/> <strong>59km</strong></div>
                  <div><strong>行驶里程平均数</strong><br/> <strong>59km</strong></div>
                </div>
              </div>
            </div>
          </dv-border-box-12></div>

        <div><dv-border-box-12>
            <h2><dv-border-box-8>疑似酒驾车辆</dv-border-box-8></h2>
            <dv-scroll-board :config="CarDataListConfig2" style="width:90%;height:80%;margin-left: 20px;" />
          </dv-border-box-12></div>

        <!--        <div><dv-border-box-12>-->
        <!--          <h2><dv-border-box-8>类型统计</dv-border-box-8></h2>-->
        <!--          <center><div id="pieChart" style="width: 350px; height: 150px;"></div></center>-->
        <!--        </dv-border-box-12>>-->
        <!--        </div>-->

      </div>

    </div>

  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import { getData, getCarDataList } from '@/api/index.js';
import router from '@/router';
import * as echarts from 'echarts';
import { Card } from 'element-ui';

export default {
  name: 'AMap',
  data() {
    return {
      map: null,
      marker: null,
      CarDataList: [],
      CarDataListConfig1: null,
      CarDataListConfig2: null,
      carNumber: 'MNO345',
      data: {},
      carType: [{
        name: '小型车',
        value: 2
      }, {
        name: '中型车',
        value: 2
      }, {
        name: '大型车',
        value: 3
      }, {
        name: '超大型车',
        value: 3
      }],
    };
  },
  mounted() {
    document.title = 'car-net';
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
    //渲染饼图
    renderPieChart() {
      var myChart = echarts.init(document.getElementById('pieChart'));

      var option = {
        title: {
          text: '车辆类型分布',
          left: 'center',
          textStyle: {
            color: '#333',
            fontSize: 16,
            fontWeight: 'normal'
          }
        },
        backgroundColor: '#121319', // 设置背景颜色
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '车辆类型',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true, // 显示标签
              position: 'inside', // 标签位置，可选值有 inside, outside, center
              formatter: '{b}: {c} ({d}%)', // 标签内容格式
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              show: true, // 显示标签线
              length: 20, // 标签线长度
              length2: 10 // 第二段标签线长度
            },
            data: this.carType
          }
        ]
      };
      myChart.setOption(option);
    },
    //为表格行添加样式
    tableRowClassName({ row }) {
      if (row.isTired === 'Tired!') {
        return 'warning-row';
      }
      return 'danger-row';
    },
    updateConfig() {
      this.CarDataListConfig1 = {
        header: ['车牌号', '疲劳驾驶'],
        data: this.CarDataList.map((item, index) => [
          `${item.carNumber}`,
          ` ${item.isTired}`,
        ]),
        index: true,
        columnWidth: [50],
        headerBGC:'aab4d1',
        oddRowBGC:'f0f0f0',
        evenRowBGC:'ffffff',
        align: ['center'],
        carousel: 'single',
        hoverPause: true,
        waitTime: 500
      }
      console.log('this.CarDataListConfig:\n', this.CarDataListConfig);
      this.CarDataListConfig2 = {
        header: ['车牌号', '酒精驾驶'],
        data: this.CarDataList.map((item, index) => [
          `${item.carNumber}`,
          ` ${item.isDrunk}`
        ]),
        index: true,
        columnWidth: [50],
        headerBGC:'aab4d1',
        oddRowBGC:'f0f0f0',
        evenRowBGC:'ffffff',
        align: ['center'],
        carousel: 'single',
        hoverPause: true,
        waitTime: 700
      }
    },
    // 获取车辆列表数据
    GetCarDataList() {
      getCarDataList()
        .then(async response => {
          this.CarDataList = response.data;
          console.log('获取到车辆列表了', this.CarDataList);
          await this.GetData(this.carNumber);
          this.initAMap();
          // this.renderPieChart();
          this.updateConfig();

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
          console.log('获取到这辆车数据了', this.data);
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
          // mapStyle: 'amap://styles/blue', //设置地图的显示样式
          resizeEnable: true, //是否监控地图容器尺寸变化
          // zoom: this.zoom, // 地图显示的缩放级别
          zoom: 18, //初始化地图级别
          zoomEnable: true, // 地图是否可缩放，默认值为true
          dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
          doubleClickZoom: true, // 地图是否可通过双击鼠标放大地图，默认为true
          center: [this.data.longitude, this.data.latitude], // 初始化中心点坐标 某辆车的坐标
        });
        // 创建 AMap.Icon 实例：
        const icon = new AMap.Icon({
          size: new AMap.Size(62,43),    // 图标尺寸
          image: require("../picture/car.png"),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(62,43)   // 根据所设置的大小拉伸或压缩图片
        });
        // 创建所有地图钉（标记）并添加到当前位置
        this.CarDataList.forEach(async (car) => {
          await this.GetData(car.carNumber);
          const marker = new AMap.Marker({
            position: [this.data.longitude, this.data.latitude], // 设置标记位置
            map: this.map, // 将标记添加到地图上
            icon: icon,
            title: this.data.carNumber, // 设置标记的标题(悬浮显示)
            // label: {
            //   content: car.carNumber, // 设置标记标题内容
            // } 字体颜色的bug
          });
          // 为地图钉添加点击事件处理程序
          marker.on('click', () => {
            const title = marker.getTitle();
            console.log('点击了地图钉:', title);
            router.push({ path: '/detail', query: { carNumber: title } }).catch(e => { });
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
        });
      }).catch(e => {
        console.log(e)
      })
    },

  }
}
</script>
<style scoped>
/* 按钮样式 */
.button {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border-width: 0;
  padding: 0 8px 12px;
  min-width: 10em;
  box-sizing: border-box;
  background: transparent;
  font: inherit;
  cursor: pointer;
}

.button-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 8px 16px;
  transform: translateY(0);
  text-align: center;
  color: #fff;
  text-shadow: 0 -1px rgba(0, 0, 0, .25);
  transition-property: transform;
  transition-duration: .2s;
  -webkit-user-select: none;
  user-select: none;
}

.button:active .button-top {
  transform: translateY(6px);
}

.button-top::after {
  content: '';
  position: absolute;
  z-index: -1;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  background-image: radial-gradient(#0f59edea, rgb(20, 44, 133));
  text-align: center;
  color: #fff;
  box-shadow: inset 0 0 0px 1px rgba(255, 255, 255, .2), 0 1px 2px 1px rgba(255, 255, 255, .2);
  transition-property: border-radius, padding, width, transform;
  transition-duration: .2s;
}

.button:active .button-top::after {
  border-radius: 6px;
  padding: 0 2px;
}

.button-bottom {
  position: absolute;
  z-index: -1;
  bottom: 4px;
  left: 4px;
  border-radius: 8px / 16px 16px 8px 8px;
  padding-top: 6px;
  width: calc(100% - 8px);
  height: calc(100% - 10px);
  box-sizing: content-box;
  background-color: #0c2eed;
  background-image: radial-gradient(4px 8px at 4px calc(100% - 8px), rgba(255, 255, 255, .25), transparent), radial-gradient(4px 8px at calc(100% - 4px) calc(100% - 8px), rgba(255, 255, 255, .25), transparent), radial-gradient(16px at -4px 0, white, transparent), radial-gradient(16px at calc(100% + 4px) 0, white, transparent);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5), inset 0 -1px 3px 3px rgba(0, 0, 0, .4);
  transition-property: border-radius, padding-top;
  transition-duration: .2s;
}

.button:active .button-bottom {
  border-radius: 10px 10px 8px 8px / 8px;
  padding-top: 0;
}

.button-base {
  position: absolute;
  z-index: -2;
  top: 4px;
  left: 0;
  border-radius: 12px;
  width: 100%;
  height: calc(100% - 4px);
  background-color: rgba(0, 0, 0, .15);
  box-shadow: 0 1px 1px 0 black, inset 0 2px 2px rgba(0, 0, 0, .25);
}


.dv-border-box-8 {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  /* 添加阴影效果 */

  /* 添加立体效果 */
  transform-style: preserve-3d;
  transition: transform 0.3s;
}

/* 鼠标悬停时增加立体旋转效果 */
.dv-border-box-8:hover {
  transform: rotateY(20deg);
}


.el-table .danger-row {
  background: rgb(190, 7, 7);
}



/* 主导航栏样式 */
.main_bar {
  display: flex;
  margin-top: -30px;
  justify-content: space-around;
  align-items: center;
}


/* 地图容器样式 */
.map-container {
  margin: 0 auto;
  height: 65vh;

  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;

}

/* 字体样式 */
.title {
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 10px;
}

/* 布局 */
.left {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.left>div {
  flex: 1;
}

.mid {
  width: 50%;
  margin: 0 auto;
  height: 72vh;

  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
}

.right {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.right>div {
  flex: 1;
}
</style>
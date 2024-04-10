<template>
  <div>
      <div class="container" ref="chartContainer" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import { getTemperatureLog } from '@/api/index.js';

export default {
  name: 'Temp',
  data() {
      return {
          carNumber: 'MNO345',
          tempData: [
              // Your fixed tempData here
          ],
      };
  },
  mounted() {
      this.carNumber = this.$route.query.carNumber || 'MNO345';
      // this.GetTempData(); // If you don't need this, you can remove it
      console.log('Temp mounted:', this.tempData);
      
      // Initialize ECharts instance
      this.initChart();
  },
  methods: {
      // Initialize ECharts chart with tempData
      initChart() {
          const chartContainer = this.$refs.chartContainer;
          const myChart = echarts.init(chartContainer);

          // Generate x-axis data and temperature data
          const xAxisData = this.tempData.map(item => item.datetime);
          const temperatureData = this.tempData.map(item => item.temperature);

          // Set chart options
          const option = {
              title: {
                  text: '车辆温度趋势'
              },
              xAxis: {
                  type: 'category',
                  name: '时间',
                  data: xAxisData
              },
              yAxis: {
                  type: 'value',
                  name: '温度'
              },
              series: [{
                  data: temperatureData,
                  type: 'line',
                  smooth: true
              }]
          };

          // Set chart options and render
          myChart.setOption(option);
      },
      // 获取车辆温度数据
      GetTempData() {
          getTemperatureLog(this.carNumber)
              .then(response => {
                  this.tempData = response.data;
                  console.log('temp:', this.tempData);
                  
                  // After getting tempData, initialize the chart
                  this.initChart();
              })
              .catch(error => {
                  console.error('获取车辆温度数据失败:', error);
              });
      },
  },
}
</script>


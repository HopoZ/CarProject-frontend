<template>
    <div>
        <div class="chart-row">
      <!-- 酒驾概率图 -->
      <div class="chart-container">
        <h2>酒驾概率</h2>
        <div id="drunkDrivingChart" style="width:150px;height:150px;"></div>
      </div>
      <!-- 酒精浓度比图 -->
      <div class="chart-container">
        <h2>酒精浓度比</h2>
        <div id="alcoholConcChart" style="width:150px;height:150px;"></div>
      </div>
    </div>
    </div>
</template>

<script>
import echarts from 'echarts';



export default{
    mounted(){
        this.drunkDrivingChart();
        this.alcoholConcChart();
    },
    methods:{
        drunkDrivingChart(){
            var myChart = echarts.init(document.getElementById('drunkDrivingChart'));
            var option = {
                series: [
                    {
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '酒驾概率'}]
                    }
                ]
            };
            myChart.setOption(option);
        },
        alcoholConcChart(){
            var myChart = echarts.init(document.getElementById('alcoholConcChart'));
            var option = {
                series: [
                    {
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '酒精浓度比'}]
                    }
                ]
            };
            myChart.setOption(option);
        }
    }

}
</script>

<style>
</style>
<template>
    <div>
        <div class="chart-container" ref="chartContainer" style="width: 600px; height: 400px;"></div>
    </div>
</template>

<script>
import { getTemperatureLog } from '@/api/index.js';
import * as echarts from "echarts";
import router from '@/router';

export default {
    name: 'Temp',
    data() {
        return {
            carNumber: 'MNO345',
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
    mounted() {
        this.carNumber = this.$route.query.carNumber || 'MNO345';
        this.GetTempData();
        console.log('Temp mounted:', this.tempData);
    },
    methods: {
        // 跳转到详情页
        MovetoDetail() {
            router.push({ path: '/detail', query: { carNumber: this.carNumber } });
        },
        // 获取车辆温度数据
        GetTempData() {
            getTemperatureLog(this.carNumber)
                .then(response => {
                    if(response.data.data !=null) {
                        this.tempData = response.data.data;
                    }
                    console.log('获取后temp:', this.tempData);
                    this.initChart();
                })
                .catch(error => {
                    console.error('获取车辆温度数据失败:', error);
                });
        },
        // 初始化图表
        initChart() {
            const chartContainer = this.$refs.chartContainer;
            const myChart = echarts.init(chartContainer);
            const xAxisData = this.tempData.map(item => item.datetime);
            const temperatureData = this.tempData.map(item => item.temperature);
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
            myChart.setOption(option);
        }
    },
}

</script>

<style scoped>
.button-container {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: auto;

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
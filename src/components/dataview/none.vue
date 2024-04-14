<template>
  <div id="main" style="width: 600px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  data() {
    return {
      ROOT_PATH: 'https://echarts.apache.org/examples',
      myChart: null,
      option: {
        backgroundColor: '#000',
        globe: {
          baseTexture: this.ROOT_PATH + '/data-gl/asset/earth.jpg',
          heightTexture: this.ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
          displacementScale: 0.1,
          shading: 'lambert',
          environment: this.ROOT_PATH + '/data-gl/asset/starfield.jpg',
          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },
          layers: [
            {
              type: 'blend',
              blendTo: 'emission',
              texture: this.ROOT_PATH + '/data-gl/asset/night.jpg'
            },
            {
              type: 'overlay',
              texture: this.ROOT_PATH + '/data-gl/asset/clouds.png',
              shading: 'lambert',
              distance: 5
            }
          ]
        },
        series: []
      }
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById('main'));
    this.myChart.setOption(this.option);
  }
};
</script>

<style scoped>
/* 可选的样式 */
</style>

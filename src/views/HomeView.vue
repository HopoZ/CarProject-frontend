<template>
  <div id="app">
    <!-- ... -->
    <!-- 车辆详细信息 -->
    <table>
      <!-- ... -->
      <tr>
        <td>车辆列表</td>
        <td>
          <button @click="showCarList">展示车辆列表</button>
        </td>
      </tr>
    </table>

    <!-- 添加注册车辆的表单 -->
    <!-- ... -->

    <!-- 展示地图 -->
    <div id="map"></div>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ...
      carListVisible: false // 控制车辆列表模态框的显示
    };
  },
  methods: {
    // ...
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
/* 添加样式以覆盖模态框的默认样式 */
.modal {
  display: none;
}
.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal-card {
  width: 80%;
  max-height: 80%;
  overflow: auto;
}

.modal-card-head {
  justify-content: center;
}

.modal-card-body {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.modal-card-foot {
  justify-content: center;
}
</style>

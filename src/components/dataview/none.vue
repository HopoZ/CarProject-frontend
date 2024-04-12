<template>
  <div class="container">
    <!-- 左边部分：车辆信息 -->
    <div class="left-section">
      <!-- 车辆详细信息部分 -->
      <div class="car-detail">
        <!-- 车辆信息内容 -->
      </div>
      <!-- 展示车辆列表按钮 -->
      <div class="button-container">
        <!-- 返回按钮 -->
      </div>
    </div>

    <!-- 右边部分 -->
    <div class="right-section">
      <!-- 上半部分：仪表盘 -->
      <div class="dashboard">
        <!-- 仪表盘内容 -->
      </div>

      <!-- 下半部分：折线图 -->
      <div class="line-chart">
        <!-- 折线图内容 -->
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.dashboard {
  flex: 1;
  padding: 20px;
}

.line-chart {
  flex: 1;
  padding: 20px;
}
</style>

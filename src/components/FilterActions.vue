<template>
  <div class="ipad-filter-tag-list">
    <div class="ipad-tag-list horizontal">
      <div class="ipad-tag" @click="ipadStore.sortWithGeekbenchScore">
        GeekBench 排序
      </div>
      <div class="ipad-tag" @click="ipadStore.sortWithBatteryCapacity">
        电量 排序
      </div>
      <div class="ipad-tag" @click="ipadStore.sortReset">复位</div>
      <div
        v-if="ipadStore.selectedNames.length > 0"
        class="ipad-tag view-3d-button"
        @click="ipadStore.showModelViewer"
      >
        3D 尺寸对比
      </div>
      <p class="tip">
        <b>tip</b>: <kbd>shift</kbd> + 鼠标滚轮 = 横向滚动
      </p>
    </div>
  </div>
</template>

<script setup>
import { useIpadStore } from '@/stores/ipad'

const ipadStore = useIpadStore()
</script>

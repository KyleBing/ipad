<template>
  <div class="series-list">
    <div class="series" v-for="(series, index) in ipadStore.iPadsSeries" :key="index">
      <div class="header">
        <h3>{{ series.title }}</h3>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th class="pl-2">型号</th>
              <th class="pl-1 pr-1">发布年月</th>
              <th>分辨率<sup>px</sup></th>
              <th>屏幕信息</th>
              <th>长 × 宽<sup>mm</sup></th>
              <th>厚度<sup>mm</sup></th>
              <th>CPU<sup>GHz x 核</sup></th>
              <th>GPU<sup>核</sup></th>
              <th>内存</th>
              <th>存储<sup>GB</sup></th>
              <th>电池</th>
              <th>解锁方式</th>
              <th>接口</th>
              <th>按键</th>
              <th>笔</th>
              <th>颜色</th>
              <th>前 - 摄像头</th>
              <th>后 - 摄像头</th>
              <th>重量 + 代号</th>
              <th>型号</th>
              <th>系统支持</th>
            </tr>
          </thead>
          <tbody class="ipad">
            <IpadTableRow
              v-for="(iPad, idx) in series.iPads"
              :key="'iPad' + idx"
              :ipad="iPad"
              :index="idx"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIpadStore } from '@/stores/ipad'
import IpadTableRow from './IpadTableRow.vue'

const ipadStore = useIpadStore()
</script>

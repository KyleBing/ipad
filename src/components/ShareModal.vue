<template>
  <div class="help-container" v-show="ipadStore.showShare" :style="`height: ${ipadStore.insets.height}px`">
    <div class="help">
      <div class="help-header">
        <h3>扫一扫</h3>
      </div>
      <div class="help-body">
        <div class="qr-item">
          <div class="img-container">
            <img :src="ipadStore.shareQrCode" alt="qr" />
          </div>
          <p>当前页</p>
        </div>
        <div class="qr-item">
          <div class="img-container">
            <img :src="ipadStore.shareQrCodeQQ" alt="qr" />
          </div>
          <p>QQ群</p>
        </div>
      </div>
      <div class="help-footer">
        <div class="operation-btn" @click="ipadStore.toggleShare">关闭</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIpadStore } from '@/stores/ipad'

const ipadStore = useIpadStore()
</script>

<template>
  <div class="container" v-cloak>
    <AboutHeader />
    <FilterList />
    <FilterActions />
    <SeriesList />

    <ShareModal />

    <footer>
      <p>2020.04.14 ~ {{ ipadStore.dateEnd }}</p>
      <p>
        <a class="link" target="_blank" href="https://github.com/KyleBing/ipad"
          >https://github.com/KyleBing/ipad</a
        >
      </p>
    </footer>

    <div
      v-if="ipadStore.showFullScreenBtn"
      v-show="!ipadStore.didEnteredFullScreen"
      class="full-screen full-screen-btn"
      @click="enterFullScreen"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAXqADAAQAAAABAAAAXgAAAADsPCiCAAABm0lEQVR4Ae3cQWoCARQD0Np7CT16wYO129lMdpnI+FwJnyb2NYuC6OPrpo/n8+fvnX+173d+cXd+beBHf13w4EcCo1qLH8E/Rr0fU3v235XFjyYAHvxIYFRr8eBHAqNaiwc/EhjVWjz4kcCo1uLBjwRGtRYPfiQwqrV48COBUa3Fgx8JjGotHvxIYFRr8eBHAqNaiwc/EhjVWjz4kcCo1uLBjwRGtRYPfiQwqrV48COBUa3Fgx8JqCVAgAABAgQIECBAgAABAgQIECBAgMBHCTzOvk/l9fr1XTbFKXgjpIibosEnneINfBE3RYNPOsUb+CJuigafdIo38EXcFA0+6RRv4Iu4KRp80inewBdxUzT4pFO8gS/ipmjwSad4A1/ETdHgk07xBr6Im6LBJ53iDXwRN0WDTzrFG/gibooGn3SKN/BF3BQNPukUb+CLuCkafNIp3sAXcVM0+KRTvIEv4qZo8EmneANfxE3R4JNO8Qa+iJuiTz8Rkn7oyttdP5li8Veu6NAF/oBx5VPwV2ofusAfMK58Cv5K7UPXPznoDA8I21eUAAAAAElFTkSuQmCC"
        alt="fullscreen-button"
        title="进入全屏模式"
      />
    </div>
    <p v-show="ipadStore.didEnteredFullScreen" class="full-screen full-screen-tip">
      Esc 退出全屏模式
    </p>

    <ModelViewer
      v-if="ipadStore.showViewer"
      :show="ipadStore.showViewer"
      :models="ipadStore.selectedModels"
      @close="ipadStore.showViewer = false"
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useIpadStore } from '@/stores/ipad'
import QRCode from 'qrcode'
import AboutHeader from '@/components/AboutHeader.vue'
import FilterList from '@/components/FilterList.vue'
import FilterActions from '@/components/FilterActions.vue'
import SeriesList from '@/components/SeriesList.vue'
import ShareModal from '@/components/ShareModal.vue'
import ModelViewer from '@/components/ModelViewer.vue'

const ipadStore = useIpadStore()

function enterFullScreen() {
  document.documentElement.requestFullscreen()
}

function onResize() {
  ipadStore.setInsets(innerHeight, innerWidth)
}

onMounted(() => {
  const chromeCore = /Chrome/i.test(navigator.userAgent)
  const mobileMode = /Mobile/i.test(navigator.userAgent)
  ipadStore.initFullScreen(chromeCore, mobileMode)
  ipadStore.getInitThumbsUpCount()
  ipadStore.websocketInit()
  ipadStore.generateDeviceMap()
  window.addEventListener('resize', onResize)

  document.documentElement.onfullscreenchange = () => {
    ipadStore.setFullScreen(Boolean(document.fullscreenElement))
  }

  Promise.all([
    QRCode.toDataURL(ipadStore.linkAddress, { margin: 1 }),
    QRCode.toDataURL(ipadStore.linkQQ, { margin: 1 }),
  ]).then(([qr1, qr2]) => {
    ipadStore.setShareQrCodes(qr1, qr2)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

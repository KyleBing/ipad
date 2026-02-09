import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  iPadPro,
  iPadAir,
  iPadMini,
  iPad,
  lastOS,
  lastModifyDate,
} from '@/data/ipadData'
import axios from 'axios'

const WSMessage = {
  type: {
    thumbsUp: 'thumbs-up',
    heartBeat: 'heart-beat',
  },
} as const

function createMessage(type: string, content: unknown) {
  return { type, content }
}

export const useIpadStore = defineStore('ipad', () => {
  const dateEnd = ref(lastModifyDate)
  const latestOS = ref(lastOS)
  const heartActive = ref(false)
  const thumbsUpCount = ref(0)
  const thumbsUpKey = ref('ipad')
  const selectedNames = ref<string[]>([])
  const showViewer = ref(false)
  const showShare = ref(false)
  const showFullScreenBtn = ref(false)
  const didEnteredFullScreen = ref(false)
  const insets = ref({ height: innerHeight, width: innerWidth })
  const shareQrCode = ref<string | null>(null)
  const shareQrCodeQQ = ref<string | null>(null)
  const linkAddress = ref('http://kylebing.cn/tools/ipad/')
  const linkQQ = ref('https://jq.qq.com/?_wv=1027&k=Z8E0HrWA')

  let websocket: WebSocket | null = null
  let pingPongInterval: ReturnType<typeof setInterval> | null = null

  const iPadProReversed = [...iPadPro].reverse()
  const iPadAirReversed = [...iPadAir].reverse()
  const iPadMiniReversed = [...iPadMini].reverse()
  const iPadReversed = [...iPad].reverse()

  const originiPadsSeries = [
    { title: 'iPad Pro', iPads: iPadProReversed },
    { title: 'iPad Air', iPads: iPadAirReversed },
    { title: 'iPad Mini', iPads: iPadMiniReversed },
    { title: 'iPad', iPads: iPadReversed },
  ]

  const allIpads = ref(
    iPadProReversed.concat(iPadAirReversed, iPadMiniReversed, iPadReversed)
  )

  const iPadsSeries = ref([...originiPadsSeries])
  const deviceMap = ref(new Map<string, (typeof iPadPro)[0]>())

  const maxScore = computed(() => {
    let max = 0
    ;[...iPad, ...iPadPro, ...iPadAir, ...iPadMini].forEach((item) => {
      if (max < (item.geekbenchScore ?? 0)) max = item.geekbenchScore ?? 0
    })
    return max
  })

  const maxBatteryCapacity = computed(() => {
    let max = 0
    ;[...iPad, ...iPadPro, ...iPadAir, ...iPadMini].forEach((item) => {
      if (max < (item.battery?.capacity ?? 0)) max = item.battery?.capacity ?? 0
    })
    return max
  })

  const maxBatteryCapacityWH = computed(() => {
    let max = 0
    ;[...iPad, ...iPadPro, ...iPadAir, ...iPadMini].forEach((item) => {
      if (max < (item.battery?.capacityWH ?? 0)) max = item.battery?.capacityWH ?? 0
    })
    return max
  })

  const yearMaxMin = computed(() => {
    const allYear = [...iPad, ...iPadPro, ...iPadAir, ...iPadMini].map(
      (item) => Number(item.release?.substring(0, 4))
    )
    return {
      max: Math.max(...allYear),
      min: Math.min(...allYear),
    }
  })

  const selectedModels = computed(() => {
    return selectedNames.value
      .map((name) => deviceMap.value.get(name))
      .filter(Boolean)
  })

  function generateDeviceMap() {
    const map = new Map<string, (typeof iPadPro)[0]>()
    allIpads.value.forEach((ipadInfo) => {
      map.set(ipadInfo.name, ipadInfo)
    })
    deviceMap.value = map
  }

  function filterTagToggle(deviceName: string) {
    const idx = selectedNames.value.indexOf(deviceName)
    if (idx >= 0) {
      selectedNames.value.splice(idx, 1)
    } else {
      selectedNames.value.push(deviceName)
    }
    updateShowingDevices()
  }

  function updateShowingDevices() {
    const filterIpads = selectedNames.value
      .map((name) => deviceMap.value.get(name))
      .filter(Boolean)
    if (filterIpads.length === 0) {
      iPadsSeries.value = [...originiPadsSeries]
    } else {
      iPadsSeries.value = [{ title: '筛选结果', iPads: filterIpads }]
    }
  }

  function sortWithGeekbenchScore() {
    iPadsSeries.value = [
      {
        title: 'GeekBench 多核分数排名',
        iPads: [...iPadAir, ...iPadMini, ...iPad, ...iPadPro].sort(
          (a, b) => ((a.geekbenchScore ?? 0) < (b.geekbenchScore ?? 0) ? 1 : -1)
        ),
      },
    ]
  }

  function sortWithBatteryCapacity() {
    iPadsSeries.value = [
      {
        title: '电量排行',
        iPads: [...iPadAir, ...iPadMini, ...iPad, ...iPadPro].sort(
          (a, b) =>
            (a.battery?.capacity ?? 0) < (b.battery?.capacity ?? 0) ? 1 : -1
        ),
      },
    ]
  }

  function sortReset() {
    selectedNames.value = []
    iPadsSeries.value = [...originiPadsSeries]
  }

  function toggleShare() {
    showShare.value = !showShare.value
  }

  function showModelViewer() {
    showViewer.value = true
  }

  function getInitThumbsUpCount() {
    axios.get('/portal/thumbs-up?key=' + thumbsUpKey.value).then((res) => {
      if (res.data?.data) {
        thumbsUpCount.value = res.data.data
      }
    })
  }

  function websocketInit() {
    try {
      websocket = new WebSocket('ws://kylebing.cn/ws')
      websocket.onopen = websocketOnOpen
      websocket.onmessage = websocketOnMessage
      websocket.onerror = websocketOnError
      websocket.onclose = websocketOnClose
    } catch (e) {
      console.warn('WebSocket init failed:', e)
    }
  }

  function websocketOnOpen() {
    pingPongInterval = setInterval(() => {
      if (websocket?.readyState === 1) {
        websocket.send(
          JSON.stringify(createMessage(WSMessage.type.heartBeat, 'ping'))
        )
      }
    }, 10000)
  }

  function websocketOnMessage(res: MessageEvent) {
    try {
      const msg = JSON.parse(res.data)
      if (
        msg.type === WSMessage.type.thumbsUp &&
        msg.content?.key === thumbsUpKey.value
      ) {
        thumbsUpCount.value = msg.content.count
      }
    } catch {
      // ignore
    }
  }

  function websocketOnError() {
    console.warn('WebSocket error')
  }

  function websocketOnClose() {
    if (pingPongInterval) clearInterval(pingPongInterval)
  }

  function thumbsUp() {
    heartActive.value = true
    if (websocket?.readyState === 1) {
      websocket.send(
        JSON.stringify(
          createMessage(WSMessage.type.thumbsUp, { key: thumbsUpKey.value })
        )
      )
    }
  }

  function setInsets(height: number, width: number) {
    insets.value = { height, width }
  }

  function initFullScreen(chromeCore: boolean, mobileMode: boolean) {
    showFullScreenBtn.value = chromeCore && !mobileMode
  }

  function setFullScreen(entered: boolean) {
    didEnteredFullScreen.value = entered
  }

  function setShareQrCodes(qr: string | null, qrQQ: string | null) {
    shareQrCode.value = qr
    shareQrCodeQQ.value = qrQQ
  }

  return {
    dateEnd,
    latestOS,
    heartActive,
    thumbsUpCount,
    selectedNames,
    showViewer,
    showShare,
    showFullScreenBtn,
    didEnteredFullScreen,
    insets,
    shareQrCode,
    shareQrCodeQQ,
    linkAddress,
    linkQQ,
    iPadsSeries,
    deviceMap,
    allIpads,
    iPadPro: iPadProReversed,
    iPadAir: iPadAirReversed,
    iPadMini: iPadMiniReversed,
    iPad: iPadReversed,
    originiPadsSeries,
    maxScore,
    maxBatteryCapacity,
    maxBatteryCapacityWH,
    yearMaxMin,
    selectedModels,
    generateDeviceMap,
    filterTagToggle,
    updateShowingDevices,
    sortWithGeekbenchScore,
    sortWithBatteryCapacity,
    sortReset,
    toggleShare,
    showModelViewer,
    getInitThumbsUpCount,
    websocketInit,
    thumbsUp,
    setShareQrCodes,
    setInsets,
    initFullScreen,
    setFullScreen,
  }
})

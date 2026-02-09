<template>
  <tr :data-series="ipad.title" :data-index="index">
    <template v-if="ipad.isPreview">
      <td>
        <div class="model-title">
          <div :class="['model', { 'is-new': ipad.isNew }]">{{ ipad.name_short }}</div>
          <div class="label label-blue">{{ ipad.screen.size }}</div>
        </div>
      </td>
      <td class="size text-mono">
        <div>{{ ipad.release }} ？</div>
      </td>
    </template>

    <template v-else>
      <td>
        <div class="model-title">
          <div :class="['model', 'text-mono', { 'is-new': ipad.isNew }]">
            {{ ipad.name_short }}
          </div>
          <div class="size text-mono">{{ ipad.screen.size }}</div>
        </div>
      </td>
      <td>
        <div class="date" :style="yearStyle(ipad.release)">
          <div class="year">{{ ipad.release.substring(0, 4) }}</div>
          <div class="gray month text-normal">{{ ipad.release.substring(5, 7) }}</div>
        </div>
      </td>
      <td>
        <div class="active">{{ ipad.screen.width }} × {{ ipad.screen.height }}<span class="unit"></span></div>
      </td>
      <td>
        <div class="screen">
          <dl>
            <dd>{{ ipad.screen.density }}<span class="unit">ppi</span></dd>
            <template v-if="ipad.screen.refreshRate">
              <dd v-if="ipad.screen.refreshRate === 120" class="label label-magenta">{{ ipad.screen.refreshRate }}<span class="unit">hz</span></dd>
              <dd v-else class="label label-green">{{ ipad.screen.refreshRate }}<span class="unit">hz</span></dd>
            </template>
          </dl>
          <dl>
            <dd v-if="ipad.screen.xdr">
              <span class="xdr">XDR</span>
              <span v-if="ipad.screen.xdrRange" class="unit">{{ ipad.screen.xdrRange[0] }} ~ {{ ipad.screen.xdrRange[1] }}nit</span>
            </dd>
            <dd v-if="ipad.screen.material">{{ ipad.screen.material }}<span class="unit"></span></dd>
          </dl>
          <dl>
            <dd v-if="ipad.screen.brightness">{{ ipad.screen.brightness }}<span class="unit">nit</span></dd>
            <dd v-if="ipad.screen.colorP3">P3</dd>
            <dd v-if="ipad.screen.trueTone">TrueTone</dd>
          </dl>
        </div>
      </td>
      <td class="font-galvji">{{ ipad.width }} × {{ ipad.height }}</td>
      <td class="text-emphasis"><span class="label label-pink">{{ ipad.thickness }}</span></td>
      <td>
        <div>
          <div class="dual-label-cpu" v-for="item in ipad.cpu" :key="item.model">
            <div class="model">{{ item.model }}</div>
            <div class="rate">{{ item.rate + ' x ' + item.core }} {{ item.name }}</div>
          </div>
        </div>
        <div class="score-bar green" v-if="ipad.geekbenchScore">
          <div class="bar" :style="`width: ${(ipad.geekbenchScore / maxScore) * 100}px`"></div>
          <div class="score">{{ ipad.geekbenchScore }}</div>
        </div>
      </td>
      <td>
        <div class="dual-label-gpu gpu" v-if="ipad.gpu?.model">
          <div class="model">{{ ipad.gpu.model }}</div>
          <div class="rate">{{ ipad.gpu.core || '&nbsp;' }}</div>
        </div>
      </td>
      <td>
        <div class="dual-label-memory memory" v-for="(memory, i) in ipad.memory" :key="'memory' + i">
          <div v-if="memory.size < 1" class="model">{{ memory.size * 1000 }} M</div>
          <div v-else class="model">{{ memory.size }} G</div>
          <div v-if="memory.name || memory.type" class="rate">{{ memory.type }} {{ memory.name }}</div>
        </div>
      </td>
      <td>
        <span v-for="(size, i) in ipad.storage" :key="'size' + i" class="label-blue label label-sm">
          <span v-if="size < 1024">{{ size }}</span>
          <span v-else>{{ Math.round(size / 1024) }}T</span>
        </span>
      </td>
      <td>
        <div class="battery-item">
          <div class="battery-voltage" v-if="ipad.battery?.voltage">{{ ipad.battery.voltage }} v</div>
          <div>
            <div class="score-bar green" v-if="ipad.battery?.capacity">
              <div class="bar" :style="`width: ${(ipad.battery.capacity / maxBatteryCapacity) * 100}px`"></div>
              <div class="score">{{ ipad.battery.capacity }} mah</div>
            </div>
            <div class="score-bar blue" v-if="ipad.battery?.capacityWH">
              <div class="bar" :style="`width: ${(ipad.battery.capacityWH / maxBatteryCapacityWH) * 100}px`"></div>
              <div class="score">{{ ipad.battery.capacityWH }} wh</div>
            </div>
          </div>
        </div>
      </td>
      <td class="text-small">
        <div class="key-list">
          <div class="key-item" v-for="key in ipad.unlockMethods" :key="key">
            <div class="icon" v-if="key === '面容解锁'"><img src="/img/icons/verify_face.png" alt="face" /></div>
            <div class="icon" v-if="key === '指纹解锁'"><img src="/img/icons/verify_fingerprint.png" alt="fingerprint" /></div>
            <div class="key-name">{{ key }}</div>
          </div>
        </div>
      </td>
      <td class="text-small">
        <div class="key-list">
          <div class="key-item" v-for="connector in ipad.connector" :key="connector">
            <div class="icon" v-if="connector === '闪电'"><img src="/img/icons/port_lightning.png" alt="lightning" /></div>
            <div class="icon" v-if="connector === '智能接点'"><img src="/img/icons/port_connector.png" alt="connector" /></div>
            <div class="icon" v-if="connector === '3.5mm音频接口'"><img src="/img/icons/port_3.5mm.png" alt="3.5mm" /></div>
            <div class="icon" v-if="connector === 'USB-C'"><img src="/img/icons/port_usbc.png" alt="usbc" /></div>
            <div class="icon" v-if="connector === '雷雳3'"><img src="/img/icons/port_usbc_thunderbolt.png" alt="usbc" /></div>
            <div class="icon" v-if="connector === '磁力接点'"><img src="/img/icons/port_meg.png" alt="meg" /></div>
            <div class="icon" v-if="connector === '30针'"><img src="/img/icons/port_30pin.png" alt="30pin" /></div>
            <div class="key-name">{{ connector }}</div>
          </div>
        </div>
      </td>
      <td class="text-small">
        <div class="key-list">
          <div class="key-item" v-for="key in ipad.mechanicalKeys" :key="key">
            <div class="icon" v-if="key === '开关机键'"><img src="/img/icons/key_power.png" alt="power" /></div>
            <div class="icon" v-if="key === '音量增减键'"><img src="/img/icons/key_volume.png" alt="volume" /></div>
            <div class="icon" v-if="key === 'Home键'"><img src="/img/icons/key_home.png" alt="home" /></div>
            <div class="key-name">{{ key }}</div>
          </div>
        </div>
      </td>
      <td class="text-small text-narrow">
        <p v-for="applePencil in ipad.pencil" :key="applePencil">
          <span class="text-bold">{{ applePencil }}</span>
        </p>
      </td>
      <td class="text-small text-narrow">
        <p v-for="color in ipad.colors" :key="color"><span>{{ color }}</span></p>
      </td>
      <td>
        <div class="camera" v-if="ipad.cameras?.front?.pixelCount">
          <span class="hdr" v-if="ipad.cameras.front.hdr">HDR</span>
          <span>{{ ipad.cameras.front.pixelCount }}</span>
          <div class="dimension" v-if="Array.isArray(ipad.cameras.front.dimension)">
            <div class="dimension-item" v-for="(dimension, i) in ipad.cameras.front.dimension" :key="i">
              <template v-if="typeof dimension === 'object'">
                <div class="size">{{ dimension.size }}</div>
                <div class="fps" v-for="(fps, fpsIndex) in (dimension.fps || [])" :key="fpsIndex">
                  {{ fps }}{{ fpsIndex + 1 === (dimension.fps || []).length ? '' : ',' }}
                </div>
              </template>
              <div v-else class="size">{{ dimension }}</div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="camera" v-for="(camera, cameraIndex) in ipad.cameras?.back" :key="cameraIndex">
          <div class="base-info">
            <div>
              <span class="hdr" v-if="camera.hdr">HDR</span>
              <span class="pixel-count">{{ camera.pixelCount }}</span>
            </div>
            <span>缩放×{{ camera.zoomRate }}</span>
          </div>
          <div class="dimension">
            <div class="dimension-item" v-for="(dimension, i) in camera.dimension" :key="i">
              <div class="size">{{ dimension.size }}</div>
              <span class="impact">FPS：</span>
              <div class="fps" v-for="(fps, fpsIndex) in dimension.fps" :key="fpsIndex">
                {{ fps }}{{ fpsIndex + 1 === dimension.fps.length ? '' : ',' }}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="text-small text-narrow">
        <p v-for="model in ipad.models" :key="model.id">
          <span class="text-bold">{{ model.weight }}克 </span><span>{{ model.model }}</span>
        </p>
      </td>
      <td class="text-small text-narrow">
        <p v-for="model in ipad.models" :key="model.id">
          <span>{{ model.name }}</span>
        </p>
      </td>
      <td class="text-small">
        <p>初始：{{ ipad.os?.init }}</p>
        <p>
          最终：<span :class="{ 'green text-bold': ipad.os?.last === latestOS }">{{ ipad.os?.last }}</span>
        </p>
      </td>
    </template>
  </tr>
</template>

<script setup>
import { computed } from 'vue'
import { useIpadStore } from '@/stores/ipad'

const props = defineProps({
  ipad: { type: Object, required: true },
  index: { type: Number, required: true },
})

const ipadStore = useIpadStore()
const maxScore = computed(() => ipadStore.maxScore)
const maxBatteryCapacity = computed(() => ipadStore.maxBatteryCapacity)
const maxBatteryCapacityWH = computed(() => ipadStore.maxBatteryCapacityWH)
const latestOS = computed(() => ipadStore.latestOS)

function yearStyle(releaseString) {
  const year = Number(releaseString?.substring(0, 4))
  const { min, max } = ipadStore.yearMaxMin
  const yearGap = max - min
  const percentage = (year - min) / yearGap
  return `color: hsl(211deg ${80 + 20 * percentage}% ${30 * percentage + 20}%)`
}
</script>

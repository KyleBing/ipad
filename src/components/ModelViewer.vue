<template>
  <div class="model-viewer" v-if="show">
    <div class="model-viewer-content">
      <div class="model-viewer-header">
        <h3>机型尺寸对比</h3>
        <div class="controls">
          <div class="spacing-control">
            <label>机型间距:</label>
            <input type="number" v-model.number="modelSpacing" min="0" max="200" step="2" />
          </div>
          <div class="layout-control">
            <button @click="toggleLayout" title="切换布局">
              {{ isSideBySide ? '前后布局' : '并排布局' }}
            </button>
          </div>
          <div class="camera-controls">
            <button @click="setCameraAngle('front')" title="正面">正</button>
            <button @click="setCameraAngle('side')" title="侧面">侧</button>
            <button @click="setCameraAngle('top')" title="俯视">俯</button>
            <button @click="setCameraAngle('iso')" title="等轴测">等</button>
          </div>
        </div>
        <button class="close-btn" @click="$emit('close')">关闭</button>
      </div>
      <div class="viewer-container">
        <div class="canvas-wrapper">
          <div ref="canvasContainer" class="canvas-container"></div>
          <div class="operation-desc">
            操作说明：鼠标左键按住拖动可旋转视角，滚轮可缩放，右键按住拖动可平移。移动端双指拖动。
          </div>
        </div>
        <div class="model-table">
          <table>
            <thead>
              <tr>
                <th>机型</th>
                <th>高</th>
                <th>宽</th>
                <th>厚</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(model, index) in models" :key="model.name">
                <td>
                  <div class="model-name">
                    <div class="color-box" :style="{ backgroundColor: getColorHex(index) }"></div>
                    <span>{{ model.name }}</span>
                  </div>
                </td>
                <td>{{ model.height }}</td>
                <td>{{ model.width }}</td>
                <td>{{ model.thickness }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, watch, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = defineProps({
  show: { type: Boolean, default: false },
  models: { type: Array, default: () => [] },
})

defineEmits(['close'])

const canvasContainer = ref(null)
const _resizeHandlerRef = ref(null)
const scene = shallowRef(null)
const camera = shallowRef(null)
const renderer = shallowRef(null)
const controls = shallowRef(null)
const boxes = shallowRef([])
const labels = shallowRef([])
const modelSpacing = ref(15)
const isSideBySide = ref(false)
const colors = [
  0x2196f3, 0x4caf50, 0xffc107, 0xf44336, 0x9c27b0, 0x00bcd4, 0xff9800,
  0x795548, 0x607d8b, 0xe91e63,
]

function getColorHex(index) {
  return '#' + colors[index % colors.length].toString(16).padStart(6, '0')
}

function toNum(v) {
  const n = Number(v)
  return Number.isFinite(n) ? n : 0
}

function createLabel(text, position) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  canvas.width = 512
  canvas.height = 128
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  const border = 3
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.strokeStyle = '#333333'
  context.lineWidth = border
  context.strokeRect(border / 2, border / 2, canvas.width - border, canvas.height - border)
  context.font = 'bold 48px Arial'
  context.fillStyle = '#000000'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.shadowColor = 'rgba(0, 0, 0, 0.3)'
  context.shadowBlur = 2
  context.shadowOffsetX = 1
  context.shadowOffsetY = 1
  context.fillText(text, canvas.width / 2, canvas.height / 2)
  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.generateMipmaps = false
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  })
  const sprite = new THREE.Sprite(material)
  sprite.position.copy(position)
  sprite.scale.set(50, 12.5, 1)
  return sprite
}

function setupThreeJS() {
  if (!canvasContainer.value || props.models.length === 0) return
  const models = props.models
  const sortedModels = [...models].sort((a, b) => toNum(a.width) - toNum(b.width))

  scene.value = new THREE.Scene()
  scene.value.background = new THREE.Color(0xf0f0f0)

  const containerWidth = canvasContainer.value.clientWidth
  const containerHeight = canvasContainer.value.clientHeight
  camera.value = new THREE.PerspectiveCamera(
    50,
    containerWidth / containerHeight,
    0.1,
    20000
  )
  camera.value.position.set(200, 400, 200)
  camera.value.lookAt(0, 100, 0)

  renderer.value = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    precision: 'highp',
    powerPreference: 'high-performance',
  })
  renderer.value.setPixelRatio(window.devicePixelRatio)
  renderer.value.setSize(containerWidth, containerHeight)
  renderer.value.setClearColor(0xf0f0f0, 1)
  renderer.value.shadowMap.enabled = false
  while (canvasContainer.value.firstChild) {
    canvasContainer.value.removeChild(canvasContainer.value.firstChild)
  }
  canvasContainer.value.appendChild(renderer.value.domElement)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.value.add(ambientLight)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
  directionalLight.position.set(300, 400, 300)
  scene.value.add(directionalLight)
  const backLight = new THREE.DirectionalLight(0xffffff, 0.5)
  backLight.position.set(-1, -1, -1)
  scene.value.add(backLight)
  const topLight = new THREE.DirectionalLight(0xffffff, 0.4)
  topLight.position.set(0, 1, 0)
  scene.value.add(topLight)

  const boxArr = []
  const labelArr = []
  let currentZ = 0

  sortedModels.forEach((model, index) => {
    const w = toNum(model.width) || 1
    const h = toNum(model.height) || 1
    const d = toNum(model.thickness) || 0.1
    const geometry = new THREE.BoxGeometry(w, h, d, 32, 32, 4)
    const radius = Math.min(w, h) * 0.08
    const position = geometry.attributes.position
    const vertex = new THREE.Vector3()
    const halfW = w / 2
    const halfH = h / 2
    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i)
      const distFromEdgeX = halfW - Math.abs(vertex.x)
      const distFromEdgeY = halfH - Math.abs(vertex.y)
      if (distFromEdgeX < radius && distFromEdgeY < radius) {
        const cornerX = Math.sign(vertex.x) * (halfW - radius)
        const cornerY = Math.sign(vertex.y) * (halfH - radius)
        const dx = vertex.x - cornerX
        const dy = vertex.y - cornerY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > radius) {
          const angle = Math.atan2(dy, dx)
          vertex.x = cornerX + Math.cos(angle) * radius
          vertex.y = cornerY + Math.sin(angle) * radius
        }
      }
      position.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }
    position.needsUpdate = true
    geometry.computeVertexNormals()

    const material = new THREE.MeshBasicMaterial({
      color: colors[index % colors.length],
    })
    const box = new THREE.Mesh(geometry, material)
    box.castShadow = false
    box.receiveShadow = false
    box.position.set(-w / 2, h / 2, currentZ)
    const label = createLabel(
      model.name_short || model.name,
      new THREE.Vector3(box.position.x, box.position.y + h / 2 + 10, box.position.z)
    )
    currentZ += modelSpacing.value
    scene.value.add(box)
    scene.value.add(label)
    boxArr.push(box)
    labelArr.push(label)
  })

  const gridHelper = new THREE.GridHelper(4000, 80, 0xcccccc, 0xdddddd)
  gridHelper.material.opacity = 0.4
  gridHelper.material.transparent = true
  gridHelper.position.y = -1
  scene.value.add(gridHelper)

  controls.value = new OrbitControls(camera.value, renderer.value.domElement)

  let minX = Infinity,
    maxX = -Infinity
  let minY = Infinity,
    maxY = -Infinity
  let minZ = Infinity,
    maxZ = -Infinity
  boxArr.forEach((box) => {
    const boxSize = new THREE.Box3().setFromObject(box)
    minX = Math.min(minX, boxSize.min.x)
    maxX = Math.max(maxX, boxSize.max.x)
    minY = Math.min(minY, boxSize.min.y)
    maxY = Math.max(maxY, boxSize.max.y)
    minZ = Math.min(minZ, boxSize.min.z)
    maxZ = Math.max(maxZ, boxSize.max.z)
  })
  const centerX = (minX + maxX) / 2
  const centerY = (minY + maxY) / 2
  const centerZ = (minZ + maxZ) / 2
  controls.value.target.set(centerX, centerY, centerZ)
  controls.value.enableDamping = true
  controls.value.dampingFactor = 0.05
  controls.value.minDistance = 30
  controls.value.maxDistance = 8000

  const sizeX = maxX - minX
  const sizeY = maxY - minY
  const sizeZ = maxZ - minZ
  const maxSize = Math.max(sizeX, sizeY, sizeZ, 1)
  const cameraDistance = Math.max(maxSize * 2.5, 300)
  // Place camera in front of the tablets (along +Z) so we see the 240×169 face, not the thin edge
  camera.value.position.set(centerX, centerY, centerZ + cameraDistance)
  camera.value.lookAt(centerX, centerY, centerZ)
  controls.value.target.set(centerX, centerY, centerZ)

  boxes.value = boxArr
  labels.value = labelArr

  function animate() {
    requestAnimationFrame(animate)
    if (renderer.value && scene.value && camera.value) {
      if (controls.value) controls.value.update()
      renderer.value.render(scene.value, camera.value)
    }
  }
  animate()

  const resizeHandler = () => {
    if (!canvasContainer.value || !camera.value || !renderer.value) return
    const w = canvasContainer.value.clientWidth
    const h = canvasContainer.value.clientHeight
    camera.value.aspect = w / h
    camera.value.updateProjectionMatrix()
    renderer.value.setSize(w, h)
    renderer.value.setPixelRatio(window.devicePixelRatio)
  }
  window.addEventListener('resize', resizeHandler)
  _resizeHandlerRef.value = resizeHandler
}

function updateModelPositions() {
  if (!boxes.value.length || !camera.value || !controls.value) return
  const models = [...props.models].sort((a, b) => toNum(a.width) - toNum(b.width))
  const sortedModels = models
  let currentZ = 0
  let currentX = 0
  let totalWidth = 0
  let totalDepth = 0
  sortedModels.forEach((model) => {
    if (isSideBySide.value) {
      totalWidth += (toNum(model.width) || 1) + modelSpacing.value
    } else {
      totalDepth += modelSpacing.value
    }
  })
  if (isSideBySide.value) totalWidth -= modelSpacing.value
  else totalDepth -= modelSpacing.value

  if (isSideBySide.value) currentX = -totalWidth / 2

  boxes.value.forEach((box, index) => {
    const model = sortedModels[index]
    if (!model) return
    if (isSideBySide.value) {
      const w = toNum(model.width) || 1
      const h = toNum(model.height) || 1
      const x = currentX + w / 2
      box.position.set(x, h / 2, 0)
      currentX += w + modelSpacing.value
      if (labels.value[index]) {
        labels.value[index].position.set(x, h / 2 + 10, 0)
      }
    } else {
      const w = toNum(model.width) || 1
      const h = toNum(model.height) || 1
      const z = currentZ - totalDepth / 2
      box.position.set(-w / 2, h / 2, z)
      currentZ += modelSpacing.value
      if (labels.value[index]) {
        labels.value[index].position.set(box.position.x, box.position.y + h / 2 + 10, z)
      }
    }
  })

  if (controls.value && boxes.value.length > 0) {
    let minX = Infinity,
      maxX = -Infinity
    let minY = Infinity,
      maxY = -Infinity
    let minZ = Infinity,
      maxZ = -Infinity
    boxes.value.forEach((box) => {
      const boxSize = new THREE.Box3().setFromObject(box)
      minX = Math.min(minX, boxSize.min.x)
      maxX = Math.max(maxX, boxSize.max.x)
      minY = Math.min(minY, boxSize.min.y)
      maxY = Math.max(maxY, boxSize.max.y)
      minZ = Math.min(minZ, boxSize.min.z)
      maxZ = Math.max(maxZ, boxSize.max.z)
    })
    controls.value.target.set(
      (minX + maxX) / 2,
      (minY + maxY) / 2,
      (minZ + maxZ) / 2
    )
  }
}

function fitCameraToBounds() {
  if (!camera.value || !controls.value || !boxes.value.length) return
  let minX = Infinity, maxX = -Infinity
  let minY = Infinity, maxY = -Infinity
  let minZ = Infinity, maxZ = -Infinity
  boxes.value.forEach((box) => {
    const boxSize = new THREE.Box3().setFromObject(box)
    minX = Math.min(minX, boxSize.min.x)
    maxX = Math.max(maxX, boxSize.max.x)
    minY = Math.min(minY, boxSize.min.y)
    maxY = Math.max(maxY, boxSize.max.y)
    minZ = Math.min(minZ, boxSize.min.z)
    maxZ = Math.max(maxZ, boxSize.max.z)
  })
  const centerX = (minX + maxX) / 2
  const centerY = (minY + maxY) / 2
  const centerZ = (minZ + maxZ) / 2
  const maxSize = Math.max(maxX - minX, maxY - minY, maxZ - minZ, 1)
  const dist = Math.max(maxSize * 2.5, 400)
  controls.value.target.set(centerX, centerY, centerZ)
  camera.value.position.set(centerX, centerY, centerZ + dist)
  camera.value.lookAt(centerX, centerY, centerZ)
}

function toggleLayout() {
  isSideBySide.value = !isSideBySide.value
  updateModelPositions()
  nextTick(() => {
    requestAnimationFrame(() => {
      fitCameraToBounds()
    })
  })
}

function setCameraAngle(angle) {
  if (!camera.value || !controls.value || !boxes.value.length) return
  let minX = Infinity,
    maxX = -Infinity
  let minY = Infinity,
    maxY = -Infinity
  let minZ = Infinity,
    maxZ = -Infinity
  boxes.value.forEach((box) => {
    const boxSize = new THREE.Box3().setFromObject(box)
    minX = Math.min(minX, boxSize.min.x)
    maxX = Math.max(maxX, boxSize.max.x)
    minY = Math.min(minY, boxSize.min.y)
    maxY = Math.max(maxY, boxSize.max.y)
    minZ = Math.min(minZ, boxSize.min.z)
    maxZ = Math.max(maxZ, boxSize.max.z)
  })
  const centerX = (minX + maxX) / 2
  const centerY = (minY + maxY) / 2
  const centerZ = (minZ + maxZ) / 2
  const maxSize = Math.max(maxX - minX, maxY - minY, maxZ - minZ)
  const cameraDistance = maxSize * 2
  const positions = {
    front: { x: centerX, y: centerY, z: centerZ + cameraDistance },
    side: { x: centerX + cameraDistance, y: centerY, z: centerZ },
    top: { x: centerX, y: centerY + cameraDistance, z: centerZ },
    iso: {
      x: centerX + cameraDistance * 0.5,
      y: centerY + cameraDistance * 0.5,
      z: centerZ + cameraDistance * 0.5,
    },
  }
  const pos = positions[angle]
  if (pos) {
    camera.value.position.set(pos.x, pos.y, pos.z)
    controls.value.target.set(centerX, centerY, centerZ)
  }
}

function cleanup() {
  if (_resizeHandlerRef.value) {
    window.removeEventListener('resize', _resizeHandlerRef.value)
    _resizeHandlerRef.value = null
  }
  if (renderer.value) {
    if (renderer.value.domElement?.parentNode) {
      renderer.value.domElement.parentNode.removeChild(renderer.value.domElement)
    }
    renderer.value.dispose()
  }
  if (scene.value) {
    while (scene.value.children.length > 0) {
      scene.value.remove(scene.value.children[0])
    }
  }
  scene.value = null
  camera.value = null
  renderer.value = null
  controls.value = null
  boxes.value = []
  labels.value = []
}

function onWindowResize() {
  if (!canvasContainer.value || !camera.value || !renderer.value) return
  const w = canvasContainer.value.clientWidth
  const h = canvasContainer.value.clientHeight
  camera.value.aspect = w / h
  camera.value.updateProjectionMatrix()
  renderer.value.setSize(w, h)
  renderer.value.setPixelRatio(window.devicePixelRatio)
}

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      document.body.classList.add('modal-open')
      nextTick(() => {
        // Container may have 0 size before layout; retry so canvas gets valid dimensions
        function trySetup() {
          if (!canvasContainer.value || props.models.length === 0) return
          const w = canvasContainer.value.clientWidth
          const h = canvasContainer.value.clientHeight
          if (w > 0 && h > 0) {
            setupThreeJS()
          } else {
            requestAnimationFrame(trySetup)
          }
        }
        trySetup()
      })
    } else {
      cleanup()
      document.body.classList.remove('modal-open')
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)
watch(modelSpacing, updateModelPositions)
watch(isSideBySide, updateModelPositions)

onBeforeUnmount(() => {
  cleanup()
  document.body.classList.remove('modal-open')
  document.body.style.overflow = ''
})
</script>

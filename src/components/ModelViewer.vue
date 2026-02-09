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
                    <span>{{ model.name_short || model.name }}</span>
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
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = defineProps({
  show: { type: Boolean, default: false },
  models: { type: Array, default: () => [] },
})

defineEmits(['close'])

const canvasContainer = ref(null)
const _resizeHandlerRef = ref(null)
const scene = ref(null)
const camera = ref(null)
const renderer = ref(null)
const controls = ref(null)
const boxes = ref([])
const labels = ref([])
const modelSpacing = ref(15)
const isSideBySide = ref(false)
const colors = [
  0x2196f3, 0x4caf50, 0xffc107, 0xf44336, 0x9c27b0, 0x00bcd4, 0xff9800,
  0x795548, 0x607d8b, 0xe91e63,
]

function getColorHex(index) {
  return '#' + colors[index % colors.length].toString(16).padStart(6, '0')
}

function createLabel(text, position) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  canvas.width = 512
  canvas.height = 128
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.font = 'bold 48px Arial'
  context.fillStyle = '#000000'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.shadowColor = 'rgba(0, 0, 0, 0.5)'
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
  const sortedModels = [...models].sort((a, b) => (a.width || 0) - (b.width || 0))

  scene.value = new THREE.Scene()
  scene.value.background = new THREE.Color(0xf0f0f0)

  const containerWidth = canvasContainer.value.clientWidth
  const containerHeight = canvasContainer.value.clientHeight
  camera.value = new THREE.PerspectiveCamera(
    50,
    containerWidth / containerHeight,
    0.1,
    2000
  )
  camera.value.position.set(200, 400, 200)
  camera.value.lookAt(0, 100, 0)

  renderer.value = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    precision: 'highp',
    powerPreference: 'high-performance',
  })
  renderer.value.setPixelRatio(window.devicePixelRatio)
  renderer.value.setSize(containerWidth, containerHeight)
  renderer.value.shadowMap.enabled = true
  renderer.value.shadowMap.type = THREE.PCFSoftShadowMap
  canvasContainer.value.appendChild(renderer.value.domElement)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.value.add(ambientLight)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(1, 1, 1)
  directionalLight.castShadow = true
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
    const geometry = new THREE.BoxGeometry(
      model.width || 1,
      model.height || 1,
      model.thickness || 0.1,
      64,
      64,
      16
    )
    const radius = Math.min(model.width || 1, model.height || 1) * 0.1
    const position = geometry.attributes.position
    const vertex = new THREE.Vector3()
    const halfWidth = (model.width || 1) / 2
    const halfHeight = (model.height || 1) / 2
    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i)
      const distFromEdgeX = halfWidth - Math.abs(vertex.x)
      const distFromEdgeY = halfHeight - Math.abs(vertex.y)
      if (distFromEdgeX < radius && distFromEdgeY < radius) {
        const cornerX = Math.sign(vertex.x) * (halfWidth - radius)
        const cornerY = Math.sign(vertex.y) * (halfHeight - radius)
        const dx = vertex.x - cornerX
        const dy = vertex.y - cornerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance > radius) {
          const angle = Math.atan2(dy, dx)
          vertex.x = cornerX + Math.cos(angle) * radius
          vertex.y = cornerY + Math.sin(angle) * radius
        }
      }
      position.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }
    position.needsUpdate = true
    geometry.computeVertexNormals()

    const material = new THREE.MeshPhongMaterial({
      color: colors[index % colors.length],
      transparent: true,
      opacity: 0.9,
      shininess: 100,
      side: THREE.DoubleSide,
    })
    const box = new THREE.Mesh(geometry, material)
    box.castShadow = true
    box.receiveShadow = true
    box.position.set(
      -(model.width || 1) / 2,
      (model.height || 1) / 2,
      currentZ
    )
    const label = createLabel(
      model.name_short || model.name,
      new THREE.Vector3(
        box.position.x,
        box.position.y + (model.height || 1) / 2 + 10,
        box.position.z
      )
    )
    currentZ += modelSpacing.value
    scene.value.add(box)
    scene.value.add(label)
    boxArr.push(box)
    labelArr.push(label)
  })

  const gridHelper = new THREE.GridHelper(2000, 100, 0x000000, 0x000000)
  gridHelper.material.opacity = 0.5
  gridHelper.material.transparent = true
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
  controls.value.minDistance = 100
  controls.value.maxDistance = 1000

  const sizeX = maxX - minX
  const sizeY = maxY - minY
  const sizeZ = maxZ - minZ
  const maxSize = Math.max(sizeX, sizeY, sizeZ)
  const cameraDistance = maxSize * 2
  camera.value.position.set(
    centerX + cameraDistance * 0.5,
    centerY + cameraDistance * 0.5,
    centerZ + cameraDistance * 0.5
  )
  camera.value.lookAt(centerX, centerY, centerZ)

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
  if (!boxes.value.length) return
  const models = [...props.models].sort((a, b) => (a.width || 0) - (b.width || 0))
  const sortedModels = models
  let currentZ = 0
  let currentX = 0
  let totalWidth = 0
  let totalDepth = 0
  sortedModels.forEach((model) => {
    if (isSideBySide.value) {
      totalWidth += (model.width || 1) + modelSpacing.value
    } else {
      totalDepth += modelSpacing.value
    }
  })
  if (isSideBySide.value) totalWidth -= modelSpacing.value
  else totalDepth -= modelSpacing.value

  boxes.value.forEach((box, index) => {
    const model = sortedModels[index]
    if (isSideBySide.value) {
      const x = currentX - totalWidth / 2
      box.position.set(x, (model.height || 1) / 2, 0)
      currentX += (model.width || 1) + modelSpacing.value
      if (labels.value[index]) {
        labels.value[index].position.set(
          x,
          box.position.y + (model.height || 1) / 2 + 10,
          0
        )
      }
    } else {
      const z = currentZ - totalDepth / 2
      box.position.set(
        -(model.width || 1) / 2,
        (model.height || 1) / 2,
        z
      )
      currentZ += modelSpacing.value
      if (labels.value[index]) {
        labels.value[index].position.set(
          box.position.x,
          box.position.y + (model.height || 1) / 2 + 10,
          z
        )
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

function toggleLayout() {
  isSideBySide.value = !isSideBySide.value
  updateModelPositions()
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
      nextTick(() => {
        setupThreeJS()
        document.body.classList.add('modal-open')
      })
    } else {
      cleanup()
      document.body.classList.remove('modal-open')
      document.body.style.overflow = ''
    }
  }
)
watch(modelSpacing, updateModelPositions)
watch(isSideBySide, updateModelPositions)

onBeforeUnmount(() => {
  cleanup()
  document.body.classList.remove('modal-open')
  document.body.style.overflow = ''
})
</script>

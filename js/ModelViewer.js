// ModelViewer Component for Vue 2
Vue.component('model-viewer', {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        models: {
            type: Array,
            default: () => []
        }
    },
    template: `
        <div class="model-viewer" v-if="show">
            <div class="model-viewer-content">
                <div class="model-viewer-header">
                    <h3>机型尺寸对比</h3>
                    <div class="controls">
                        <div class="spacing-control">
                            <label>机型间距:</label>
                            <input type="number" v-model.number="modelSpacing" min="0" max="200" step="2">
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
    `,
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            controls: null,
            boxes: [],
            labels: [],
            modelSpacing: 15,
            isSideBySide: false,
            colors: [
                0x2196F3, // Blue
                0x4CAF50, // Green
                0xFFC107, // Amber
                0xF44336, // Red
                0x9C27B0, // Purple
                0x00BCD4, // Cyan
                0xFF9800, // Orange
                0x795548, // Brown
                0x607D8B, // Blue Grey
                0xE91E63  // Pink
            ]
        }
    },
    mounted() {
        console.log('ModelViewer component mounted, show:', this.show);
        if (this.show) {
            this.$nextTick(() => {
                this.setupThreeJS();
                document.body.classList.add('modal-open');
            });
        }
    },
    watch: {
        show(newVal) {
            console.log('show prop changed:', newVal);
            if (newVal) {
                this.$nextTick(() => {
                    this.setupThreeJS();
                    document.body.classList.add('modal-open');
                });
            } else {
                this.cleanup();
                // 确保移除 modal-open 类并恢复滚动
                document.body.classList.remove('modal-open');
                // 强制恢复 body 的 overflow 样式
                document.body.style.overflow = '';
                // 使用 nextTick 确保 DOM 更新完成
                this.$nextTick(() => {
                    document.body.style.overflow = '';
                });
            }
        },
        modelSpacing() {
            this.updateModelPositions();
        },
        isSideBySide() {
            this.updateModelPositions();
        }
    },
    methods: {
        getColorHex(index) {
            return '#' + this.colors[index % this.colors.length].toString(16).padStart(6, '0');
        },
        createLabel(text, position) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 512;
            canvas.height = 128;
            
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            context.font = 'bold 48px Arial';
            context.fillStyle = '#000000';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            
            context.shadowColor = 'rgba(0, 0, 0, 0.5)';
            context.shadowBlur = 2;
            context.shadowOffsetX = 1;
            context.shadowOffsetY = 1;
            
            context.fillText(text, canvas.width / 2, canvas.height / 2);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            
            const material = new THREE.SpriteMaterial({ 
                map: texture,
                transparent: true,
                depthTest: false
            });
            
            const sprite = new THREE.Sprite(material);
            sprite.position.copy(position);
            sprite.scale.set(50, 12.5, 1);
            
            return sprite;
        },
        setupThreeJS() {
            console.log('setupThreeJS called');
            console.log('THREE available:', typeof THREE !== 'undefined');
            
            if (!this.$refs.canvasContainer) {
                console.error('canvasContainer ref not found');
                return;
            }
            
            if (typeof THREE === 'undefined') {
                console.error('THREE is not defined - waiting for library to load...');
                // Retry after a short delay
                setTimeout(() => {
                    if (typeof THREE !== 'undefined') {
                        this.setupThreeJS();
                    } else {
                        console.error('THREE.js still not available after retry');
                    }
                }, 500);
                return;
            }
            
            console.log('THREE.js version:', THREE.REVISION);
            
            if (this.models.length === 0) {
                console.warn('No models to display');
                return;
            }
            
            console.log('Models:', this.models);

            // Create scene
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(0xf0f0f0);

            // Create camera
            const containerWidth = this.$refs.canvasContainer.clientWidth;
            const containerHeight = this.$refs.canvasContainer.clientHeight;

            this.camera = new THREE.PerspectiveCamera(
                50,
                containerWidth / containerHeight,
                0.1,
                2000
            );
            this.camera.position.set(200, 400, 200);
            this.camera.lookAt(0, 100, 0);

            // Create renderer
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                precision: 'highp',
                powerPreference: 'high-performance'
            });
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(containerWidth, containerHeight);
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            this.$refs.canvasContainer.appendChild(this.renderer.domElement);

            // Add lights - reduced intensity to match iPhone
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            this.scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(1, 1, 1);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            this.scene.add(directionalLight);

            const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
            backLight.position.set(-1, -1, -1);
            backLight.castShadow = true;
            backLight.shadow.mapSize.width = 2048;
            backLight.shadow.mapSize.height = 2048;
            this.scene.add(backLight);

            const topLight = new THREE.DirectionalLight(0xffffff, 0.4);
            topLight.position.set(0, 1, 0);
            topLight.castShadow = true;
            topLight.shadow.mapSize.width = 2048;
            topLight.shadow.mapSize.height = 2048;
            this.scene.add(topLight);

            // Create iPad boxes based on model dimensions
            const models = this.models.length > 0 ? this.models : [];
            this.boxes = [];
            this.labels = [];
            
            // Sort models by width (smallest to largest)
            const sortedModels = [...models].sort((a, b) => (a.width || 0) - (b.width || 0));
            
            let currentZ = 0;

            sortedModels.forEach((model, index) => {
                // Increase segments for smoother rounded corners
                const geometry = new THREE.BoxGeometry(
                    model.width || 1,
                    model.height || 1,
                    model.thickness || 0.1,
                    64,  // Increased from 32 for smoother curves
                    64,  // Increased from 32 for smoother curves
                    16   // Increased from 8 for better depth
                );
                
                // Add rounded corners - improved algorithm for smoother curves
                const radius = Math.min(model.width || 1, model.height || 1) * 0.1;
                const position = geometry.attributes.position;
                const vertex = new THREE.Vector3();
                
                const halfWidth = (model.width || 1) / 2;
                const halfHeight = (model.height || 1) / 2;
                
                for (let i = 0; i < position.count; i++) {
                    vertex.fromBufferAttribute(position, i);
                    
                    // Only round corners in x-y plane (front and back faces)
                    // Check if vertex is near a corner
                    const distFromEdgeX = halfWidth - Math.abs(vertex.x);
                    const distFromEdgeY = halfHeight - Math.abs(vertex.y);
                    
                    if (distFromEdgeX < radius && distFromEdgeY < radius) {
                        // Vertex is in corner region
                        const cornerX = Math.sign(vertex.x) * (halfWidth - radius);
                        const cornerY = Math.sign(vertex.y) * (halfHeight - radius);
                        const dx = vertex.x - cornerX;
                        const dy = vertex.y - cornerY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance > radius) {
                            // Project vertex onto circle
                            const angle = Math.atan2(dy, dx);
                            vertex.x = cornerX + Math.cos(angle) * radius;
                            vertex.y = cornerY + Math.sin(angle) * radius;
                        }
                    }
                    
                    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
                }
                
                position.needsUpdate = true;
                geometry.computeVertexNormals();
                geometry.computeBoundingSphere();
                
                const material = new THREE.MeshPhongMaterial({
                    color: this.colors[index % this.colors.length],
                    transparent: true,
                    opacity: 0.9,
                    shininess: 100,
                    flatShading: false,
                    side: THREE.DoubleSide
                });
                const box = new THREE.Mesh(geometry, material);
                box.castShadow = true;
                box.receiveShadow = true;
                
                box.position.set(
                    -(model.width || 1) / 2,
                    (model.height || 1) / 2,
                    currentZ
                );
                
                // Add label
                const label = this.createLabel(model.name_short || model.name, new THREE.Vector3(
                    box.position.x,
                    box.position.y + (model.height || 1) / 2 + 10,
                    box.position.z
                ));
                
                currentZ += this.modelSpacing;
                
                this.scene.add(box);
                this.scene.add(label);
                this.boxes.push(box);
                this.labels.push(label);
            });

            // Add a grid helper
            const gridHelper = new THREE.GridHelper(2000, 100, 0x000000, 0x000000);
            gridHelper.material.opacity = 0.5;
            gridHelper.material.transparent = true;
            gridHelper.position.y = 0;
            this.scene.add(gridHelper);

            // Add controls - OrbitControls should be available globally from the script tag
            if (typeof THREE !== 'undefined' && THREE.OrbitControls) {
                this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
                console.log('Using THREE.OrbitControls');
            } else if (typeof OrbitControls !== 'undefined') {
                this.controls = new OrbitControls(this.camera, this.renderer.domElement);
                console.log('Using global OrbitControls');
            } else {
                console.error('OrbitControls not found. Make sure the OrbitControls script is loaded.');
                console.log('THREE:', typeof THREE);
                console.log('OrbitControls:', typeof OrbitControls);
                // Continue without controls for now - user can still see the models
                console.warn('Continuing without OrbitControls - models will be visible but not interactive');
            }
            
            // Calculate center point of all models for rotation
            let minX = Infinity, maxX = -Infinity;
            let minY = Infinity, maxY = -Infinity;
            let minZ = Infinity, maxZ = -Infinity;
            
            this.boxes.forEach(box => {
                const boxSize = new THREE.Box3().setFromObject(box);
                minX = Math.min(minX, boxSize.min.x);
                maxX = Math.max(maxX, boxSize.max.x);
                minY = Math.min(minY, boxSize.min.y);
                maxY = Math.max(maxY, boxSize.max.y);
                minZ = Math.min(minZ, boxSize.min.z);
                maxZ = Math.max(maxZ, boxSize.max.z);
            });
            
            // Calculate center
            const centerX = (minX + maxX) / 2;
            const centerY = (minY + maxY) / 2;
            const centerZ = (minZ + maxZ) / 2;
            
            console.log('Model center:', centerX, centerY, centerZ);
            
            if (this.controls) {
                this.controls.enableDamping = true;
                this.controls.dampingFactor = 0.05;
                this.controls.minDistance = 100;
                this.controls.maxDistance = 1000;
                this.controls.enableZoom = true;
                this.controls.zoomSpeed = 1.0;
                // Set target to center of all models
                this.controls.target.set(centerX, centerY, centerZ);
            }

            // Position camera to look at center with appropriate distance
            const sizeX = maxX - minX;
            const sizeY = maxY - minY;
            const sizeZ = maxZ - minZ;
            const maxSize = Math.max(sizeX, sizeY, sizeZ);
            const cameraDistance = maxSize * 2;
            
            this.camera.position.set(
                centerX + cameraDistance * 0.5,
                centerY + cameraDistance * 0.5,
                centerZ + cameraDistance * 0.5
            );
            this.camera.lookAt(centerX, centerY, centerZ);

            // Start animation loop
            this.animate();

            // Handle window resize
            window.addEventListener('resize', this.onWindowResize);
        },
        animate() {
            requestAnimationFrame(this.animate);
            if (this.renderer && this.scene && this.camera) {
                if (this.controls) {
                    this.controls.update();
                }
                this.renderer.render(this.scene, this.camera);
            }
        },
        onWindowResize() {
            if (!this.$refs.canvasContainer || !this.camera || !this.renderer) return;

            const containerWidth = this.$refs.canvasContainer.clientWidth;
            const containerHeight = this.$refs.canvasContainer.clientHeight;

            this.camera.aspect = containerWidth / containerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(containerWidth, containerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);
        },
        updateModelPositions() {
            if (!this.boxes.length) return;

            const models = this.models.length > 0 ? this.models : [];
            const sortedModels = [...models].sort((a, b) => (a.width || 0) - (b.width || 0));
            
            let currentZ = 0;
            let currentX = 0;
            let totalWidth = 0;
            let totalDepth = 0;

            // Calculate total dimensions
            sortedModels.forEach(model => {
                if (this.isSideBySide) {
                    totalWidth += (model.width || 1) + this.modelSpacing;
                } else {
                    totalDepth += this.modelSpacing;
                }
            });

            if (this.isSideBySide) {
                totalWidth -= this.modelSpacing;
            } else {
                totalDepth -= this.modelSpacing;
            }

            // Position models
            this.boxes.forEach((box, index) => {
                const model = sortedModels[index];
                if (this.isSideBySide) {
                    const x = currentX - totalWidth / 2;
                    box.position.set(
                        x,
                        (model.height || 1) / 2,
                        0
                    );
                    currentX += (model.width || 1) + this.modelSpacing;

                    if (this.labels[index]) {
                        this.labels[index].position.set(
                            x,
                            box.position.y + (model.height || 1) / 2 + 10,
                            0
                        );
                    }
                } else {
                    const z = currentZ - totalDepth / 2;
                    box.position.set(
                        -(model.width || 1) / 2,
                        (model.height || 1) / 2,
                        z
                    );
                    currentZ += this.modelSpacing;

                    if (this.labels[index]) {
                        this.labels[index].position.set(
                            box.position.x,
                            box.position.y + (model.height || 1) / 2 + 10,
                            z
                        );
                    }
                }
            });
            
            // Update rotation center after repositioning
            if (this.controls && this.boxes.length > 0) {
                let minX = Infinity, maxX = -Infinity;
                let minY = Infinity, maxY = -Infinity;
                let minZ = Infinity, maxZ = -Infinity;
                
                this.boxes.forEach(box => {
                    const boxSize = new THREE.Box3().setFromObject(box);
                    minX = Math.min(minX, boxSize.min.x);
                    maxX = Math.max(maxX, boxSize.max.x);
                    minY = Math.min(minY, boxSize.min.y);
                    maxY = Math.max(maxY, boxSize.max.y);
                    minZ = Math.min(minZ, boxSize.min.z);
                    maxZ = Math.max(maxZ, boxSize.max.z);
                });
                
                const centerX = (minX + maxX) / 2;
                const centerY = (minY + maxY) / 2;
                const centerZ = (minZ + maxZ) / 2;
                
                this.controls.target.set(centerX, centerY, centerZ);
            }
        },
        toggleLayout() {
            this.isSideBySide = !this.isSideBySide;
            this.updateModelPositions();
        },
        setCameraAngle(angle) {
            if (!this.camera || !this.controls || !this.boxes.length) return;

            // Calculate center point
            let minX = Infinity, maxX = -Infinity;
            let minY = Infinity, maxY = -Infinity;
            let minZ = Infinity, maxZ = -Infinity;
            
            this.boxes.forEach(box => {
                const boxSize = new THREE.Box3().setFromObject(box);
                minX = Math.min(minX, boxSize.min.x);
                maxX = Math.max(maxX, boxSize.max.x);
                minY = Math.min(minY, boxSize.min.y);
                maxY = Math.max(maxY, boxSize.max.y);
                minZ = Math.min(minZ, boxSize.min.z);
                maxZ = Math.max(maxZ, boxSize.max.z);
            });
            
            const centerX = (minX + maxX) / 2;
            const centerY = (minY + maxY) / 2;
            const centerZ = (minZ + maxZ) / 2;
            
            const sizeX = maxX - minX;
            const sizeY = maxY - minY;
            const sizeZ = maxZ - minZ;
            const maxSize = Math.max(sizeX, sizeY, sizeZ);
            const cameraDistance = maxSize * 2;

            const positions = {
                front: { x: centerX, y: centerY, z: centerZ + cameraDistance },
                side: { x: centerX + cameraDistance, y: centerY, z: centerZ },
                top: { x: centerX, y: centerY + cameraDistance, z: centerZ },
                iso: { x: centerX + cameraDistance * 0.5, y: centerY + cameraDistance * 0.5, z: centerZ + cameraDistance * 0.5 }
            };

            const pos = positions[angle];
            if (!pos) return;

            const duration = 1000;
            const startPos = this.camera.position.clone();
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const easeProgress = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                this.camera.position.lerpVectors(startPos, new THREE.Vector3(pos.x, pos.y, pos.z), easeProgress);
                this.controls.target.set(centerX, centerY, centerZ);
                this.controls.update();

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        },
        cleanup() {
            window.removeEventListener('resize', this.onWindowResize);
            if (this.renderer) {
                if (this.renderer.domElement && this.renderer.domElement.parentNode) {
                    this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
                }
                this.renderer.dispose();
            }
            if (this.scene) {
                while(this.scene.children.length > 0) {
                    this.scene.remove(this.scene.children[0]);
                }
            }
            this.scene = null;
            this.camera = null;
            this.renderer = null;
            this.controls = null;
            this.boxes = [];
            this.labels = [];
        }
    },
    beforeDestroy() {
        this.cleanup();
        // 确保移除 modal-open 类并恢复滚动
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
    }
});

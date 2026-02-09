import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/portal': {
        target: 'http://kylebing.cn',
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://kylebing.cn',
        ws: true,
      },
    },
  },
  publicDir: 'public',
})

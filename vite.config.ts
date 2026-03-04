import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import zipPack from 'vite-plugin-zip-pack'
import { resolve } from 'path'

const timeStringNow = new Date().toISOString().slice(0, 19).replace('T', '-').replace(/:/g, '')

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    zipPack({
      inDir: 'dist',
      outDir: 'archive',
      outFileName: `ipad-${timeStringNow}.zip`,
      pathPrefix: '',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
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

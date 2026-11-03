import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Three's core stays in its own cacheable runtime chunk.
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        onlyExplicitManualChunks: true,
        manualChunks(id) {
          if (!id.includes('/node_modules/')) return
          if (id.includes('/node_modules/three/')) return 'three'
          if (id.includes('/@react-three/') || id.includes('/node_modules/postprocessing/')) return 'rendering'
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'
          if (/\/node_modules\/(dialkit|motion|framer-motion|motion-dom|motion-utils)\//.test(id)) return 'dialkit'
        },
      },
    },
  },
})

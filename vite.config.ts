import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // Split the heavy animation libraries out of the entry chunk so the
        // landing page paints before GSAP/OGL finish downloading.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('/ogl/')) return 'ogl'
          if (id.includes('motion') || id.includes('framer')) return 'motion'
          if (id.includes('react-router') || id.includes('/react-dom/') || id.includes('/react/'))
            return 'react'
        },
      },
    },
  },
})

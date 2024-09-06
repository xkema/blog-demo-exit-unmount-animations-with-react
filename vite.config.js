import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blog-demo-exit-unmount-animations-with-react/',
  build: {
    outDir: 'docs',
  },
})

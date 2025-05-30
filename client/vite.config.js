import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    },
    build: {
      outDir: '../server/public', // Change this to match your Express static files directory
      emptyOutDir: true,
    }
  
  }
})
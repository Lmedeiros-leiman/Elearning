import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, "./src/pages/")
const outDir = resolve(__dirname, '../build')
const publicDir = resolve(__dirname, "public")

// https://vite.dev/config/
export default defineConfig({
  root,
  base: "/assets/",
  publicDir,
  plugins: [react()],
  build: {
    outDir,
    copyPublicDir: true,
    emptyOutDir: true,
    rollupOptions: {
      
      input: {
        main: resolve(root, 'index.html'),
        auth: resolve(root, 'auth', 'index.html')
      }
    }
  }
})

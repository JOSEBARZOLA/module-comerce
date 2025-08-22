// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Importar con "@/..."
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 👇import global de variables
        // additionalData: `@use "@/assets/sass/variables" as *;`
      },
    },
  },
})
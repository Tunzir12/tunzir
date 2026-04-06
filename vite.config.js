import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  base: '/tunzira/', // GitHub repository name
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5174,
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },

      // { find: "@", replacement: "/src" },
    ],
  },
  server: {
    port: 3000,
  },
})

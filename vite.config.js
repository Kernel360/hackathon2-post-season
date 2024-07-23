import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          kakaoApiKey: process.env.VITE_KAKAO_API_KEY,
        },
      },
    }),
  ],
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

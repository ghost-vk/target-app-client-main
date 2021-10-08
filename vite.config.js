import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig(({ command, mode }) => {
  let serverPath, isDev
  if (command === 'serve') {
    serverPath = 'http://localhost:8080'
    isDev = true
  } else {
    serverPath = 'http://anastasi-target.ru'
    isDev = false
  }

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: true,
    },
    define: {
      SERVER_PATH: JSON.stringify(serverPath),
      IS_PRODUCTION: !isDev,
    },
  }
})

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let serverPath
  if (command === 'serve') {
    serverPath = 'http://localhost:8080'
  } else {
    serverPath = 'https://anastasi-target.ru'
  }

  return  {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: true
    },
    define: {
      SERVER_PATH: JSON.stringify(serverPath)
    }
  }
});

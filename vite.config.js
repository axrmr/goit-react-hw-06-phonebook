import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/goit-react-hw-06-phonebook/',
  plugins: [react()],
  resolve: {
    alias: {
      '~': '/src/',
      components: '/src/components',
      helpers: '/src/helpers',
      store: '/src/store',
    },
  },
})

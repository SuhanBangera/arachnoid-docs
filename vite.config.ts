import { defineConfig } from 'vite';
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'app',
        replacement: path.resolve(__dirname, 'src', 'app'),
      },
      {
        find: 'store',
        replacement: path.resolve(__dirname, 'src', 'app', 'store'),
      },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, 'src', 'assets'),
      },
      {
        find: 'lib',
        replacement: path.resolve(__dirname, 'src', 'lib'),
      },
    ],
  },
})

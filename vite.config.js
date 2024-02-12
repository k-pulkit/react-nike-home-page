import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-nike-home-page/",
  plugins: [react()],
  server: {
    host: true
  }
})

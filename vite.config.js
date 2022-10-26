import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  globals: true,
  test: {
    environment: 'happy-dom'
  }
})
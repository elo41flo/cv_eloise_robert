import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cv_eloise_robert/' // <-- remplace par le nom exact de ton repo GitHub
})

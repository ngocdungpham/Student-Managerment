import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // THÊM DÒNG NÀY VÀO:
  base: "/Student-Management/", 
})
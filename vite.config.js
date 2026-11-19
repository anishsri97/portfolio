import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the built site work on any static host
// (GitHub Pages project sites, Netlify, Vercel, Cloudflare Pages).
export default defineConfig({
  base: './',
  plugins: [react()],
})

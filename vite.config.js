import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// When deploying to GitHub Pages the site is served from /<repo>/, so the base
// path is set from an env flag in the deploy workflow. Local dev/preview and
// Vercel keep the root base.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})

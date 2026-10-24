import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps every asset path relative, so the built site works on
// Netlify, Vercel, GitHub Pages sub-paths, or opened from any folder.
export default defineConfig({
  base: './',
  plugins: [react()],
});

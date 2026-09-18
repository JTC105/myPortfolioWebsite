import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myPortfolioWebsite/',
  plugins: [react()],
  server: {
    port: 3000, // Specify the port for the development server
  },
  build: {
    outDir: 'docs', // Specify the output directory for the build
  },
  resolve: {
    alias: {
      '@': '/src', // Create an alias for easier imports
    },
  },
});
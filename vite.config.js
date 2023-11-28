import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pre-entrega-1-react/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['firebase/firestore', 'firebase/app'],
    },
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
});

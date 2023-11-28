import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pre-entrega-1-react/",
  plugins: [react()],
  optimizeDeps: {
    include: [/\.jsx?$/, /\.tsx?$/, /\.vue$/, /\.md$/ ,'react-router-dom'],
    
  },
});

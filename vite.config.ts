import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'sky_dragon', // Using a standard name for the repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { localhost } from './src/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: localhost
  }
});

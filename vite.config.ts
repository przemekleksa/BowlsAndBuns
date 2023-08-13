import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const PORT = parseInt(process.env.VITE_PORT || '2137', 10);
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/styles/_variables.scss" as variables;
          @use "./src/styles/_classes.scss" as classes;
          @use "./src/styles/_typography.scss" as typography;
          @use "./src/styles/_rwd.scss" as rwd;
          @use "./src/styles/_colors.scss" as colors;
        `,
      },
    },
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': resolve(__dirname, './src'),
    },
  },
});

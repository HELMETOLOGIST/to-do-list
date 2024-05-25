import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // ensure this is 'build' or change your deploy script accordingly
  },
  base: '/to-do-list/' // replace 'to-do-list' with your actual repository name
});

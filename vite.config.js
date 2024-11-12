import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NFT/', // yahan 'NFT' aapke GitHub repository ka name hona chahiye
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr';
import svgrTemplate from './src/utils/svgr-template';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets')
        },
    },
})

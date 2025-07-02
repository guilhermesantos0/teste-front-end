import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: "default",
                ref: true,
                svgo: false,
                titleProp: true,
                icon: true,
                expandProps: "end",
                replaceAttrValues: {
                    "#000": "currentColor",
                },
            },
            include: "**/*.svg",
        }),
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets')
        },
    },
})


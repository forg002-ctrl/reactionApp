import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 8000,
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),

        quasar({
            sassVariables: 'src/quasar-variables.sass',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        dedupe: ['ajv', 'ajv-errors', 'ajv-formats', 'vue'],
    },
});

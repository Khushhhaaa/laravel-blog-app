import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0',                   // ✅ Allows external access (needed for Gitpod)
        strictPort: true,                  // ✅ Fixes port assignment
        allowedHosts: ['.gitpod.io'],      // ✅ Prevents "host not allowed" error
    },
});

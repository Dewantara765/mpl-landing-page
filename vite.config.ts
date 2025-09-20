import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  server: {
        host: '0.0.0.0', // Listen on all network interfaces
        port: 3000,
      },
  plugins: [tailwindcss(),svelte()],
})

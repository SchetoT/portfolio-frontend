// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"
// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
          rollupOptions: {
            external: ['axios'],
    integrations: [tailwind(),],

});

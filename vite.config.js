import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import {router} from 'sv-router/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		router(),
		tailwindcss()
	],
  build: {
    assetsInLineLimit: 1024 * 1024,
     chunkSizeWarningLimit: 1600,
  }, 
	resolve: {
    alias: {
			$hero: path.resolve('./src/Hero'),
      $component: path.resolve('./src/Components'),
      $lib: path.resolve('./src/lib'),
      $utils: path.resolve('./src/utils'),
    },
  },
})

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
//import adapter from '@sveltejs/adapter-vercel'
import path from 'path';
/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		alias: {
			$hero: path.resolve('./src/Hero/'),
			$component: path.resolve('./src/Components/'),
			$lib: path.resolve('./src/lib/'),		
			$utils: path.resolve('./src/utils/'),		
      },
  },

}

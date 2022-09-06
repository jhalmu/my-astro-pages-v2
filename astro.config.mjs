import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(
	{
		site: 'https://stackoverlove.me',
		sitemap: true
	},
	{
		vite: {
			ssr: {
				external: ['svgo']
			}
		}
	}
);

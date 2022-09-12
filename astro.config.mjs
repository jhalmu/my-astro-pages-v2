import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(
	{
		sitemap: true,
		server: { port: 3000 }
	},
	{
		vite: {
			ssr: {
				external: ['svgo']
			}
		}
	}
);

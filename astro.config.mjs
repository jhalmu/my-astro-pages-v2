import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(
	{
		sitemap: true,
		listen: "0.0.0.0:3000"
	},
	{
		vite: {
			ssr: {
				external: ['svgo']
			}
		}
	}
);

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://astroship-pro.web3templates.com',
  image: {
    service: sharpImageService(),
    domains: ['source.unsplash.com', 'images.unsplash.com'],
  },
  integrations: [tailwind(), mdx(), sitemap(), react()],
  output: 'server',
  adapter: vercel(),
  vite: {
    define: {
      'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY),
    },
  },
  build: {
    rollupOptions: {
      external: ['@components/ui/button.astro'],
    },
  },
});

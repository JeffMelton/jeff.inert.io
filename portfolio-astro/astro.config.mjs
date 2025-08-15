import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  site: 'https://jeff.inert.io',
  build: {
    assets: '_astro'
  }
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kde.fr',
  output: 'static',
  build: {
    format: 'directory',
  },
});

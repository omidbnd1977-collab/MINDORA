import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This repository will be published at https://<username>.github.io/MINDORA/
  base: '/MINDORA/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        services: 'services.html',
        approach: 'approach.html',
        articles: 'articles.html',
        contact: 'contact.html',
      },
    },
  },
});

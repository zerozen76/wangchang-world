import { defineConfig } from 'vite';

export default defineConfig({
  base: '/wangchang-world/',
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    allowedHosts: true
  }
});

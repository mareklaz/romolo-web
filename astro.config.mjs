import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración de Astro con integración de TailwindCSS
export default defineConfig({
  integrations: [tailwind()],
});

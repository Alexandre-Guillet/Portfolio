// =====================================================
// CONFIGURATION ASTRO
// =====================================================
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Adresse du site en ligne (utile pour le référencement)
  site: 'https://portfolio.alexandreguillet.fr',

  // Tailwind CSS v4 s'installe comme un plugin de Vite (l'outil utilisé par Astro).
  // DaisyUI est chargé dans src/styles/global.css.
  vite: {
    plugins: [tailwindcss()],
  },
})

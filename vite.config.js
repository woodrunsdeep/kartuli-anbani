import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import i18nHotReload from './vite.plugin.i18nHotReload';
// import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [
    react(),
    i18nHotReload(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
      },
      manifest: {
        name: 'Kartuli Anbani',
        short_name: 'Kartuli',
        description: 'Georgian language learning app',
        theme_color: '#da291c',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    visualizer(),
  ],
});

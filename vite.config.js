import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import i18nHotReload from './vite.plugin.i18nHotReload';
// import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), i18nHotReload()],
});

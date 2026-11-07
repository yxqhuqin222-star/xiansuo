import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({define:{'process.env.NODE_ENV':'"production"'},plugins:[tailwindcss()],build:{outDir:'web/dist',emptyOutDir:true,lib:{entry:'frontend/controls.jsx',formats:['es'],fileName:()=> 'ui.js'},rollupOptions:{output:{assetFileNames:'ui.[ext]'}}}});

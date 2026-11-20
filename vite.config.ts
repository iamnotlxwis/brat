import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({plugins:[react(),VitePWA({registerType:"autoUpdate",manifest:{name:"BRAT Studio",short_name:"BRAT",description:"Offline-first BRAT artwork editor",start_url:"/",display:"standalone",background_color:"#8ace00",theme_color:"#8ace00",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"any maskable"}]},workbox:{globPatterns:["**/*.{js,css,html,svg,png,woff,woff2}"]}})]});
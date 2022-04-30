import { defineConfig } from "vite";
import reactSvgPlugin from "vite-plugin-react-svg";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/typemaster-keyboard-challenge/",
  plugins: [react()],
});

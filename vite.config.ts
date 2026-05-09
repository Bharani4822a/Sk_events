import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "src/server.ts" },
    }),
    tsconfigPaths(),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

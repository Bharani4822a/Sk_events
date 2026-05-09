// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detect if we are building for Netlify
const isNetlify = process.env.NITRO_PRESET === "netlify" || process.env.NETLIFY === "true";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Only apply cloudflare specific logic if not on netlify
    ...(isNetlify ? { 
      output: {
        dir: ".output",
        publicDir: ".output/public"
      }
    } : {})
  },
});

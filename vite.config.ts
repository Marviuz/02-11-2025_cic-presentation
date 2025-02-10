import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import { transformerNotationDiff } from "@shikijs/transformers";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [
          [
            rehypeShiki,
            {
              lang: ["js", "html", "css"],
              theme: "github-dark-default",
              transformers: [transformerNotationDiff({ matchAlgorithm: "v3" })],
            },
          ],
        ],
      }),
    },
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

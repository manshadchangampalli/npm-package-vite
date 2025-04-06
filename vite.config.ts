import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: path.resolve(__dirname, "src"),
      tsconfigPath: path.resolve(__dirname, "tsconfig.app.json"), // Use app config directly
      include: ["src/**/*.ts", "src/**/*.tsx"], // Include all TS/TSX files
      rollupTypes: true, // Bundle types
      outDir: "dist/types", // Match your package.json types field
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactAdminPackageV1",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});

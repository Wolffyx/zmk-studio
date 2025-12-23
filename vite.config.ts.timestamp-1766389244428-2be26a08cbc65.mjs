// vite.config.ts
import { defineConfig } from "file:///D:/Projects/Typescript/React/zmk-studio-original/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projects/Typescript/React/zmk-studio-original/node_modules/@vitejs/plugin-react-swc/index.mjs";
import tailwindcss from "file:///D:/Projects/Typescript/React/zmk-studio-original/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Projects\\Typescript\\React\\zmk-studio-original";
var vite_config_default = defineConfig({
  base: "/zmk-studio/",
  //todo remove it after finishing refactoring
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true
  },
  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: [
    "VITE_",
    "TAURI_PLATFORM",
    "TAURI_ARCH",
    "TAURI_FAMILY",
    "TAURI_PLATFORM_VERSION",
    "TAURI_PLATFORM_TYPE",
    "TAURI_DEBUG"
  ],
  build: {
    chunkSizeWarningLimit: 1e3,
    // todo remove after refactoring
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    // include download page
    rollupOptions: {
      input: {
        main: "./index.html",
        download: "./download.html"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxUeXBlc2NyaXB0XFxcXFJlYWN0XFxcXHptay1zdHVkaW8tb3JpZ2luYWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXFR5cGVzY3JpcHRcXFxcUmVhY3RcXFxcem1rLXN0dWRpby1vcmlnaW5hbFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvVHlwZXNjcmlwdC9SZWFjdC96bWstc3R1ZGlvLW9yaWdpbmFsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBiYXNlOiAnL3ptay1zdHVkaW8vJywgLy90b2RvIHJlbW92ZSBpdCBhZnRlciBmaW5pc2hpbmcgcmVmYWN0b3JpbmdcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWFjdCgpLCB0YWlsd2luZGNzcygpLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIHByZXZlbnQgdml0ZSBmcm9tIG9ic2N1cmluZyBydXN0IGVycm9yc1xyXG4gICAgY2xlYXJTY3JlZW46IGZhbHNlLFxyXG4gICAgLy8gVGF1cmkgZXhwZWN0cyBhIGZpeGVkIHBvcnQsIGZhaWwgaWYgdGhhdCBwb3J0IGlzIG5vdCBhdmFpbGFibGVcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHN0cmljdFBvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gdG8gYWNjZXNzIHRoZSBUYXVyaSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBDTEkgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB0YXJnZXRcclxuICAgIGVudlByZWZpeDogW1xyXG4gICAgICAgICdWSVRFXycsXHJcbiAgICAgICAgJ1RBVVJJX1BMQVRGT1JNJyxcclxuICAgICAgICAnVEFVUklfQVJDSCcsXHJcbiAgICAgICAgJ1RBVVJJX0ZBTUlMWScsXHJcbiAgICAgICAgJ1RBVVJJX1BMQVRGT1JNX1ZFUlNJT04nLFxyXG4gICAgICAgICdUQVVSSV9QTEFURk9STV9UWVBFJyxcclxuICAgICAgICAnVEFVUklfREVCVUcnLFxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLCAvLyB0b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmluZ1xyXG4gICAgICAgIC8vIFRhdXJpIHVzZXMgQ2hyb21pdW0gb24gV2luZG93cyBhbmQgV2ViS2l0IG9uIG1hY09TIGFuZCBMaW51eFxyXG4gICAgICAgIHRhcmdldDpcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuVEFVUklfUExBVEZPUk0gPT0gJ3dpbmRvd3MnID8gJ2Nocm9tZTEwNScgOiAnc2FmYXJpMTMnLFxyXG4gICAgICAgIC8vIGRvbid0IG1pbmlmeSBmb3IgZGVidWcgYnVpbGRzXHJcbiAgICAgICAgbWluaWZ5OiAhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUcgPyAnZXNidWlsZCcgOiBmYWxzZSxcclxuICAgICAgICAvLyBwcm9kdWNlIHNvdXJjZW1hcHMgZm9yIGRlYnVnIGJ1aWxkc1xyXG4gICAgICAgIHNvdXJjZW1hcDogISFwcm9jZXNzLmVudi5UQVVSSV9ERUJVRyxcclxuICAgICAgICAvLyBpbmNsdWRlIGRvd25sb2FkIHBhZ2VcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICBtYWluOiAnLi9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkOiAnLi9kb3dubG9hZC5odG1sJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VSxTQUFTLG9CQUFvQjtBQUN6VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQUcsWUFBWTtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQUE7QUFBQSxFQUVBLGFBQWE7QUFBQTtBQUFBLEVBRWIsUUFBUTtBQUFBLElBQ0osWUFBWTtBQUFBLEVBQ2hCO0FBQUE7QUFBQSxFQUVBLFdBQVc7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsdUJBQXVCO0FBQUE7QUFBQTtBQUFBLElBRXZCLFFBQ0ksUUFBUSxJQUFJLGtCQUFrQixZQUFZLGNBQWM7QUFBQTtBQUFBLElBRTVELFFBQVEsQ0FBQyxRQUFRLElBQUksY0FBYyxZQUFZO0FBQUE7QUFBQSxJQUUvQyxXQUFXLENBQUMsQ0FBQyxRQUFRLElBQUk7QUFBQTtBQUFBLElBRXpCLGVBQWU7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNILE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNkO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

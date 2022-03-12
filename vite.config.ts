import { defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { getThemeVariables } from "ant-design-vue/dist/theme";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    define: {
      "process.env": {
        //   VUE_APP_API_HOST: JSON.stringify(env.VUE_APP_API_HOST),
        //   VITE_APP_API_BASE_URL: JSON.stringify(env.VITE_APP_API_BASE_URL),
      },
    },
    envPrefix: ["APP_"],
    plugins: [vue()],
    build: {
      cssCodeSplit: false,
    },
    resolve: {
      alias: {
        "~@": path.join(__dirname, "./src"),
        "@": path.join(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      include: [
        "ant-design-vue/es/locale/en_US",
        "ant-design-vue/es/locale/zh_CN",
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            ...getThemeVariables(),
          },
          javascriptEnabled: true,
        },
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.APP_API_HOST,
          changeOrigin: true,
        },
      },
    },
  };
});

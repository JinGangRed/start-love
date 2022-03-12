import { Button, ConfigProvider } from "ant-design-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import locale from "./locales";

const app = createApp(App);
console.log(
  import.meta.env.VITE_APP_API_HOST,
  import.meta.env.VITE_APP_PUBLIC_PATH,
  import.meta.env
);
console.log("============");
app
  .use(router)
  .use(locale as any)
  .use(Button)
  .use(ConfigProvider);
app.mount("#app");

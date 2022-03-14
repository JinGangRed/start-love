import { Button, ConfigProvider } from "ant-design-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import locale from "./locales";
import store from "./store";

const app = createApp(App);
app
  .use(router)
  .use(store)
  .use(locale as any)
  .use(Button)
  .use(ConfigProvider);
app.mount("#app");

import "ant-design-vue/dist/antd.less";
import { Button, ConfigProvider, Layout } from "ant-design-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import locale from "./locales";
import store from "./store";
import "./app.less";
const app = createApp(App);
app
  .use(router)
  .use(store)
  .use(locale as any)
  .use(ConfigProvider)
  .use(Button)
  .use(Layout);
app.mount("#app");

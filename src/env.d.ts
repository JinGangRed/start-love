/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly APP_TITLE: string;
  readonly APP_PUBLIC_PATH: string;
  readonly APP_API_HOST: string;
  readonly APP_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

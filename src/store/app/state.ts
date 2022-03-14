import { AppState } from "@/store/app/typing";

export const state: AppState = {
  lang: "zh-CN",
  device: "desktop",
  title: import.meta.env.APP_TITLE,
};

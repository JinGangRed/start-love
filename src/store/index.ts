import { createLogger, createStore } from "vuex";
import { app } from "@/store/app";
const isDebug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    app,
  },
  strict: isDebug,
  plugins: isDebug ? [createLogger()] : [],
});

import { createStore } from "vuex";
const isDebug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {},
  strict: isDebug,
});

import { GetterTree } from "vuex";
import { RootState } from "../root-state";
import { AppState } from "@/store/app/typing";

export const getters: GetterTree<AppState, RootState> = {
  lang: (state) => state.lang,
  title: (state) => state.title,
  device: (state) => state.device,
};

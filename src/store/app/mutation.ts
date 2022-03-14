import { MutationTree } from "vuex";
import { AppState, SET_LANG } from "@/store/app/typing";

export const mutations: MutationTree<AppState> = {
  [SET_LANG](state: AppState, lang: string): void {
    state.lang = lang;
  },
};

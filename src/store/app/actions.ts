import { loadLanguageAsync } from "@/locales";
import localStorage from "@/utils/local-storage";
import { ActionTree } from "vuex";
import { RootState } from "@/store/root-state";
import { STORAGE_LANG_KEY } from "@/store/typing";
import { AppState, SET_LANG } from "@/store/app/typing";

export const actions: ActionTree<AppState, RootState> = {
  [SET_LANG]({ commit }, lang: string) {
    return new Promise<void>((resolve, reject) => {
      loadLanguageAsync(lang)
        .then(() => {
          commit(SET_LANG, lang);
          localStorage.set(STORAGE_LANG_KEY, lang);
          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};

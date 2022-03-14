import { ActionTree } from "vuex";
import { RootState } from "@/store/root-state";
import {
  GENERATE_ROUTES,
  GET_INFO,
  SET_INFO,
  SET_TOKEN,
  UserState,
} from "@/store/user/typing";
import { getCurrentUser } from "@/api/user";
import { UserInfo } from "@/api/user/typing";

export const actions: ActionTree<UserState, RootState> = {
  [SET_TOKEN]({ commit }, accesstoken) {
    return new Promise<void>((resolve, reject) => {});
  },
  [GET_INFO]({ commit }) {
    return new Promise((resolve, reject) => {
      getCurrentUser()
        .then((res: UserInfo) => {
          commit(SET_INFO, res);
          resolve(res);
        })
        .catch((err) => {
          commit(SET_TOKEN, null);
          reject(err);
        });
    });
    // [GENERATE_ROUTES]({commit})
  },
};

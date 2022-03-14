import { GetterTree } from "vuex";
import { RootState } from "@/store/root-state";
import { UserState } from "./typing";

export const getters: GetterTree<UserState, RootState> = {
  role: (state) => state.role,
  info: (state) => state.extra,
  username: (state) => state.nickname,
  token: (state) => state.token,
  currentUser: (state) => state,
  allowRouters: (state) => state.allowRouters,
};

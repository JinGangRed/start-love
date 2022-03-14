import { Module } from "vuex";
import { RootState } from "@/store/root-state";
import { AppState } from "@/store/app/typing";
import { mutations } from "./mutation";
import { actions } from "./actions";
import { getters } from "./getter";
import { state } from "./state";

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

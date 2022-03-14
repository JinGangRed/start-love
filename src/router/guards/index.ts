import router from "@/router";
import { STORAGE_TOKEN_KEY } from "@/store/typing";
import localStorage from "@/utils/local-storage";
import { loginRoutePath, whiteList } from "@/router/meta";
import store from "@/store";

router.beforeEach(async (to) => {
  const userToken = localStorage.get(STORAGE_TOKEN_KEY);
  if (!userToken) {
    if (whiteList.includes(to.name as string)) {
      return true;
    }
    if (to.fullPath != loginRoutePath) {
      return {
        path: loginRoutePath,
        replace: true,
      };
    }
    return to;
  }

  if (store.getters[""] && store.getters[""].length > 0) {
  } else {
  }
});

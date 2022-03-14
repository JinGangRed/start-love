import router from "@/router";
import { STORAGE_TOKEN_KEY } from "@/store/typing";
import localStorage from "@/utils/local-storage";
import { loginRoutePath, whiteList } from "@/router/meta";
import store from "@/store";
import { GENERATE_ROUTES, GET_INFO } from "@/store/user/typing";

const getRootPath = (path: string): string => {
  const paths = path.split("/");
  return paths.length > 2 ? paths[1] : "";
};

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
  let allowRouters = store.getters["user/allowRouters"];
  if (allowRouters && allowRouters.length > 0) {
    return true;
  } else {
    const userInfo = store.dispatch(`user/${GET_INFO}`);
    allowRouters = store.dispatch(`user/${GENERATE_ROUTES}`, userInfo);
    if (allowRouters) {
      return true;
    }
  }
  return false;
});

import { MenuDataItem } from "@/router/typing";
import RouteView from "@/layouts/route-view.vue";

export const routes: MenuDataItem[] = [
  {
    name: "account",
    path: "/account",
    meta: {
      title: "menus.account.title",
      icon: "",
      authority: [""],
    },
    component: RouteView,
  },
];
export default routes;

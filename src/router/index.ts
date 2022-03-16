import { createRouter, createWebHistory } from "vue-router";
import { MenuDataItem } from "./typing";
import UserLayout from "@/layouts/user-layout.vue";
import Layout from "@/layouts/index.vue";
const staticRoutes: MenuDataItem[] = [
  {
    path: "/user",
    name: "user",
    meta: {
      hideInMenu: true,
      title: "pages.user.layout.title",
    },
    component: UserLayout,
    children: [
      {
        path: "/account/login",
        name: "account-login",
        meta: {
          hideInMenu: true,
          title: "pages.account.login.tab",
        },
        component: () => import("@/components/HelloWorld.vue"),
      },
      {
        path: "/account/register",
        name: "account-register",
        meta: {
          hideInMenu: true,
          title: "pages.account.register.tab",
        },
        component: () => import("@/components/HelloWorld.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "home",
    meta: {
      title: "pages.home",
      hideInMenu: true,
    },
    component: Layout,
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/components/HelloWorld.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.APP_PUBLIC_PATH),
  routes: staticRoutes,
});

export default router;

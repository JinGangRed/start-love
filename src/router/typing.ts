import { VNodeChild } from "vue";
import {
  RouteComponent,
  RouteMeta,
  RouteRecordRaw,
  RouteRecordRedirectOption,
} from "vue-router";

export interface MenuRouteMeta {
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string | VNodeChild | JSX.Element;
}

export type MenuDataItem = {
  path: string;
  name?: string;
  children?: MenuDataItem[];
  meta?: MenuRouteMeta & RouteMeta;
  redirect?: RouteRecordRedirectOption;
  component?: RouteComponent | Promise<RouteComponent>;
} & RouteRecordRaw;

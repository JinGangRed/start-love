export const SET_TOKEN = "SET_TOKEN";
export const SET_ROLE = "SET_ROLE";
export const SET_INFO = "SET_INFO";
export const SET_ROUTERS = "SET_ROUTERS";
export const RESET_CURRENT_USER = "RESET_CURRENT_USER";
export const GET_INFO = "GET_INFO";
export const GENERATE_ROUTES = "GenerateRoutes";

export enum Action {
  ADD = "add",
  DELETE = "delete",
  UPDATE = "update",
  QUERY = "query",
  IMPORT = "import",
  EXPORT = "export",
}

export interface Permission {
  id: string | number;
  roleId: string | number;
  name: string;
  label?: string;
  actions?: Action[];
}

export interface Role {
  id: string | number;
  name: string;
  permissions?: Permission[];
}

export interface UserState {
  token?: string;
  username: string;
  nickname: string;
  avatar: string;
  role?: Role;
  allowRouters: [];
  extra: {
    [key: string]: any;
  };
  [key: string]: any;
}

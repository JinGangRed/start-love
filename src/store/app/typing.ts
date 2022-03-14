export interface AppState {
  title: string;
  lang: string;
  device: "Mobile" | "Desktop" | string;
}

export const SET_LANG = "SET_LANG";
export const SET_DEVICE = "SET_DEVICE";

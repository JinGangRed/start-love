import { UserInfo } from "./typing";

export function getCurrentUser(): Promise<UserInfo> {
  return new Promise<UserInfo>((resolve, reject) => {});
}

export interface UserInfo {
  id: string | number;
  address: string;
  avatar: string;
  country: string;
  email: string;
  group: string;
  name: string;
  phone: string;
  signature: string;
  role: {
    [key: string]: any;
  };
}

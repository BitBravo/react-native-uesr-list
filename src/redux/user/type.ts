export type UserInfo = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
};

export type UserState = {
  entities: UserInfo[];
  loading: boolean;
  isLast: boolean;
};

export type Payload = {
  pageNum?: number;
  errorText?: string;
};

export interface UserAction {
  type: string;
  payload: UserInfo[] | Payload | any;
}

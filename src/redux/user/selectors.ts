import {UserState} from './type';
type AppSate = {
  users: UserState;
};

export const getUserList = ({users}: AppSate) => users.entities;

export const getLoading = ({users}: AppSate) => users.loading;

export const checkIsLast = ({users}: AppSate) => users.isLast;

export const getUserState = ({users}: AppSate) => users;

import {UserAction, UserInfo} from './type';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsersRequest = (pageNum: number): UserAction => ({
  type: GET_USERS_REQUEST,
  payload: {pageNum},
});

export const getUsersSuccess = (payload: UserInfo[]): UserAction => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailure = (payload: Error): UserAction => ({
  type: GET_USERS_FAILURE,
  payload,
});

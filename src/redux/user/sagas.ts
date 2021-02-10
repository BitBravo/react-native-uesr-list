import {takeEvery, call, put} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/core';
import {GET_USERS_SUCCESS, GET_USERS_REQUEST} from './actions';
import {getUsers as getUsersAPI} from './service';
import {UserAction} from './type';

export function* getUsers({payload}: UserAction): SagaIterator {
  const users = yield call(getUsersAPI, payload.pageNum);
  yield put({
    type: GET_USERS_SUCCESS,
    payload: users,
  });
}

export function* userSaga(): SagaIterator {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

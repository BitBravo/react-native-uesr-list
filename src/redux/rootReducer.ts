import {combineReducers} from 'redux';
import userReducer from './user/reducer';

const createReducer = () =>
  combineReducers({
    users: userReducer,
  });

export default createReducer;

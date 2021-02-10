import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./actions";
import { UserAction, UserState } from "./type";

const initialState: UserState = {
  entities: [],
  loading: false,
  isLast: false,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        entities: state.isLast
          ? state.entities
          : [...state.entities, ...action.payload],
        loading: false,
        isLast: action.payload.length > 0 ? false : true,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        entities: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;

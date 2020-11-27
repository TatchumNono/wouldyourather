import {
  GET_USERS_SUCCESS,
  GET_USERS_FETCH,
  LOGIN_USER,
  LOGOUT_USER,
} from "./userType";

const initialState = {
  authedUser: "",
  loading: false,
  users: null,
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case GET_USERS_FETCH:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER:
      return {
        ...state,
        authedUser: payload.id
        isLoggedIn: true,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

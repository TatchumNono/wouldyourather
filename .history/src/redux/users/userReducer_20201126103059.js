import { GET_USERS_SUCCESS, GET_USERS_FETCH, LOGIN_USER } from "./userType";

const initialState = {
  loading: false,
  users: null,
  is
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

    default:
      return state;
  }
};

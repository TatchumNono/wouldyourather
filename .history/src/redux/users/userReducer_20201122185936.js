import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_FETCH,
} from "./userType";

const initialState = {
  loading: false,
  users: [],
  error: "error",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
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

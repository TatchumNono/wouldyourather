//import _getUsers from "../../_DATA";
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_FETCH,
} from "./userType";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetch

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
      break;
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
      break;
    case GET_USERS_FETCH:
      return {
        ...state,
        loading: true,
      };
      break;
    default:
      return state;
  }
};

export default userReducer;

import {
  GET_USERS_FETCH,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "./userType";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    pay: users,
  };
};

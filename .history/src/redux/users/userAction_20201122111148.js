import {
  GET_USERS_FETCH,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "./userType";
import * as 

console.log(_getUsers());

export const fetchUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsersFetch = () => {
  return {
    type: GET_USERS_FETCH,
  };
};

export const fetchUsers = () => (dispatch) => {
  dispatch(_getUsers());
};

import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./userType";
import * as API from "../../_DATA";

//console.log(API._getQuestions());
//console.log(API._getUsers());

export const fetchUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFetch = () => {
  return {
    type: GET_USERS_FETCH,
  };
};

export const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};
//async action creators returns a function instead of an object
//it doesnot have to be pure so allows side effects actions like fetchs to API
//i'm dispatching sync action creators in async action creators

export const fetchUsers = () => {
  return (dispatch) => {
    const users = API._getUsers();
    dispatch(fetchUsersFetch());
    users.then((res) => dispatch(fetchUsersSuccess(res)));
  };
};

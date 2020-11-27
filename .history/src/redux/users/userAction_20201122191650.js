import {
  GET_USERS_FETCH,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "./userType";
import * as API from "../../_DATA";

console.log(API._getQuestions());
console.log(API._getUsers());

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

//async action creators returns a function instead of an object
//it doesnot have to be pure so allows side effects actions like fetchs to API
//i'm dispatching sync 

export const fetchUsers = () => {
  return (dispatch) => {
    const users = API._getUsers();
    dispatch(fetchUsersSuccess(users));
    console.log(users.name);
  };
};

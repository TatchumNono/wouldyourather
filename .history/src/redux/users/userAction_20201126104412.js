import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
} from "./userType";
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

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

//async action creators returns a function instead of an object
//it doesnot have to be pure so allows side effects actions like fetchs to API
//i'm dispatching the sync action creators in async action creators

//the dispatch of this async action in the app initaites the dispatch of the sync actions
//in this async action

export const fetchUsers = () => {
  return (dispatch) => {
    const users = API._getUsers();
    //the dispatch of this actions set the loading to true
    dispatch(fetchUsersFetch());
    //fetching users and dispatching an action that takes a
    users.then((res) => dispatch(fetchUsersSuccess(res)));
  };
};

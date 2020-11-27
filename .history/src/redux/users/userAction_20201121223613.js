import {
  GET_USERS_FETCH,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "./userType";
import _getUsers from "../../_DATA";

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

const fetchUsers = () => dispatch =>{
    _getUsers.then((res)=>console.log(res)
    dispatch(fetchUSers)
    )
}

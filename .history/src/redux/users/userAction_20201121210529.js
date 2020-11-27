import {
  GET_USERS_FETCH,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "./userType";

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

expect const fetchUsersFetch = () =>{
    return{
        type:
    }
}

import { GET_USERS_FETCH,GET_USERS_FAILURE, } from "./userType";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users: users,
  };
};

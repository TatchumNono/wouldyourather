import { GET_USERS_FETCH,GET_USERS_FAILURE,GET } from "./userType";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users: users,
  };
};

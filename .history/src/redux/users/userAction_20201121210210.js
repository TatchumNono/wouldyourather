import { GET_USERS_FETCH,GET } from "./userType";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users: users,
  };
};

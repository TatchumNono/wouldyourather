import { GET_USERS } from "./userType";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users: users,
  };
};

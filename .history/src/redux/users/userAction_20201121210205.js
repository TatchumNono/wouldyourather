import { GET_USERS_ } from "./userType";

export const fetchUsers = (users) => {
  return {
    type: GET_USERS,
    users: users,
  };
};

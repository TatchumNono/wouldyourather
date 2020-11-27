import { GET_USERS } from "./userType";

export const fetchUsers = () => {
  return {
    type: GET_USERS,
    users: users,
  };
};

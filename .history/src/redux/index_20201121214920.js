import { applyMiddleware, combineReducer } from "redux";
import { userReducer } from "./users/userReducer";
import thunk from "redux-thunk";

const rootResucer =
  ({
    users: userReducer,
  },
  applyMiddleware(thunk));

  export const root
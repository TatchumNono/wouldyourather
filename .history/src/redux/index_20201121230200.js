import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";

export const rootReducer = combineReducers({ users: userReducer });

import { combineReducer } from "redux";
import { userReducer } from "./users/userReducer";

export const rootReducer = combineReducer({ users: userReducer });

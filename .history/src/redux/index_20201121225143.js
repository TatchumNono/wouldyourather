import { combineReducer } from "redux";
import { userReducer } from "./users/userReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducer({ users: userReducer });

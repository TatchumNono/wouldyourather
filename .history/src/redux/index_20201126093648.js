import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";
import { questionReducer } from "./questions/questionReducer";

export const rootReducer = combineReducers({ users: userReducer, question: });

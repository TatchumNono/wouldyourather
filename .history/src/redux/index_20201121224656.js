import { applyMiddleware, combineReducer } from "redux";
import { userReducer } from "./users/userReducer";
import thunk from "redux-thunk";

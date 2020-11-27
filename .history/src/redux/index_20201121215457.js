import { applyMiddleware, combineReducer } from "redux";
import { userReducer } from "./users/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducer({users:userReducer},applyMiddleware)

export default rootReducer;

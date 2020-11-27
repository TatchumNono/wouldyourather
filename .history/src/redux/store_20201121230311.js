import { createStore, applyMiddleware } from "redux";
import { userReducer } from "./users/userReducer";
import thunk from "redux-thunk";

export const store = createStore(user, applyMiddleware(thunk));

import { createStore, applyMiddleware } from "redux";
import { userReducer } from "./users/";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

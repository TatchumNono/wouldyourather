import { createStore, applyMiddleware } from "redux";
import { userReducer } from "./index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

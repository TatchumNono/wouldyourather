import { createStore, applyMiddleware } from "redux";
import { rootR
import thunk from "redux-thunk";

export const store = createStore(userReducer, applyMiddleware(thunk));

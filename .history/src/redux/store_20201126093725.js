import { createStore, applyMiddleware } from "redux";
import { rootReducer
import thunk from "redux-thunk";

export const store = createStore(userReducer, applyMiddleware(thunk));

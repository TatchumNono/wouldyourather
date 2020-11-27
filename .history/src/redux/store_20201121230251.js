import { createStore, applyMiddleware } from "redux";
import { user } from "./index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

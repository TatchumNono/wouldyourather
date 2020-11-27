import { createStore, applyMiddleware } from "redux";
import {composeWithDev}
import { rootReducer } from "./index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

import { createStore, applyMiddleware } from "redux";
import {composeWith}
import { rootReducer } from "./index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

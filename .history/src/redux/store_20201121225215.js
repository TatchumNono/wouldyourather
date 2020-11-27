import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer,applyMiddleware);

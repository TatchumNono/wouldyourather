import { createStore, applyMiddleware } from "redux";
import {composeWithDevTool} from ''
import { rootReducer } from "./index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

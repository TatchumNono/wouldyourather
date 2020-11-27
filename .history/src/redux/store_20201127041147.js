import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTool } from "redux-devtools-extension";
import { rootReducer } from "./index";
import thunk from "redux-thunk";

const middleware = []

export const store = createStore(rootReducer, applyMiddleware(thunk));

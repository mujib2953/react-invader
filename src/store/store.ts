import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

const middlewares = applyMiddleware(...[thunk]);

export const store = createStore(
    rootReducer,
    composeWithDevTools(middlewares),
);

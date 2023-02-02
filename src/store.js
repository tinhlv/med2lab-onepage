import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger'
import thunk from "redux-thunk";

import rootReducer from "../src/reducers";

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

export function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

// Thunk
import Thunk from "redux-thunk";
// RootReducer
import RootReducer from "./Reducers";
// Redux
import { createStore, applyMiddleware } from "redux";

export const middlewares = [Thunk];

export const storeWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = storeWithMiddlewares(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__());

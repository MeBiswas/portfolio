// Thunk
import Thunk from "redux-thunk";
// RootReducer
import RootReducer from "./Reducers";
// Saga
import createSagaMiddleware from "redux-saga";
// Redux
import { createStore, applyMiddleware } from "redux";

// Creating Saga Middleware
const sagaMiddleware = createSagaMiddleware();
// Middlewares
export const middlewares = [Thunk, sagaMiddleware];

export const storeWithMiddlewares = applyMiddleware(...middlewares)(
	createStore
);

export const store = storeWithMiddlewares(
	RootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

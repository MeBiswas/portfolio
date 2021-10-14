// Thunk
import Thunk from "redux-thunk";
// RootReducer
import RootReducer from "./Reducers";
// Saga
import createSagaMiddleware from "redux-saga";
// Redux
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas";

// Creating Saga Middleware
const sagaMiddleware = createSagaMiddleware();
// Middlewares
export const middlewares = [Thunk, sagaMiddleware];
// Creating Stack of Middlewares
export const storeWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
);

// Applying Middlewares and Reducers to Store
export const store = storeWithMiddlewares(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Running Saga
sagaMiddleware.run(rootSaga);

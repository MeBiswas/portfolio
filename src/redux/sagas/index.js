// Redux Saga
import { all } from "redux-saga/effects";
// Contact Saga
import contactSaga from "./contact.saga";

export default function* rootSaga() {
  yield all([contactSaga()]);
}

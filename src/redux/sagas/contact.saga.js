// API Helper Generator
import { axiosPostRequest } from "../../utils";
// Action Types
import { contactActionTypes } from "../Constants";
// Redux Saga
import { put, takeLatest } from "redux-saga/effects";

// Worker Saga
function* contactWorker(action) {
  try {
    const res = yield axiosPostRequest("/mail", action.payload);
    if (res.status === 200) {
      yield put({
        type: contactActionTypes.Send_Mail_Success,
        payload: res.data,
      });
    }
  } catch (error) {
    yield put({
      type: contactActionTypes.Send_Mail_Error,
      payload: error.message,
    });
  }
}

// Watcher Saga
function* contactSaga() {
  yield takeLatest(contactActionTypes.Send_Mail, contactWorker);
}

export default contactSaga;

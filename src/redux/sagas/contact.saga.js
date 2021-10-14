// Redux Saga
import { put, takeLatest } from "redux-saga/effects";

const api_uri = "http://localhost:4000/api";

function* sendMailAPIRequest() {
  const response = yield fetch(api_uri + "/mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
  return response;
}

function* contactRequest(action) {
  try {
    const res = sendMailAPIRequest();
    yield put({ type: "Send_Mail_Success", payload: res });
  } catch (error) {
    yield put({ type: "Send_Mail_Error", payload: error.message });
  }
}

function* contactSaga() {
  yield takeLatest("Send_Mail", contactRequest);
}

export default contactSaga;

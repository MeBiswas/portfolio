// API Helper Generator
import { postRequest } from "../../utils";
// Action Types
import { contactActionTypes } from "../Constants";
// Redux Saga
import { put, takeLatest } from "redux-saga/effects";

// Worker Saga
function* contactWorker(action) {
	try {
		const res = yield postRequest("/mail", action.payload);
		if (res.status === 200) {
			yield put({
				type: contactActionTypes.Send_Mail_Success,
				payload: { message: "Mail Sent" },
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

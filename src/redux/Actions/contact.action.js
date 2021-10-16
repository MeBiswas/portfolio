//  Action Types
import { contactActionTypes } from "../Constants";

export const contactSendMailAction = (payload) => (dispatch) => {
	dispatch({
		payload,
		type: contactActionTypes.Send_Mail,
	});
};

export const contactSendMailLoadingAction = (payload) => (dispatch) => {
	dispatch({
		payload,
		type: contactActionTypes.Send_Mail_Loading,
	});
};

export const contactSendMailErrorAction = (payload) => (dispatch) => {
	dispatch({
		payload,
		type: contactActionTypes.Send_Mail_Error,
	});
};

export const contactSendMailSuccessAction = (payload) => (dispatch) => {
	dispatch({
		payload,
		type: contactActionTypes.Send_Mail_Success,
	});
};

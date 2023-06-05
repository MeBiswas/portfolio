//  Action Types
import { contactActionTypes } from "../Constants";

export const contactSendMailAction = (payload) => {
  return {
    payload,
    type: contactActionTypes.Send_Mail,
  };
};

export const contactSendMailLoadingAction = (payload) => {
  return {
    payload,
    type: contactActionTypes.Send_Mail_Loading,
  };
};

export const contactSendMailErrorAction = (payload) => {
  return {
    payload,
    type: contactActionTypes.Send_Mail_Error,
  };
};

export const contactSendMailSuccessAction = (payload) => {
  return {
    payload,
    type: contactActionTypes.Send_Mail_Success,
  };
};

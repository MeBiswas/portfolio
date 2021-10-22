// Action Types
import { contactActionTypes } from "../../Constants";

const initState = {
  data: null,
  error: null,
  loading: false,
};

export const ContactReducer = (state = initState, action) => {
  switch (action.type) {
    case contactActionTypes.Send_Mail_Error:
      return { ...state, error: action.payload };

    case contactActionTypes.Send_Mail_Loading:
      return { ...state, loading: action.payload };

    case contactActionTypes.Send_Mail_Success:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

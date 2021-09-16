// Action Types
import { actionTypes } from "../Constants";

export const fetchIntro = (payload) => (dispatch) => {
  dispatch({
    payload,
    type: actionTypes.GET_INTRO,
  });
};

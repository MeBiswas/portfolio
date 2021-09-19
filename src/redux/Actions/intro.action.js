// Action Types
import { introActionTypes } from "../Constants";

export const fetchIntro = (payload) => (dispatch) => {
  dispatch({
		payload,
		type: introActionTypes.GET_INTRO,
	});
};

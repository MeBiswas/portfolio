// Action Types
import { actionTypes } from "../../Constants";

export const IntroductionReducer = (state = [], action) => {
	switch (action.type) {
		case actionTypes.GET_INTRO:
			return action.payload;
      
		default:
			return state;
	}
};

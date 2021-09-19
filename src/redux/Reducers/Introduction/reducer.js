// Action Types
import { introActionTypes } from "../../Constants";

export const IntroductionReducer = (state = [], action) => {
	switch (action.type) {
		case introActionTypes.GET_INTRO:
			return action.payload;

		default:
			return state;
	}
};

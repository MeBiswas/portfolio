// Action Types
import { resumeActionTypes } from "../../Constants";

const initState = {
	data: null,
	error: null,
	loading: false,
};

export const ResumeReducer = (state = initState, action) => {
	switch (action.type) {
		case resumeActionTypes.Get_Resume: {
			return { ...state, data: action.payload };
		}
		case resumeActionTypes.Get_Resume_Error: {
			return { ...state, error: action.payload };
		}
		case resumeActionTypes.Get_Resume_Loading: {
			return { ...state, loading: action.payload };
		}
		default:
			return state;
	}
};

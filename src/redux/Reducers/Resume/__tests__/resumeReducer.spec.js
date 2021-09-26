// Helper
import { reducerState } from "../../../../utils";
// Reducer
import { ResumeReducer } from "../resume.reducer";
// Action Types
import { resumeActionTypes } from "../../../Constants";

describe("Resume Reducer", () => {
	let defaultState;
	beforeEach(() => {
		defaultState = {
			data: null,
			error: null,
			loading: false,
		};
	});

	it("should return default state", () => {
		const newState = reducerState(defaultState, undefined, ResumeReducer);
		expect(newState).toEqual(defaultState);
	});

	it("should return loading true", () => {
		const newState = reducerState(
			defaultState,
			{
				payload: true,
				type: resumeActionTypes.Get_Resume_Loading,
			},
			ResumeReducer
		);
		expect(newState).toEqual({ ...defaultState, loading: true });
	});

	it("should return error", () => {
		const newState = reducerState(
			defaultState,
			{
				payload: "Error",
				type: resumeActionTypes.Get_Resume_Error,
			},
			ResumeReducer
		);
		expect(newState).toEqual({ ...defaultState, error: "Error" });
	});

	it("should return data", () => {
		const newState = reducerState(
			defaultState,
			{
				payload: {
					data: "data",
				},
				type: resumeActionTypes.Get_Resume,
			},
			ResumeReducer
		);
		expect(newState).toEqual({ ...defaultState, data: { data: "data" } });
	});
});

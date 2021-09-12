// Action Types
import { actionTypes } from "../../../Constants";
// Reducer
import { IntroductionReducer } from "../reducer";

const reducerState = (state, payload = {}) => {
	const newState = IntroductionReducer(state, payload);
	return newState;
};

describe("Introduction Reducer", () => {

	it("should return default state", () => {
		const newState = reducerState(undefined);
		expect(newState).toEqual([]);
	});

	it("should return new state with action", () => {
		let data = {
			title: "Test title",
			preTitle: "Test preTitle",
			position1: "Test position1",
			position2: "Test position2",
			buttonTitle: "Test buttonTitle",
		};
		const newState = reducerState(undefined, {
			type: actionTypes.GET_INTRO,
			payload: data,
		});
		expect(newState).toEqual(data);
	});
});

// Reducer
import { IntroductionReducer } from "../reducer";
// Action Types
import { introActionTypes } from "../../../Constants";

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
      name: "Test",
      specialization: ["Test 1", "Test 2"],
    };
    const newState = reducerState(undefined, {
      type: introActionTypes.GET_INTRO,
      payload: data,
    });
    expect(newState).toEqual(data);
  });
});

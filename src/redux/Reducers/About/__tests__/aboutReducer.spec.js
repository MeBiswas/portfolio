// Reducer
import { AboutReducer } from "../about.reducer";
// Action Types
import { aboutActionTypes } from "../../../Constants";

const reducerState = (state, payload = {}) => {
  const newState = AboutReducer(state, payload);
  return newState;
};

describe("About Reducer", () => {
  it("should return default state", () => {
    const newState = reducerState(undefined);
    expect(newState).toEqual([]);
  });

  it("should return new state with action", () => {
    const data = {
      test: "test",
    };
    const newState = reducerState(undefined, {
      type: aboutActionTypes.GET_ABOUT,
      payload: data,
    });
    expect(newState).toEqual(data);
  });
});

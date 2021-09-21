// Action Types
import { aboutActionTypes } from "../../Constants";

export const AboutReducer = (state=[], action) => {
  switch (action.type) {
    case aboutActionTypes.GET_ABOUT:
      return action.payload
  
    default:
      return state;
  }
}
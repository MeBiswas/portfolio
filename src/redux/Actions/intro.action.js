// Action Types
import { introActionTypes } from "../Constants";

export const fetchIntro = (payload) => {
  return {
    payload,
    type: introActionTypes.GET_INTRO,
  };
};

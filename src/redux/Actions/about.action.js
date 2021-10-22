// Action Types
import { aboutActionTypes } from "../Constants";

export const fetchAbout = (payload) => {
  return {
    payload,
    type: aboutActionTypes.GET_ABOUT,
  };
};

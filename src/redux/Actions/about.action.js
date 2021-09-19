// Action Types
import { aboutActionTypes } from "../Constants";

export const fetchAbout = (payload) => (dispatch) => {
  dispatch({
    payload,
    type: aboutActionTypes.GET_ABOUT
  })
} 

// Action Types
import { resumeActionTypes } from "../Constants";

export const resumeLoadingAction = (payload) => (dispatch) => {
  dispatch({
    payload,
    type: resumeActionTypes.Get_Resume_Loading
  })
}

export const resumeSuccessAction = (payload) => (dispatch) => {
  dispatch({
    payload,
    type: resumeActionTypes.Get_Resume
  })
}

export const resumeErrorAction = (payload) => (dispatch) => {
  dispatch({
    payload,
    type: resumeActionTypes.Get_Resume_Error
  })
}
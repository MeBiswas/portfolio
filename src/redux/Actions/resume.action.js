// Action Types
import { resumeActionTypes } from "../Constants";

export const resumeLoadingAction = (payload) => {
  return {
    payload,
    type: resumeActionTypes.Get_Resume_Loading,
  };
};

export const resumeSuccessAction = (payload) => {
  return {
    payload,
    type: resumeActionTypes.Get_Resume,
  };
};

export const resumeErrorAction = (payload) => {
  return {
    payload,
    type: resumeActionTypes.Get_Resume_Error,
  };
};

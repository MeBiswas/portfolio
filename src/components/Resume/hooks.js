// LifeCycle Hook
import { useEffect } from "react";
// Apollo
import { useQuery } from "@apollo/client";
// Query
import { getResumeDataQuery } from "../../utils";
// Redux Hook
import { useDispatch, useSelector } from "react-redux";
// Action
import {
  resumeErrorAction,
  resumeLoadingAction,
  resumeSuccessAction,
} from "../../redux/Actions";

const useResumeHook = () => {
  // Dispatcher
  const dispatch = useDispatch();

  // Query Hook
  const { data, error, loading } = useQuery(getResumeDataQuery);

  // LifeCycle Method
  useEffect(() => {
    dispatch(resumeLoadingAction(loading));
  }, [dispatch, loading]);

  // LifeCycle Method
  useEffect(() => {
    if (error) {
      dispatch(resumeErrorAction(error?.message));
    } else {
      dispatch(resumeSuccessAction(data?.resume));
    }
  }, [dispatch, error, data]);

  // Selector Hook
  const ResumeData = useSelector((state) => state.ResumeReducer);

  return ResumeData;
};

export default useResumeHook;

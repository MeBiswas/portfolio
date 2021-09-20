// LifeCycle Hook
import { useEffect } from "react";
// Apollo
import { useQuery } from "@apollo/client";
// Actions
import { fetchIntro } from "../../redux/Actions";
// Redux Hooks
import { useDispatch, useSelector } from "react-redux";
// Query
import { getIntroductionQuery } from "../../utils/queries";

// Custom Hook for Intro Component
const useIntroHook = () => {
  // Dispatcher
  const dispatch = useDispatch();

  // Query Hook
  const { data, error, loading } = useQuery(getIntroductionQuery);

  // Dispatch Action
  useEffect(() => {
    if (data) {
      const { name, specialization } = { ...data.intro[0] };
      dispatch(fetchIntro({ name, specialization }));
    }
  }, [dispatch, data]);

  // Retrieving Data from Redux
  const IntroData = useSelector((state) => state.IntroductionReducer);

  return { error, loading, IntroData };
};

export default useIntroHook;

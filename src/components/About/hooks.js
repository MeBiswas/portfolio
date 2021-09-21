// LifeCycle Hook
import { useEffect } from "react";
// Apollo
import { useQuery } from "@apollo/client";
// Query
import { getAboutDataQuery } from "../../utils";
// Action
import { fetchAbout } from "../../redux/Actions";
// Redux Hook
import { useDispatch, useSelector } from "react-redux";

// Custom Hook for Intro Component
const useAboutHook = () => {
  // Dispatcher
  const dispatch = useDispatch();

  // Query Hook
  const { data, error, loading } = useQuery(getAboutDataQuery);

  // LifeCycle Hook
  useEffect(() => {
    if (data) {
      const { title, profile, skills, skillsTitle, profileTitle } = {
        ...data.about[0],
      };
      dispatch(
        fetchAbout({ title, profile, skills, skillsTitle, profileTitle })
      );
    }
  }, [dispatch, data]);

  // Selector Hook
  const AboutData = useSelector((state) => state.AboutReducer);

  return { error, loading, AboutData };
};

export default useAboutHook;

import React from "react";
// Custom Hook
import useIntroHook from "./hooks";
// View
import { IntroComponent } from "./view";

const Intro = () => {
	// Destructuring Custom Hook
	const { IntroData } = useIntroHook();
  
	if (IntroData.length <= 0) { 
    return null; 
  }
  return (
		<>
			<IntroComponent {...IntroData} />
		</>
	);
};

export default Intro;

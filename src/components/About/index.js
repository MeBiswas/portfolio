import React from "react";
// Custom Hook
import useAboutHook from "./hooks";
// View
import { AboutComponent } from "./view";

const About = (props) => {
	// Custom Hook
	const { AboutData } = useAboutHook();

	if (AboutData.length <= 0) {
		return null;
	}
	return (
		<>
			<AboutComponent {...AboutData} />
		</>
	);
};

export default About;

import React from "react";
// View
import { AboutComponent } from "./view";
// Custom Hook
import useAboutHook from "./hooks";

const About = (props) => {
	// Custom Hook
	const { AboutData } = useAboutHook();

	if (AboutData.length <= 0) {
		return null;
	}
	// console.log("About Component =>", AboutData);
	return (
		<>
			<AboutComponent {...AboutData} />
		</>
	);
};

export default About;

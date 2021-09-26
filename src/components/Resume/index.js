// View
import { ResumeComponent } from "./view";
// Custom Hook
import useResumeHook from "./hooks";

const Resume = () => {
	const { data } = useResumeHook();

	if (!data) {
		return null;
	}
	return (
		<>
			<ResumeComponent {...data} />
		</>
	);
};

export default Resume;

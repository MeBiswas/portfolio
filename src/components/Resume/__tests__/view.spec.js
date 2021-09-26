import { mount, shallow } from "enzyme";
import { ResumeComponent } from "../view";
import { checkProps } from "../../../utils";

const setup = (type, props = {}) => {
	switch (type) {
		case "m": {
			const wrapper = mount(<ResumeComponent {...props} />);
			return wrapper;
		}
		case "s": {
			const wrapper = shallow(<ResumeComponent {...props} />);
			return wrapper;
		}
		default:
			return null;
	}
};

describe("About Component JSX", () => {
	let props;
	let component;
	beforeEach(() => {
		props = {
			education: [
				{
					course: "Test course",
					duration: "Test duration",
					description: "Test description",
					institution: "Test institution",
				},
			],
			experience: [
				{
					tenure: "Test tenure",
					company: "Test company",
					designation: "Test designation",
					description: "Test description",
				},
			],
		};
		component = setup("s", props);
	});

	it("should render without error", () => {
		expect(component.exists()).toBe(true);
	});

	it("should have proper propType", () => {
		const propsErr = checkProps(ResumeComponent, props);
		expect(propsErr).toBeUndefined();
	});
});

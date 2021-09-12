import React from "react";
import Header from "../index";
import { mount, shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../utils";

// Component setup for testing
const setup = (type, props = {}) => {
	switch (type) {
		case "m": {
			const component = mount(<Header {...props} />);
			return component;
		}
		case "s": {
			const component = shallow(<Header {...props} />);
			return component;
		}
		default:
			return null;
	}
};

describe("Header Component", () => {
	// Testing for propTypes
	describe("checking propTypes", () => {
		it("should not throw a warning", () => {
			const expectedPropTypes = {
				logoTitle: "Test Title",
			};

			const propsErr = checkProps(Header, expectedPropTypes);
			expect(propsErr).toBeUndefined();
		});
	});

	// Testing without props
	describe("when does not have props", () => {
		let component;
		beforeEach(() => {
			component = setup("s");
		});

		it("should render without error", () => {
			// console.log(component.debug());
			expect(component.exists()).toBe(true);
		});
	});

	// Testing with props
	describe("when have props", () => {
		let component;
		beforeEach(() => {

			const props = {
				logoTitle: "Test Title",
			};
			component = setup("s", props);
		});

		it("should render without error", () => {
			expect(component.exists()).toBe(true);
		});

		it("should render top bar without error", () => {
			const wrapper = findByTestAttr(component, "top-bar");
			expect(wrapper.length).toBe(1);
		});

		it("should render logo without error", () => {
			const wrapper = findByTestAttr(component, "logo");
			expect(wrapper.length).toBe(1);
		});

		it("should render navbar without error", () => {
			const wrapper = findByTestAttr(component, "main-nav-wrap");
			expect(wrapper.length).toBe(1);
		});

		it("should not show before click", () => {
			const wrapper = findByTestAttr(component, "menu-visible");
			expect(wrapper.length).toBe(0);
		});

		it("should show menu on click", () => {
			const button = findByTestAttr(component, "menu-toggle");
			button.simulate("click");
			const wrapper = findByTestAttr(component, "menu-visible");
			expect(wrapper.length).toEqual(1);
		});
	});
});

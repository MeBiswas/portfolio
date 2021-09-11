import React from "react";
import Header from "../index";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils/testing";

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
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

  it("test click event", () => {
    const mockFn = jest.fn();
    const button = findByTestAttr(component, "menu-toggle");
    button.simulate("click");
    const callback = mockFn.mock.calls.length;
    expect(callback.length).toBe(1);
  });
});

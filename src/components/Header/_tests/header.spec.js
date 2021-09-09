import React from "react";
import { shallow } from "enzyme";
import Header from "../index";

describe("Header Component", () => {
  it("showld render without error", () => {
    const component = shallow(<Header />);
    expect(component.exists()).toBe(true);
  });

  it("should render top bar without error", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".top-bar");
    expect(wrapper.length).toBe(1);
  });

  it("should render logo without error", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".logo");
    expect(wrapper.length).toBe(1);
  });

  it("should render navbar without error", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(".main-nav-wrap");
    expect(wrapper.length).toBe(1);
  });
});

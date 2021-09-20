import { mount, shallow } from "enzyme";
import { IntroComponent } from "../view";
import { checkProps } from "../../../utils";

const setup = (type, props = {}) => {
  switch (type) {
    case "s": {
      const wrapper = shallow(<IntroComponent {...props} />);
      return wrapper;
    }
    case "m": {
      const wrapper = mount(<IntroComponent {...props} />);
      return wrapper;
    }
    default:
      return null;
  }
};

describe("Introduction Component", () => {
  describe("view", () => {
    let component;
    beforeEach(() => {
      const props = {
        name: "Test",
        specialization: ["Test 1", "Test 2"],
      };
      component = setup("s", props);
    });

    it("should render without error", () => {
      expect(component.exists()).toBe(true);
    });

    it("should have proper propTypes", () => {
      const expectedPropTypes = {
        name: "Test",
        specialization: ["Test 1", "Test 2"],
      };

      const propsErr = checkProps(IntroComponent, expectedPropTypes);
      expect(propsErr).toBeUndefined();
    });
  });
});

import Intro from "../index";
import { mount, shallow } from "enzyme";

const setup = (type, props = {}) => {
  switch (type) {
    case "s": {
      const wrapper = shallow(<Intro {...props} />);
      return wrapper;
    }
    case "m": {
      const wrapper = mount(<Intro {...props} />);
      return wrapper;
    }
    default:
      return null;
  }
};

describe("Introduction Component", () => {
  let component;
  beforeEach(() => {
    component = setup("s");
  });

  it("should render without error", () => {
    expect(component.exists()).toBe(true);
  });
});

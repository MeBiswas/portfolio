import { mount, shallow } from "enzyme";
import { ContactComponent } from "../view";
import { checkProps } from "../../../utils";

const setup = (type, props = {}) => {
  switch (type) {
    case "m": {
      const wrapper = mount(<ContactComponent {...props} />);
      return wrapper;
    }
    case "s": {
      const wrapper = shallow(<ContactComponent {...props} />);
      return wrapper;
    }
    default:
      return null;
  }
};

describe("Contact Component JSX", () => {
  let props;
  let component;
  let mockFn = jest.fn();
  beforeEach(() => {
    props = {
      change: mockFn,
      submit: mockFn,
      name: "Test name",
      email: "Test email",
      subject: "Test subject",
      message: "Test message",
    };
    component = setup("s", props);
  });

  it("should render without error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should have proper propType", () => {
    const propsErr = checkProps(ContactComponent, props);
    expect(propsErr).toBeUndefined();
  });
});

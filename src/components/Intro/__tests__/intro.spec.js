import Intro from "../index";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import { storeTest } from "../../../utils";

const store = storeTest();
const setup = (type, props = {}) => {
  switch (type) {
    case "s": {
      const wrapper = shallow(
        <Provider store={store}>
          <Intro {...props} />
        </Provider>
      );
      return wrapper;
    }
    case "m": {
      const wrapper = mount(
        <Provider store={store}>
          <Intro {...props} />
        </Provider>
      );
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

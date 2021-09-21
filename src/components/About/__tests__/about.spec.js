import About from "../index";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import { storeTest } from "../../../utils";

const store = storeTest();
const setup = (type) => {
  switch (type) {
    case "m": {
      const wrapper = mount(
        <Provider store={store}>
          <About />
        </Provider>
      );
      return wrapper;
    }
    case "s": {
      const wrapper = shallow(
        <Provider store={store}>
          <About />
        </Provider>
      );
      return wrapper;
    }
    default:
      return null;
  }
};

describe("About Component", () => {
  let component;
  beforeEach(() => {
    component = setup("s");
  });

  it("should render without error", () => {
    expect(component.exists()).toBe(true);
  });
});

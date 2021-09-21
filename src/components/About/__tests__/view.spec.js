import { mount, shallow } from "enzyme";
import { AboutComponent } from "../view";
import { checkProps } from "../../../utils";

const setup = (type, props = {}) => {
  switch (type) {
    case "m": {
      const wrapper = mount(<AboutComponent {...props} />);
      return wrapper;
    }
    case "s": {
      const wrapper = shallow(<AboutComponent {...props} />);
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
      title:
        "Innovative Front End Developer with more than 3 years experience building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript along with modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop.",
      profileTitle:
        "I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have more than 3 years of IT experience having hands on experience with multiple frameworks. I am eager to learn, I enjoy overcoming challenges, and I have a genuine interest in Full-Stack Development and making organisations successful.",
      skillsTitle:
        "Responsible for creating, imrpoving and developing IT projects. Closely collaborated with project members to identify and quickly address problems.",
      profile: [
        {
          dob: "November 17, 1993",
          name: "Abhipriyo Biswas",
          email: "biswasabhi93@gmail.com",
          website: "www.portfolio.herokuapp.com",
          job: ["Full-Stack Developer"],
        },
      ],
      skills: [
        {
          skill: "HTML5",
          proficiency: 90,
        },
        {
          skill: "CSS3",
          proficiency: 90,
        },
        {
          skill: "JQuery",
          proficiency: 85,
        },
        {
          skill: "JavaScript",
          proficiency: 90,
        },
        {
          skill: "Angular",
          proficiency: 70,
        },
        {
          skill: "React JS",
          proficiency: 80,
        },
      ],
    };
    component = setup("s", props);
  });

  it("should render without error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should have proper propType", () => {
    const propsErr = checkProps(AboutComponent, props);
    expect(propsErr).toBeUndefined();
  });
});

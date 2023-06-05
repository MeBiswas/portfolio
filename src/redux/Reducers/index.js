import { combineReducers } from "redux";
// Reducers
import { AboutReducer } from "./About/about.reducer";
import { ResumeReducer } from "./Resume/resume.reducer";
import { ContactReducer } from "./Contact/contact.reducer";
import { IntroductionReducer } from "./Introduction/introduction.reducer";

const rootReducer = combineReducers({
  AboutReducer,
  ResumeReducer,
  ContactReducer,
  IntroductionReducer,
});

export default rootReducer;

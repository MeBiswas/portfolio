import { combineReducers } from "redux";
// Reducers
import { AboutReducer } from "./About/about.reducer";
import { IntroductionReducer } from "./Introduction/introduction.reducer";

const rootReducer = combineReducers({
  AboutReducer,
  IntroductionReducer,
});

export default rootReducer;

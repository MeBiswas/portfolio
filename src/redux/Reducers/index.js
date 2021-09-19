import { combineReducers } from "redux";
// Reducers
import { AboutReducer } from "./About/reducer";
import { IntroductionReducer } from "./Introduction/reducer";

const rootReducer = combineReducers({
  AboutReducer,
  IntroductionReducer
})

export default rootReducer
// Check Prop Types
import checkPropTypes from "check-prop-types";
// Reducer
import rootReducer from "../../redux/Reducers";
// Middleware
import { middlewares } from "../../redux/store";
// Redux
import { createStore, applyMiddleware } from "redux";

// To Test with data-test attribute
export const findByTestAttr = (component, attribute) => {
	const wrapper = component.find(`[data-test='${attribute}']`);
	return wrapper;
};

// To Test with Check PropTypes
export const checkProps = (component, expectedProps) => {
  const propErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propErr;
}

// To Test with Mock Store
export const storeTest = (initState) => {
  const createMockStore = applyMiddleware(...middlewares)(createStore);
  return createMockStore(rootReducer, initState);
}
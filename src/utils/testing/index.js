// To find component by data test attribute
export const findByTestAttr = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

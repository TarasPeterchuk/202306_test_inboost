export const optionsListSelector = (state) => {
  return state.options.optionsList[0]
    ? state.options.optionsList[0].options
    : [];
};

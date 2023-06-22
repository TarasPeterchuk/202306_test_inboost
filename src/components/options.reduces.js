import { OPTIONS_LIST_RECEIVED } from './options.actions';

const initialState = {
  optionsList: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPTIONS_LIST_RECEIVED:
      return {
        ...state,
        optionsList: action.payload.optionsList,
      };
    default:
      return state;
  }
};

export default optionsReducer;

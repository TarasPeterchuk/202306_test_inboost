// import * as flightsGateway from './flightsGateway';
import * as optionsGateway from './optionsGateway';
import { optionsListSelector } from './options.selectors';

export const OPTIONS_LIST_RECEIVED = 'OPTIONS_LIST_RECEIVED';

export const optionsListReceived = (optionsList) => {
  const action = {
    type: OPTIONS_LIST_RECEIVED,
    payload: { optionsList },
  };
  return action;
};

export const getOptionsList = () => {
  const thunkAction = function (dispatch) {
    optionsGateway
      .fetchOptionsList()
      .then((optionsList) => dispatch(optionsListReceived(optionsList)));
  };
  return thunkAction;
};

export const updateOptions = (index, newValue) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const optionsList = optionsListSelector(state);
    let updatedOptions = { options: optionsList };
    console.log(newValue, ' ', index);
    if (isNaN(newValue)) {
      updatedOptions = { options: optionsList.slice(0, index) };
    } else {
      if (index === -1) {
        index = optionsList.length;
      }
      optionsList[index] = parseInt(newValue);
      updatedOptions = { options: optionsList };
    }
    optionsGateway
      .updateOptions(updatedOptions)
      .then(() => dispatch(getOptionsList()));
  };
  return thunkAction;
};

// export const updateoption = (optionId) => {
//   const thunkAction = function (dispatch, getState) {
//     const state = getState();
//     const optionsList = optionsListSelector(state);
//     // const { options } = this.state;
//     const option = optionsList.find((option) => option.id === optionId);
//     const updatedoption = { ...option, done: !option.done };

//     optionGateway
//       .updateoption(optionId, updatedoption)
//       .then(() => dispatch(getoptionList()));
//   };
//   return thunkAction;
// };

// export const deleteoption = (optionId) => {
//   const thunkAction = function (dispatch) {
//     optionGateway.deleteoption(optionId).then(() => dispatch(getoptionList()));
//   };
//   return thunkAction;
// };

// export const createoption = (text) => {
//   const thunkAction = function (dispatch) {
//     const optionData = {
//       text: text,
//       done: false,
//       createdAt: new Date().toISOString(),
//     };

//     optionGateway
//       .createoption(optionData)
//       .then(() => dispatch(getoptionList()));
//   };
//   return thunkAction;
// };

import './container.scss';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import * as optionsAction from '../options.actions';
import { optionsListSelector } from '../options.selectors';
import SelectInput from '../selectInput/SelectInput';

const options = [
  { value: 1, label: 'Варіант 1' },
  { value: 2, label: 'Варіант 2' },
  { value: 3, label: 'Варіант 3' },
  { value: 4, label: 'Варіант 4' },
  { value: 5, label: 'Варіант 5' },
  { value: 6, label: 'Варіант 6' },
];

const Container: React.FC<any> = ({ optionsList, getOptionsList }) => {
  useEffect(() => {
    getOptionsList();
  }, []);

  return (
    <>
      {optionsList &&
        optionsList.map((value: number, index: number, array: number[]) => (
          <div
            key={index}
            className="container"
            style={{ marginLeft: `${index * 100}px` }}
          >
            <div className="line"></div>
            <div className="whiteArea">{`${
              optionsList && 'Варіант ' + optionsList.slice(0, index + 1)
            }`}</div>
            <SelectInput options={options} index={index} dataValues={array} />
          </div>
        ))}
      <div
        className="container"
        style={{ marginLeft: `${optionsList.length * 100}px` }}
      >
        <div className="line"></div>
        <div className="whiteArea"></div>
        <SelectInput options={options} index={-1} dataValues={optionsList} />
      </div>
    </>
  );
};

const mapDispatch = {
  getOptionsList: optionsAction.getOptionsList,
};

const mapstate = (state: any) => {
  return {
    optionsList: optionsListSelector(state),
  };
};
export default connect(mapstate, mapDispatch)(Container);

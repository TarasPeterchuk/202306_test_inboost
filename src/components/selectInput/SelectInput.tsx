import * as React from 'react';
import { connect } from 'react-redux';
import * as optionsAction from '../options.actions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectInputProps = {
  updateOptions: any;
  options: { value: number; label: string }[];
  index: number;
  dataValues: number[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  updateOptions,
  options,
  index,
  dataValues,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const newValue = parseInt(event.target.value);
    updateOptions(index, newValue);
  };

  return (
    <FormControl sx={{ m: 1, width: 233, background: 'white' }} size="small">
      <InputLabel id="demo-select-small-label">Вибрати значення</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={`${index != -1 ? dataValues[index] : ''}`}
        label="Вибрати значення"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>пусто</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const mapDispatch = {
  updateOptions: optionsAction.updateOptions,
};

export default connect(null, mapDispatch)(SelectInput);

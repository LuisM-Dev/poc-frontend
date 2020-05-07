import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const SelectInput = props => {
  const { state, label, className, editMode, inputHandler } = props;
  const { error, message, value, required, options } = state;
  const { status } = editMode;

  const changeHandler = event => {
    inputHandler(event.target.value);
  };

  return (
    <TextField
      className={className}
      data-test={'select-field'}
      disabled={!status}
      error={error}
      helperText={message}
      inputProps={{ 'data-test': 'select-input' }}
      label={label}
      margin="dense"
      onChange={changeHandler}
      required={required}
      select
      SelectProps={{
        native: true
      }}
      value={value}
      variant="outlined">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
  editMode: PropTypes.object,
  inputHandler: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
  state: PropTypes.object,
  validationHandler: PropTypes.func
};

export default SelectInput;

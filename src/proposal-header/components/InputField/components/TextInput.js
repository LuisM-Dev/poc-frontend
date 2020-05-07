import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TextInput = props => {
  const { className, editMode, inputHandler, label, state } = props;
  const { error, message, value, required } = state;
  const { status } = editMode;
  const [inputValue, setInputValue] = useState(value);

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  const blurHandler = event => {
    inputHandler(event.target.value);
  };

  return (
    <TextField
      className={className}
      data-test={'text-field'}
      disabled={!status}
      error={error}
      fullWidth
      helperText={message}
      inputProps={{ 'data-test': 'text-input' }}
      label={label}
      margin="dense"
      onBlur={blurHandler}
      onChange={changeHandler}
      required={required}
      value={inputValue}
      variant="outlined"
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  editMode: PropTypes.object,
  inputHandler: PropTypes.func,
  label: PropTypes.string,
  state: PropTypes.object,
  validationHandler: PropTypes.func
};

export default TextInput;

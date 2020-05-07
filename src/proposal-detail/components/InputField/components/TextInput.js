import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TextInput = props => {
  const { className, editMode, inputHandler, label, state } = props;
  const { error, message, value } = state;

  const changeHandler = event => {
    inputHandler(event.target.value);
  };

  return (
    <TextField
      className={className}
      data-test={'text-field'}
      disabled={!editMode.status}
      error={error}
      fullWidth
      helperText={message}
      inputProps={{ 'data-test': 'text-input' }}
      label={label}
      margin="dense"
      onChange={changeHandler}
      value={value}
      variant="outlined"
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  editMode: PropTypes.object,
  inputHandler: PropTypes.func,
  label: PropTypes.string,
  state: PropTypes.object
};

export default TextInput;

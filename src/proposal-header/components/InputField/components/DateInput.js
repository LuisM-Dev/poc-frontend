import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const DateInput = props => {
  const { state, label, className, editMode, inputHandler } = props;
  const { error, message, value, required } = state;
  const { status } = editMode;

  const changeHandler = event => {
    inputHandler(event.target.value);
  };

  return (
    <TextField
      className={className}
      data-test={'date-field'}
      disabled={!status}
      error={error}
      fullWidth
      helperText={message}
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{ 'data-test': 'date-input' }}
      label={label}
      margin="dense"
      onChange={changeHandler}
      required={required}
      type={'date'}
      value={value}
      variant="outlined"
    />
  );
};

DateInput.propTypes = {
  className: PropTypes.string,
  editMode: PropTypes.object,
  inputHandler: PropTypes.func,
  label: PropTypes.string,
  state: PropTypes.object,
  validationHandler: PropTypes.func
};

export default DateInput;

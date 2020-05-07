import React from 'react';
import PropTypes from 'prop-types';
import { Switch, FormControlLabel, FormHelperText } from '@material-ui/core';

const SwitchInput = props => {
  const { state, label, className, editMode, inputHandler } = props;
  const { error, message, value, required } = state;
  const { status } = editMode;

  const changeHandler = event => {
    inputHandler(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        className={className}
        control={
          <Switch
            checked={value}
            color="primary"
            data-test={'switch-input'}
            onChange={changeHandler}
            value="checked"
          />
        }
        data-test={'switch-field'}
        disabled={!status}
        label={label}
        required={required}
      />
      {error && <FormHelperText>{message}</FormHelperText>}
    </>
  );
};

SwitchInput.propTypes = {
  className: PropTypes.string,
  editMode: PropTypes.object,
  inputHandler: PropTypes.func,
  label: PropTypes.string,
  state: PropTypes.object,
  validationHandler: PropTypes.func
};

export default SwitchInput;

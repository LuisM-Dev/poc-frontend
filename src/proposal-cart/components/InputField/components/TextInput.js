import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TextInput = props => {
  const { label, value } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        readOnly: true
      }}
      label={label}
      margin="dense"
      value={value}
      variant="outlined"
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;

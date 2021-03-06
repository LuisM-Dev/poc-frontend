import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonInput = props => {
  const { color, editMode, inputHandler, label, variant } = props;

  const clickHandler = () => {
    inputHandler();
  };

  return (
    <Button
      color={color}
      disabled={!editMode.status}
      onClick={clickHandler}
      variant={variant}>
      {label}
    </Button>
  );
};

ButtonInput.propTypes = {
  color: PropTypes.string,
  editMode: PropTypes.object,
  inputHandler: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.string
};

export default ButtonInput;

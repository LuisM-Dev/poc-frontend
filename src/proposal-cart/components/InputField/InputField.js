import React from 'react';
import { TextInput, ButtonInput } from './components';
import PropTypes from 'prop-types';
import { useStore } from '../../store';

const InputField = props => {
  const { id, type } = props;
  const state = useStore()[0];
  const { products, edit } = state;

  if (type === 'button') {
    return <ButtonInput editMode={edit} {...props} />;
  }
  return <TextInput state={products.prices[id]} {...props} />;
};

InputField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};

export default InputField;

import React from 'react';
import { TextInput, ButtonInput } from './components';
import PropTypes from 'prop-types';
import {
  useStore,
  SAVE_FIELD,
  VALIDATE_FIELD,
  SEARCH_ASSET,
  LOADING_BAR
} from '../../store';

const InputField = props => {
  const { id, type } = props;
  const [state, dispatch] = useStore();
  const { asset, edit } = state;

  const inputHandler = value => {
    dispatch(SAVE_FIELD, { [id]: { value } });
    // dispatch(VALIDATE_FIELD, { [id]: value });
  };

  const searchHandler = () => {
    dispatch(LOADING_BAR, true);
    dispatch(SEARCH_ASSET);
  };

  if (type === 'button') {
    return (
      <ButtonInput editMode={edit} inputHandler={searchHandler} {...props} />
    );
  }
  return (
    <TextInput
      editMode={edit}
      inputHandler={inputHandler}
      state={asset[id]}
      {...props}
    />
  );
};

InputField.propTypes = {
  id: PropTypes.string
};

export default InputField;

import React from 'react';
import * as InputTypes from './components';
import PropTypes from 'prop-types';

import useStyles from './InputFieldStyle';
import { useStore, SAVE_FIELD } from '../../store';

const InputField = props => {
  const { id, type } = props;
  const classes = useStyles();
  const [state, dispatch] = useStore();
  const { proposal, edit } = state;

  const inputHandler = async value => {
    await dispatch(SAVE_FIELD, { [id]: { value } });
  };

  switch (type) {
    case 'switch':
      return (
        <InputTypes.SwitchInput
          className={classes.input}
          editMode={edit}
          inputHandler={inputHandler}
          state={proposal.fields[id]}
          {...props}
        />
      );
    case 'date':
      return (
        <InputTypes.DateInput
          className={classes.input}
          editMode={edit}
          inputHandler={inputHandler}
          state={proposal.fields[id]}
          {...props}
        />
      );
    case 'select':
      return (
        <InputTypes.SelectInput
          className={classes.input}
          editMode={edit}
          inputHandler={inputHandler}
          state={proposal.fields[id]}
          {...props}
        />
      );
    default:
      return (
        <InputTypes.TextInput
          className={classes.input}
          editMode={edit}
          inputHandler={inputHandler}
          state={proposal.fields[id]}
          {...props}
        />
      );
  }
};

InputField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string
};

export default InputField;

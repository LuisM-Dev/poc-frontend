import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

const RadioInput = props => {
  const { handleChange } = props;

  const quoteTypeOptions = [
    {
      value: 'TSS Distributor Transactional',
      label: 'TSS Distributor Transactional'
    },
    { value: 'TSS Direct Transactional', label: 'TSS Direct Transactional' }
  ];

  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={handleChange}>
        {quoteTypeOptions.map(option => (
          <FormControlLabel
            control={<Radio />}
            data-test={'radioInput-option'}
            key={option.label}
            label={option.label}
            value={option.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioInput.propTypes = {
  handleChange: PropTypes.func
};

export default RadioInput;

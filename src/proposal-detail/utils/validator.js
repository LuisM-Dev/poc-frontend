import validator from 'validator';

export const validateAlphaNumeric = (prevState, value) => {
  const textInput = validator.ltrim(value);
  const errorStatus = !validator.isAlphanumeric(textInput);
  return {
    value: textInput,
    error: errorStatus,
    message: errorStatus
      ? 'This field can only contain letters and/or numbers'
      : ''
  };
};

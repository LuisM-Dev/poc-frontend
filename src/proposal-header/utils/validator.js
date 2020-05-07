import { proposalHeadersRequired } from '../../admin';
import validator from 'src/proposal-header/core/utils/validator';

export const validateRequiredFields = proposal => {
  return proposalHeadersRequired().reduce((fields, field) => {
    if (proposal[field].value) {
      return {
        ...fields,
        [field]: {
          ...proposal[field],
          error: false,
          message: ''
        }
      };
    }
    return {
      ...fields,
      [field]: {
        ...proposal[field],
        error: true,
        message: 'This field is required'
      }
    };
  }, {});
};

export const validateHeader = proposal =>
  Object.values(proposal).find(field => field.error === true) === undefined;

export const validateOnlyLetters = value => {
  const textInput = validator.ltrim(value);
  const errorStatus = validator.matches(textInput, '[^A-Za-z ]+');
  return {
    value: textInput,
    error: errorStatus,
    message: errorStatus ? 'This field can only contain letters' : ''
  };
};

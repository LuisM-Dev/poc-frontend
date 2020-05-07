import axios from 'axios';
import { SAVE_PROPOSAL } from './APIs';
import { mapToRequestBody } from './ServiceMapper';

export default async proposal => {
  const body = mapToRequestBody(proposal);
  try {
    const response = await axios.post(SAVE_PROPOSAL, body);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
  // return mapToProposalHeaders(response.data);
};

// import validator from 'validator';
//
// const isValid = inputValue => {
//   if (typeof inputValue === 'boolean') {
//     return {
//       value: inputValue,
//       error: false,
//       message: ''
//     };
//   }
//   const textInput = inputValue ? validator.ltrim(inputValue) : '';
//   const errorStatus = validator.matches(textInput, '[^A-Za-z ]+');
//   return {
//     error: errorStatus,
//     message: errorStatus ? 'This field can only contain letters' : ''
//   };
// };
//
// export default proposal => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const validatedProposal = Object.keys(proposal).reduce(
//         (validateFields, field) => {
//           const validatedField = isValid(proposal[field].value);
//           if (validatedField.error && field !== 'id') {
//             return {
//               ...validateFields,
//               [field]: { ...validatedField }
//             };
//           }
//           return {
//             ...validateFields
//           };
//         },
//         {}
//       );
//       resolve(validatedProposal);
//     }, 1000);
//   });
// };

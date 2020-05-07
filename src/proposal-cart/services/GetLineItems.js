import axios from 'axios';
import { mapToRequestBody, mapToWebModel } from './ServiceMapper';
import { SEARCH_PRODUCTS } from './APIs';

export default async state => {
  const body = mapToRequestBody(state.proposal.id, state.proposal.type);
  console.log(body);
  try {
    const response = await axios.post(SEARCH_PRODUCTS, body);
    return mapToWebModel(response.data);
  } catch (e) {
    // return e.response.data;
    return e.response.data;
  }
};

// export default state => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const mockData = productsMock.lineItems.map(item => ({
//         ...item,
//         id: item.servicePid,
//         warrantyEndDate: item.displayOutput.warrantyEndDate,
//         serial: item.displayOutput.serial,
//         serviceLevel: item.displayOutput.serviceLevel,
//         description: item.displayOutput.referenceAssetDescription,
//         type: item.displayOutput.referenceAssetId.split('-')[0],
//         model: item.displayOutput.referenceAssetId.split('-')[1],
//         messages: 'messages' in item ? item.messages[0].messageText : ''
//       }));
//       resolve(mockData);
//     }, 1000);
//   });
// };

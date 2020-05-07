import axios from 'axios';
import { SEARCH_REF_ASSET } from './APIs';
import { mapToRequestBody, mapToWebModel } from './ServiceMapper';

export default async asset => {
  const body = mapToRequestBody(asset);
  try {
    const response = await axios.post(SEARCH_REF_ASSET, body);
    return mapToWebModel(response.data);
  } catch (e) {
    return e.response.data;
  }
};

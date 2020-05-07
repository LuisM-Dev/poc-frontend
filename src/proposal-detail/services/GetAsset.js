import axios from 'axios';
import { GET_REF_ASSET } from './APIs';
import { mapToGetRequestBody, mapToWebModel } from './ServiceMapper';

export default async asset => {
  const body = mapToGetRequestBody(asset);
  try {
    const response = await axios.post(GET_REF_ASSET, body);
    return mapToWebModel(response.data);
  } catch (e) {
    return e.response.data;
  }
};

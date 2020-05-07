import axios from 'axios';
import { GET_PROPOSALS } from './APIs';
import { mapToWeb } from './ServiceMapper';

export default async () => {
  try {
    const response = await axios.get(GET_PROPOSALS);
    return mapToWeb(response.data);
  } catch (e) {
    return e.response.data;
  }
};

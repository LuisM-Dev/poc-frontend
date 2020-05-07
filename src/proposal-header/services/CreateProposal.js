import axios from 'axios';
import { CREATE_PROPOSAL } from './APIs';
import { mapToProposalHeaders } from './ServiceMapper';

export default async proposalType => {
  try {
    const response = await axios.post(CREATE_PROPOSAL, { proposalType });
    return mapToProposalHeaders(response.data);
  } catch (e) {
    return e.response.data;
  }
};

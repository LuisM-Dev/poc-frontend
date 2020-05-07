import { getProposals } from '../../services';

export const middleware = {
  GET_ALL_PROPOSALS: async () => {
    return await getProposals();
  },
  LOADING_BAR: (state, payload) => {
    return payload;
  }
};

import { createProposal, saveProposal } from '../../services';

export const middleware = {
  CREATE_PROPOSAL: async (state, payload) => {
    return await createProposal(payload);
  },
  EDIT_PROPOSAL: state => {
    return { proposalPrev: { ...state.proposal } };
  },
  SAVE_PROPOSAL: async state => {
    const isProposalValid = await saveProposal(state.proposal);
    return isProposalValid;
  },
  CANCEL_PROPOSAL: async state => {
    return { proposal: { ...state.proposalPrev } };
  },
  SAVE_FIELD: (state, payload) => {
    return payload;
  }
};

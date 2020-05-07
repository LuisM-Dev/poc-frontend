import { saveProposal, searchAsset, getAsset } from '../../services';

export const middleware = {
  EDIT_ASSET: state => {
    return { assetPrev: { ...state.asset } };
  },
  SEARCH_ASSET: async state => {
    const searched = await searchAsset(state);
    return searched;
  },
  SAVE_PROPOSAL: async state => {
    const savedAssets = await saveProposal(state.asset);
    return savedAssets;
  },
  CANCEL_PROPOSAL: async state => {
    return { ...state.assetPrev };
  },
  SAVE_FIELD: (state, payload) => {
    return payload;
  },
  SAVE_ASSET: (state, payload) => {
    return payload;
  },
  SAVE_PROPOSAL_ID_TYPE: (state, payload) => {
    return payload;
  },
  LOADING_BAR: (state, payload) => {
    return payload;
  },
  GET_ASSET: async state => {
    const foundAssets = await getAsset(state);
    return foundAssets;
  }
};

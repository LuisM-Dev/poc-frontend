export const actions = {
  GET_ALL_PROPOSALS: (state, proposals) => {
    return {
      ...state,
      proposals: {
        all: [...state.proposals.all, ...proposals],
        checked: []
      },
      searching: {
        status: false
      }
    };
  },
  LOADING_BAR: (state, loadStatus) => {
    return {
      ...state,
      searching: {
        status: loadStatus
      }
    };
  }
};

const updateState = (oldState, field) => {
  const propertyKey = Object.keys(field);

  const update = {
    ...oldState.products,
    [propertyKey]: field[propertyKey]
  };
  return { products: update };
};

export const actions = {
  SEARCH_PRODUCTS: (state, products) => {
    if (products.errors) {
      return {
        ...state,
        searching: {
          status: false
        }
      };
    }
    return {
      ...state,
      products: {
        ...state.products,
        lineItems: [...products]
      },
      searching: {
        status: false
      }
    };
  },
  RETRIEVE_PRICES: (state, prices) => {
    return updateState(state, {
      prices: prices
    });
  },
  CHECKED_PRODUCTS: (state, field) => {
    return updateState(state, field);
  },
  EDIT_PRODUCTS: (state, products) => {
    return {
      ...state,
      ...products,
      edit: { status: true }
    };
  },
  SAVE_PROPOSAL: (state, products) => {
    return {
      ...state,
      products: {
        ...state.products,
        ...products
      },
      edit: { status: false }
    };
  },
  CANCEL_PROPOSAL: (state, products) => {
    return {
      ...state,
      ...products,
      edit: { status: false }
    };
  },
  LOADING_BAR: (state, loadStatus) => {
    return {
      ...state,
      searching: {
        status: loadStatus
      }
    };
  },
  SAVE_PROPOSAL_ID_TYPE: (state, info) => {
    return {
      ...state,
      proposal: {
        ...info
      }
    };
  }
};

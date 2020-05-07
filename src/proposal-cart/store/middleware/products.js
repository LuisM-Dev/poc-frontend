import { productsMock } from '../../helpers/proposal';
import { getPrices, getProducts } from '../../services';

const updateState = (oldState, field) => {
  const propertyKey = Object.keys(field);

  const update = {
    ...oldState.products,
    [propertyKey]: field[propertyKey]
  };
  return { products: update };
};

export const middleware = {
  SEARCH_PRODUCTS: async state => {
    const products = await getProducts(state);
    return products;
  },
  RETRIEVE_PRICES: async state => {
    const mockPrices = await getPrices();
    return mockPrices;
  },
  CHECKED_PRODUCTS: (state, product) => {
    return product;
  },
  EDIT_PRODUCTS: (state, field) => {
    return { productsPrev: { ...state.products } };
  },
  SAVE_PROPOSAL: (state, field) => {
    return field;
  },
  CANCEL_PROPOSAL: (state, field) => {
    return { products: { ...state.productsPrev } };
  },
  LOADING_BAR: (state, loadStatus) => {
    return loadStatus;
  },
  SAVE_PROPOSAL_ID_TYPE: (state, payload) => {
    return payload;
  }
};

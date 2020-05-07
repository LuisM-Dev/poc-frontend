import { initStore } from '../store';
import { actions } from '../actions';
import { middleware } from '../middleware';

const configureStore = () => {
  initStore(actions, middleware, {
    proposal: { id: '', type: '' },
    products: {
      lineItems: [],
      checked: [],
      prices: {
        totalMonthly: '',
        totalOneTime: '',
        totalYearly: '',
        grandTotal: ''
      }
    },
    searching: { status: false },
    edit: { status: false },
    nextStage: { status: false }
  });
};

export default configureStore;

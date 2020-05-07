import { initStore } from '../store';
import { actions } from '../actions';
import { middleware } from '../middleware';

const assetInit = {
  installedCustomerNumber: { value: '', error: false, message: '' },
  type: { value: '', error: false, message: '' },
  model: { value: '', error: false, message: '' },
  assetSerialNumber: { value: '', error: false, message: '' },
  searched: [],
  searchedChecked: [],
  selected: [],
  selectedChecked: []
};

const configureStore = () => {
  initStore(actions, middleware, {
    proposal: { id: '', type: '' },
    asset: { ...assetInit },
    searching: { status: false },
    edit: { status: false },
    nextStage: { status: false }
  });
};

export default configureStore;

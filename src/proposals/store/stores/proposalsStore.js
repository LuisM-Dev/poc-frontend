import { initStore } from '../store';
import { actions } from '../actions/proposals';
import { middleware } from '../middleware';

const configureStore = () => {
  initStore(actions, middleware, {
    proposals: { all: [], checked: [] },
    searching: { status: false }
  });
};

export default configureStore;

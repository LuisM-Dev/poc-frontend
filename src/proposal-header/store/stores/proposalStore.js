import { initStore } from '../store';
import { actions } from '../actions';
import { middleware } from '../middleware';

const configureStore = () => {
  initStore(actions, middleware, {
    proposal: {},
    edit: { status: false },
    nextStage: { status: false }
  });
};

export default configureStore;

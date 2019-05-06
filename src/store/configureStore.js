import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../reducers';

const configureStore = initialState => {
  const middleware = applyMiddleware(thunk);

  return createStore(appReducer, initialState, middleware);
};

export default configureStore;

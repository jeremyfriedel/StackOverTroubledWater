import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

import rootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);


export default configureStore;
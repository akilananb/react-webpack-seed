import { applyMiddleware, createStore } from 'redux';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers';
import StoreState from './StoreState';

export default function configureStore() {

  const store = createStore<StoreState>(
    reducers,
    applyMiddleware(reduxImmutableStateInvariant.default())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

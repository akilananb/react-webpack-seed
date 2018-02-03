import { applyMiddleware, createStore, combineReducers } from 'redux';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as reducers from '../ducks';
import IStoreState from './IStoreState';

export default function configureStore() {
  const rootReducer = combineReducers<IStoreState>(reducers);
  const store = createStore<IStoreState>(
    rootReducer,
    applyMiddleware(reduxImmutableStateInvariant.default())
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextRootReducer = combineReducers<IStoreState>(require('../ducks'));
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

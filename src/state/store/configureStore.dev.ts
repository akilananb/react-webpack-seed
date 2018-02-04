import { applyMiddleware, createStore, combineReducers } from 'redux';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { auth } from '../ducks';
import { IStoreState }  from '../../types';

export default function configureStore() {
  const rootReducer = combineReducers<IStoreState>({
    isAuthenticated: auth
  });
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

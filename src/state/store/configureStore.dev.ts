import { applyMiddleware, createStore, combineReducers } from 'redux';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from '../ducks';
import { IStoreState } from '../../types';

export default function configureStore() {
  const rootReducer = combineReducers<IStoreState>(reducers);
  const store = createStore<IStoreState>(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant.default()))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      store.replaceReducer(combineReducers<IStoreState>(require('../ducks')));
    });
  }

  return store;
}

import { createStore, combineReducers } from 'redux';
import { auth } from '../ducks';
import { IStoreState } from '../../types';

export default function configureStore() {
  const rootReducer = combineReducers<IStoreState>({
    isAuthenticated: auth
  });
  return createStore<IStoreState>(rootReducer);
}

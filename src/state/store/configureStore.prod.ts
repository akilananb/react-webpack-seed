import { applyMiddleware, createStore, combineReducers } from 'redux';
import * as reducers from '../ducks';
import IStoreState from './IStoreState';

export default function configureStore() {
  const rootReducer = combineReducers<IStoreState>(reducers);
  return createStore<IStoreState>(rootReducer);
}

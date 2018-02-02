import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import StoreState from './StoreState';

export default function configureStore() {
  return createStore<StoreState>(reducers);
}

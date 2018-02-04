import { handleAction, Action } from 'redux-actions';
import { doLogin } from './actions';

const isAuthenticated: boolean = false;

export default handleAction<any, any>(
  doLogin,
  (state: any, action: Action<any>) => ({
    isAuthenticated
  }),
  isAuthenticated
);

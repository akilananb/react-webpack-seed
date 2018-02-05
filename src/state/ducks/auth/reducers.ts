import { handleAction, Action } from 'redux-actions';
import { doLogin } from './actions';

const initialState = { 
  isAuthenticated : false
};

export default handleAction<any, any>(
  doLogin,
  (state: any, action: Action<any>) => ({
    isAuthenticated: true
  }),
  initialState
);

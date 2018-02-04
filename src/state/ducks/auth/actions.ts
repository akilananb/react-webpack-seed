import { createAction } from 'redux-actions';

const doLogin = createAction('LOGIN');
const doLogout = createAction('LOGOUT');

export { doLogin, doLogout };

import { createAction } from 'redux-actions';

const doLogin: any = createAction('LOGIN');
const doLogout: any = createAction('LOGOUT');

export { doLogin, doLogout };

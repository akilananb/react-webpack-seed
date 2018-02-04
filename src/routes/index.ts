import { Login, Todos } from '../views/pages';
import { withAuthentication } from '../views/hocs';

interface IRouteProps {
  readonly path: string;
  readonly component: any;
  readonly exact: boolean;
  readonly state ?: object;
}

interface IRoutesProps extends Array<IRouteProps> {}

const routes: IRoutesProps = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/protected',
    component:  withAuthentication()(Todos),
    exact: true,
    state: { modal: true }
  }
];

export default routes;

import { RouteComponentProps } from 'react-router-dom';

interface IRouteProps {
  readonly path: string;
  readonly component: any;
  readonly exact: boolean;
}

interface IRoutesProps extends Array<IRouteProps> {}

const routes: IRoutesProps = [
  {
    path: 'login',
    component: 'test',
    exact: true
  }
];

export default routes;

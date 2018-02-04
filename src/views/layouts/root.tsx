import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';
import Styles from './css';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/protected">Protected Route</Link>
    </header>

    {routes.map(route => <Route key={route.path} {...route} />)}

    <Styles />
  </div>
);

export default App;

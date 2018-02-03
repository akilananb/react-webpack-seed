import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import configureStore from './state/store';
import Home from './components/home';
import { colors } from './theme';

interface IAppProps {}
interface IAppProps {}
const configuredStore = configureStore();

class App extends React.Component<IAppProps, IAppProps> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <Provider store={configuredStore}>
       <ThemeProvider theme={colors}>
          <Router key={Math.random()}>
            <React.Fragment>
              <Route exact path={'/'} component={Home} />
            </React.Fragment>
          </Router>
        </ThemeProvider>
    </Provider>
    );
  }
}

export default App;

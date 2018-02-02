import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import Home from './components/home';
import { colors } from './theme';

interface TodoTextInputProps {}
interface TodoTextInputState {}
const configuredStore = configureStore();

const global = injectGlobal`
body{
  margin:0;
  padding:.2rem;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;
}`;

class App extends React.Component<TodoTextInputProps, TodoTextInputState> {

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

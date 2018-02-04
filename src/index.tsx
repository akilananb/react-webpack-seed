import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './state/store';
import { Root } from './views/layouts';

const mount: any = document.getElementById('root');
const configuredStore = configureStore();

class App extends Component<any> {
  constructor(props: any, context: any) {
    super(props, context);
  }
  render() {
    return (
      <Provider store={configuredStore}>
        <Router>
           <Root />
        </Router>
      </Provider>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
    const NewApp = App;
    ReactDOM.render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      mount as HTMLElement
    );
  }
} else {
  ReactDOM.render(<App />, mount as HTMLElement);
}

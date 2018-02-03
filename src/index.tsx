import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './state/store';
import { Root } from './views/layouts';

interface IAppProps {}
interface IAppProps {}
interface IRequireImport {
  default: any;
}

const mount: any = document.getElementById('root');
const configuredStore = configureStore();

class App extends React.Component<IAppProps, IAppProps> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <Provider store={configuredStore}>
        <div>
          Welcome to react redux starter kit
        </div>
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

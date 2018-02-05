import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const mount: any = document.getElementById('root');

ReactDOM.render(
  <AppContainer warnings={false}>
    <App />
  </AppContainer>,
  mount
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./app', () => {
      const RootEle = require('./app').default;
      ReactDOM.render(
        <AppContainer  warnings={false}>
          <RootEle />
        </AppContainer>,
        mount
      );
    });
  }
} else {
  ReactDOM.render(<App />, mount as HTMLElement);
}

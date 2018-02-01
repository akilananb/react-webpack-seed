// main.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
const mount = document.getElementById('root');
if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    mount as HTMLElement
  );

  interface RequireImport {
    default: any;
  }

  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require<RequireImport>('./App').default;
      ReactDOM.render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        mount as HTMLElement
      );
    });
  }
} else {
  ReactDOM.render(<App />, mount as HTMLElement);
}

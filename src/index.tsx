// main.js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root') as HTMLElement
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
            document.getElementById('root')
        );
    });
}

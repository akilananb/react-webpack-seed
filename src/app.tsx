import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './state/store';
import { Root } from './views/layouts';
const configuredStore = configureStore();

export default class App extends Component<any> {
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
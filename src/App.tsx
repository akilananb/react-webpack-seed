import * as React from 'react';
import Test from './Test';
interface TodoTextInputProps {}
interface TodoTextInputState {}

class App extends React.Component<TodoTextInputProps, TodoTextInputState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {};
  }
  render() {
    return <div>Welcome to React Starter Kit</div>;
  }
}

export default App;

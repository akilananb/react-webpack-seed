import * as React from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../../../state/ducks/auth';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';

interface ILoginProps {
  handleLogin: Dispatch<Action<any>>;
}

class Login extends React.Component<ILoginProps> {
  render() {
    const { handleLogin } = this.props;
    return (
      <div>
        <input type="text" />
        <input type="password" />
        <input type="button" value="login" onClick={handleLogin} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
  handleLogin: () => dispatch(doLogin())
});

export default connect<any, any>(null, mapDispatchToProps)(Login);

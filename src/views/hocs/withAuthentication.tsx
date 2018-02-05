import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface IState {
  clickCount: number;
}

interface IExternalProps {
  isAuthenticated: boolean;
}

export interface IInjectedProps {
  clickCount: number;
}

interface IOptions {
  debug?: boolean;
}

const withAuthentication = ({ debug = false }: IOptions = {}) => <
  TOriginalProps extends {}
>(
  Component:
    | React.ComponentClass<TOriginalProps & IInjectedProps>
    | React.StatelessComponent<TOriginalProps & IInjectedProps>
) => {
  type ResultProps = TOriginalProps & IExternalProps;
  const result = class WithAuthentication extends React.Component<
    ResultProps,
    IState
  > {
    static displayName = `withAuthentication(${Component.displayName ||
      Component.name})`;

    constructor(props: ResultProps) {
      super(props);
    }

    render(): JSX.Element {
      if (!this.props.isAuthenticated) {
        return <Redirect to="/login" />;
      }

      return <Component {...this.props} {...this.state} />;
    }
  };

  const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(result);
};

export default withAuthentication;

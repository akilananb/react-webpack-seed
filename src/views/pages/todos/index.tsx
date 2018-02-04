import * as React from 'react';
import { IInjectedProps } from '../../hocs/withAuthentication';

interface IDemoProps {
  text: string;
}

const Todos = (props: IDemoProps & IInjectedProps): JSX.Element => {
  return (
    <div>
      hello world
    </div>
  );
};

export default Todos;

import { injectGlobal } from 'styled-components';

export default () => {
/* tslint:disable */
  injectGlobal` 
        body {
            background-color: levander;
            color: navy-blue;
            div {
                padding: 4px;
            }

            a {
                padding: 0 10px;
                text-decoration: none;
            }

            a:hover {
                color: blue;
            }
        }
    `;
/* tslint:enable */
  return null;
};

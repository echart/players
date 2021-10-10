import React from 'react';
import propTypes from 'prop-types';

import './Container.scss';

function Container({ children }) {
  return <main className="container" data-testid="container">
    {children}
  </main>
}

Container.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element
  ]),
}

export default Container;

import React from 'react';

import logo from '~assets/oldLogo.png';
import './ComingSoon.css';

const ComingSoon = () => (
  <div className="Coming-soon-container">
    <header className="Coming-soon-header">
      <h1>
        Coming Soon
      </h1>
      <p>
        See progress on
        {' '}
        <a href="https://github.com/danielnichols/danielnichols.github.io">Github</a>
      </p>
    </header>
  </div>
);

export default ComingSoon;

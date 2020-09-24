

import React from 'react';
import errorMsg from 'data/error-msg.json';

const GlobalError = ({ error }) =>
  error !== undefined && (
    <div id="error">
      <div className="error">
        <div className="error-code">
          <h1>
            {error.code
              .toString()
              .split('')
              .map((digit, key) => (digit !== '0' ? digit : <span key={key}>{digit}</span>))}
          </h1>
        </div>
        <p>{errorMsg[error.code.toString()]}</p>
        <a href="/">Home page</a>
      </div>
    </div>
  );

export default GlobalError;

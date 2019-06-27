import * as React from 'react';

const LoaderSpinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{message}</div>
    </div>
  );
};

LoaderSpinner.defaultProps = {
  message: 'Loading...',
};

export default LoaderSpinner;

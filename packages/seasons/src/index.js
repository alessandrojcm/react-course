import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import LoaderSpinner from './LoaderSpinner';
import SeasonDisplay from './SeasonDisplay.js';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErroMessage] = useState('');

  const getLatitude = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErroMessage(err.message),
    );
  };

  useEffect(() => getLatitude(), []);

  if (errorMessage && !lat) {
    return <div>Error: {errorMessage}</div>;
  } else if (!errorMessage && lat) {
    return <SeasonDisplay lat={lat} />;
  }

  return <LoaderSpinner message={'Please accept the location request.'} />;
};

render(<App />, document.querySelector('#root'));

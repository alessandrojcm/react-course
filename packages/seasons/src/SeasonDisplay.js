import React, { useState, useEffect } from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
  summer: { text: "Let's hit the beach!", icon: 'sun' },
  winter: { text: "Burr it's chilly!", icon: 'snowflake' },
};

const SeasonDisplay = ({ lat }) => {
  const [season, setSeason] = useState('');

  const getSeason = (month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? setSeason('summer') : setSeason('winter');
    }

    return lat < 0 ? setSeason('summer') : setSeason('winter');
  };

  useEffect(() => getSeason(new Date().getMonth(), []));

  if (!season) {
    return <div>Loading...</div>;
  }

  const { text, icon } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;

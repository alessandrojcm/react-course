import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: { text: "Let's hit the beach!", icon: 'sun' },
  winter: { text: "Burr it's chilly!", icon: 'snowflake' },
};

class SeasonDisplay extends React.Component {
  state = { season: null };

  componentDidMount() {
    this.getSeason(new Date().getMonth());
  }

  render() {
    if (!this.state.season) {
      return <div>Loading...</div>;
    }
    const { text, icon } = seasonConfig[this.state.season];
    return (
      <div className={`season-display ${this.state.season}`}>
        <i className={`icon-left massive ${icon} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${icon} icon`} />
      </div>
    );
  }

  getSeason(month) {
    if (month > 2 && month < 9) {
      return this.props.lat > 0
        ? this.setState({ season: 'summer' })
        : this.setState({ season: 'winter' });
    }

    return this.props.lat < 0
      ? this.setState({ season: 'summer' })
      : this.setState({ season: 'winter' });
  }
}

export default SeasonDisplay;

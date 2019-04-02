import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoaderSpinner from './LoaderSpinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  getLatitude() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message }),
    );
  }

  componentDidMount() {
    this.getLatitude();
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <LoaderSpinner message={'Please accept the location request.'} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

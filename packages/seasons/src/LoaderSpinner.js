import * as React from 'react';

class LoaderSpinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.props.message}</div>
      </div>
    );
  }
}

LoaderSpinner.defaultProps = {
  message: 'Loading...',
};

export default LoaderSpinner;

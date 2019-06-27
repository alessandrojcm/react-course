import * as React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select a song!</div>;
  }

  return (<section >
    <h3>Details for:</h3>
    <p>
      Title: {song.title}
    </p>

  </section>);
};

const mapStateToProps = ({ selectedSong }) => ({ song: selectedSong });

export default connect(mapStateToProps)(SongDetails);

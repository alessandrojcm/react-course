import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

const SongList = ({ songs, selectSong }) => {
  return (
    <section className="ui divided list">
      {songs.map((song, index) => (
        <div className="item" key={index}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      ))}
    </section>
  );
};

const mapStateToProps = ({ songs }) => ({
  songs,
});

export default connect(
  mapStateToProps,
  {
    selectSong,
  },
)(SongList);

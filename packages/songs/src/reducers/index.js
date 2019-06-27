import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Everlong', duration: '5:15' },
    { title: 'My Hero', duration: '4:35' },
    { title: "You're the best thing about me", duration: '3:15' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

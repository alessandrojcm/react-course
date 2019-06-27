import React from 'react';
import './video-item.css';

const VideoItem = ({ item, setSelected }) => {
  return (
    <article
      className="video-item item"
      onClick={() => setSelected(() => item)}
    >
      <img
        alt={item.snippet.title}
        className="ui image"
        src={item.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <header className="header">{item.snippet.title}</header>
      </div>
    </article>
  );
};

export default VideoItem;

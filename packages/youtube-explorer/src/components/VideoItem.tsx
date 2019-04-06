import React, { Dispatch, SetStateAction } from 'react';
import { YoutubeVideo } from '../models/youtube-video';
import './video-item.css';

const VideoItem = ({
  item,
  setSelected,
}: {
  item: YoutubeVideo;
  setSelected: Dispatch<SetStateAction<YoutubeVideo | undefined>>;
}) => {
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

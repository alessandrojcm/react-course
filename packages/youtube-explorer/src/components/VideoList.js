import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, setSelected }) => {
  return (
    <section className="ui relaxed divided list">
      {videos.map((item) => (
        <VideoItem
          key={item.id.videoId}
          item={item}
          setSelected={setSelected}
        />
      ))}
    </section>
  );
};

export default VideoList;

import React, { Dispatch, SetStateAction } from 'react';
import { YoutubeVideo } from '../models/youtube-video';
import VideoItem from './VideoItem';

const VideoList = ({
  videos,
  setSelected,
}: {
  videos: YoutubeVideo[];
  setSelected: Dispatch<SetStateAction<YoutubeVideo | undefined>>;
}) => {
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

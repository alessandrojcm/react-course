import React, { useEffect, useState } from 'react';

import youtubeAPI from '../utils/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

const App = () => {
  const [input, setInput] = useState('Cars');
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (input.trim().length === 0) return;

    youtubeAPI.get('/search', { params: { q: input } }).then((res) => {
      setVideos(res.data.items);
    });
  }, [input]);

  useEffect(() => {
    if (videos.length === 0) return;
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <main>
      <SearchBar input={input} setInput={setInput} />
      <div className="ui grid">
        <div className="ui row">
          <article className="eleven wide column">
            <VideoDetail item={selectedVideo} />
          </article>
          <aside className="five wide column">
            <VideoList videos={videos} setSelected={setSelectedVideo} />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default App;

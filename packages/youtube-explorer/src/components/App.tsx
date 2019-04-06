import * as React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { Handler, ObservableComponent, useRefract } from 'refract-rxjs';
import { from, Observable } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import youtubeAPI from '../utils/youtube';
import { YoutubeResponse } from '../models/youtube-response';
import { YoutubeVideo } from '../models/youtube-video';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

const inputAperture: (
  component: ObservableComponent,
) => Observable<YoutubeVideo[]> = (component) => {
  return component.observe<string>('input').pipe(
    filter((val: string) => val.trim().length > 0),
    debounceTime(1000),
    switchMap((term) =>
      from(youtubeAPI.get<YoutubeResponse>('/search', { params: { q: term } })),
    ),
    map((res) => res.data.items),
  );
};

const selectionAperture: (
  component: ObservableComponent,
) => Observable<YoutubeVideo> = (component) => {
  return component.observe('selectedVideo');
};

const selectionHandler: Handler<
  { selectedVideo: YoutubeVideo | undefined },
  YoutubeVideo
> = () => (effect: YoutubeVideo) => {
  console.log(effect);
};

const App = () => {
  const [input, setInput] = useState('Cars');
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YoutubeVideo>();

  const handler: Handler<{ input: string }, YoutubeVideo[]> = () => (
    effect,
  ) => {
    setVideos(effect);
    setSelectedVideo(effect[0]);
  };

  useRefract(inputAperture, { input }, { handler });
  useRefract(
    selectionAperture,
    { selectedVideo },
    { handler: selectionHandler },
  );

  return (
    <main>
      <SearchBar input={input} setInput={setInput} />
      <div className="ui grid">
        <div className="ui row">
          <article className="eleven wide column">
            <VideoDetail item={selectedVideo as YoutubeVideo} />
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

import React from 'react';

import SongList from './SongList';
import SongDetails from "./SongDetails";

const App = (props) => {
  return (
    <main className="ui container grid">
      <section className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </section>
    </main>
  );
};

export default App;

import React from 'react';
import PostList from './PostList.jsx';

import 'semantic-ui-css/semantic.css';

const App = (props) => {
  return (
    <main className="ui container">
      <PostList />
    </main>
  );
};

export default App;

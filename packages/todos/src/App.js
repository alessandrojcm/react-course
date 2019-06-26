import React, { useState } from 'react';
import Item from './components/Item';
import ResourceList from './components/ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <main className={'ui container'}>
      <nav className={'ui secondary pointing menu'}>
        <Item callback={() => setResource('posts')} label={'Posts'} />
        <Item callback={() => setResource('todos')} label={'Todos'} />
      </nav>
      <section>
        <ResourceList resource={resource} />
      </section>
    </main>
  );
};

export default App;

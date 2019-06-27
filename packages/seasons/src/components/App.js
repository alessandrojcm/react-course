import React, { useState, useEffect } from 'react';

import axios from '../utils/unsplash';
import { ImageList } from './ImageList';
import SearchBar from './SearchBar';

const App = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (input.trim().length === 0) return;

    axios
      .get('/search/photos', {
        params: {
          query: input,
        },
      })
      .then((res) => {
        setImages(
          res.data.results.map((image) => ({
            id: image.id,
            url: image.urls.regular,
            description: image.description,
          })),
        );
      });
  }, [input]);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar input={input} setInput={setInput} />
      <ImageList images={images} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const [urlList, setUrlList] = useState([]);

  useEffect(
    () => setUrlList(props.images.map((image) => <ImageCard image={image} />)),
    [props.images],
  );

  return <section className="image-list">{urlList}</section>;
};

ImageList.defaultProps = {
  images: [],
};

export { ImageList };

import React, { useEffect, useState } from 'react';

const ImageList = (props) => {
  const [urlList, setUrlList] = useState([]);

  useEffect(
    () =>
      setUrlList(
        props.images.map(({ url, id, description }) => (
          <img key={id} src={url} alt={description} />
        )),
      ),
    [props.images],
  );

  return <section className="image-list">{urlList}</section>;
};

ImageList.defaultProps = {
  images: [],
};

export { ImageList };

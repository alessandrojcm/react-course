import React, { useRef, useState } from 'react';

const ImageCard = ({ image }) => {
  const imageRef = useRef(null);
  const [spans, setSpans] = useState(0);
  console.log(image);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        src={image.url}
        key={image.id}
        alt={image.description}
        onLoad={() =>
          setSpans(
            Math.ceil(
              (imageRef && imageRef.current
                ? imageRef.current.clientHeight
                : 1) / 10,
            ),
          )
        }
      />
    </div>
  );
};

export default ImageCard;

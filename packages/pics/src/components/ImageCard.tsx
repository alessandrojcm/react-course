import React, { useRef, useState } from "react";
import { UnsplashImage } from "../models/unplash-image.model";

const ImageCard = ({ image }: { image: UnsplashImage }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [spans, setSpans] = useState(0);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        src={image.urls.regular}
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

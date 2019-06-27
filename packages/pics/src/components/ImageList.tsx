import React, { FC, useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import "./image-list.css";
import { UnsplashImage } from "../models/unplash-image.model";

interface Props {
  images: UnsplashImage[];
}

const ImageList: FC<Props> = (props: Props) => {
  const [urlList, setUrlList] = useState<JSX.Element[]>([]);

  useEffect(
    () =>
      setUrlList(
        props.images.map((image: UnsplashImage) => <ImageCard image={image} />),
      ),
    [props.images],
  );

  return <section className="image-list">{urlList}</section>;
};

ImageList.defaultProps = {
  images: [],
};

export { ImageList };

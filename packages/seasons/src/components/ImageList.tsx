import React, { FC, useEffect, useState } from "react";

interface Props {
  images: Array<{ url: string; id: string }>;
}

const ImageList: FC<Props> = (props: Props) => {
  const [urlList, setUrlList] = useState<JSX.Element[]>([]);

  useEffect(
    () =>
      setUrlList(
        props.images.map(({ url, id }: { url: string; id: string }) => (
          <img key={id} src={url} />
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

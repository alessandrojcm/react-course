import React from 'react';

const VideoDetail = ({ item }) => {
  if (!item) {
    return <section className="ui loader" />;
  }

  return (
    <article className="ui segment">
      <header className="ui header">{item.snippet.title}</header>
      <section className="ui embed">
        <iframe
          title="player"
          src={`https://youtube.com/embed/${item.id.videoId}`}
        />
      </section>
      <section className="">{item.snippet.description}</section>
    </article>
  );
};

export default VideoDetail;

import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import flv from 'flv.js';

import { fetchStream, setLoading } from '../../actions';
import { environment } from '../../environment';

const StreamShow = ({ stream, loading, fetchStream, match }) => {
  const videoRef = useRef();
  const [videoPlayer, setVideoPlayer] = useState(null);

  // Fetches the stream
  useEffect(() => {
    setLoading(true);
    fetchStream(match.params.id);
  }, []);

  // Checks if the stream exits, if it does, it sets the player
  // if not just returns. Runs every time the stream object changes.
  useEffect(() => {
    if (!stream) return;
    setVideoPlayer(() => {
      return flv.createPlayer({
        type: 'flv',
        url: environment.liveStreamUrl(stream.id),
      });
    });
  }, [stream]);

  // Checks if the video player has been built, if it does it loads this.
  // Otherwise it just returns. Runs every time videoplayer changes.
  useEffect(() => {
    if (!videoPlayer) return;
    videoPlayer.attachMediaElement(videoRef.current);
    videoPlayer.load();
    return () => videoPlayer.destroy();
  }, [videoPlayer]);

  if (loading) {
    return (
      <section className={'ui placeholder'}>
        <div className={'header'}>
          <div className={'rectangular image'} style={{ width: '100%' }} />
          <div className={'line'} />
          <div className={'line'} />
        </div>
      </section>
    );
  }

  // Only deestructures the object if the stream has been loaded.
  // We know that with the loading variable, we could also check if the
  // stream is defined.
  const { title, description } = stream;

  return (
    <section>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{title}</h1>
      <h5>{description}</h5>
    </section>
  );
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams.streams[match.params.id],
  loading: streams.loading,
});

export default connect(
  mapStateToProps,
  { fetchStream, setLoading },
)(StreamShow);

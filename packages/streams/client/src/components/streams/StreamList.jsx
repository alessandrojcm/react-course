import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';
import RenderLoading from '../../common/RenderLoading';

const StreamList = ({
  fetchStreams,
  loading,
  streams,
  currentUserId,
  isSignedIn,
}) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdminButtons = (stream) =>
    stream.userId === currentUserId && (
      <div className={'right floated content'}>
        <Link to={`streams/edit/${stream.id}`} className={'ui button primary'}>
          Edit
        </Link>
        <Link
          to={`streams/delete/${stream.id}`}
          className={'ui button negative'}
        >
          Delete
        </Link>
      </div>
    );

  const renderCreate = () =>
    isSignedIn && (
      <div style={{ textAlign: 'right' }}>
        <Link to={'/streams/new'} className={'ui button primary'}>
          Create stream
        </Link>
      </div>
    );

  const renderList = () => (
    <div className={'ui list'}>
      <RenderLoading loading={loading} />
      {streams.map((stream) => (
        <React.Fragment key={stream.id}>
          <div className={'item'}>
            <i className={'large middle aligned icon camera'} />
            <div className={'content'}>
              {renderAdminButtons(stream)}
              <Link to={`streams/${stream.id}`} className={'header'}>
                {stream.title}
              </Link>
              <div className={'description'}>{stream.description}</div>
            </div>
          </div>
        </React.Fragment>
      ))}
      {renderCreate()}
    </div>
  );

  return (
    <section className={'ui segment'}>
      <h2>Streams</h2>
      {renderList()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams.streams),
  currentUserId: state.auth.userId,
  loading: state.streams.loading,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { fetchStreams },
)(StreamList);

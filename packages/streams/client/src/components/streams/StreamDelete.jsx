import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import { deleteStream, fetchStream, setLoading } from '../../actions';
import { setLoadingButton } from '../../utils/setLoadingButton';
import history from '../../history';

const StreamDelete = ({
  stream,
  fetchStream,
  deleteStream,
  setLoading,
  loading,
  match,
}) => {
  const { title } = stream;

  const loadingButton = setLoadingButton(loading, 'negative');
  useEffect(() => {
    setLoading(true);
    fetchStream(match.params.id);
  }, []);

  const modalActions = () => {
    const onDeleteStream = () => {
      setLoading(true);
      deleteStream(stream.id);
      history.push('/');
    };

    return (
      <>
        <button className={loadingButton} onClick={onDeleteStream}>
          Delete
        </button>
        <Link to={'/'} className={'ui button'}>
          Cancel
        </Link>
      </>
    );
  };

  const renderContent = () => {
    if (loading) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream named ${title}?`;
  };

  return (
    <>
      <Modal
        header={'Delete stream'}
        content={renderContent()}
        actions={modalActions}
        onDismiss={() => history.push('/')}
      >
        {modalActions()}
      </Modal>
    </>
  );
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams.streams[match.params.id],
  loading: streams.loading,
});

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream, setLoading },
)(StreamDelete);

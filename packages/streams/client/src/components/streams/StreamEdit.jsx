import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { editStream, fetchStream, setLoading } from '../../actions';
import StreamForm from './StreamForm';
import RenderLoading from '../../common/RenderLoading';

const StreamEdit = ({
  stream,
  fetchStream,
  match,
  loading,
  setLoading,
  editStream,
}) => {
  const { title, description } = stream;

  useEffect(() => {
    setLoading(true);
    fetchStream(match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    setLoading(true);
    editStream({ ...formValues, id: stream.id });
  };

  return (
    <section>
      <RenderLoading loading={loading} />
      <h3>Edit Stream</h3>
      <StreamForm
        onSubmit={onSubmit}
        loading={loading}
        initialValues={{ title, description }}
      />
    </section>
  );
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams.streams[match.params.id],
  loading: streams.loading,
});

export default connect(
  mapStateToProps,
  { fetchStream, editStream, setLoading },
)(StreamEdit);

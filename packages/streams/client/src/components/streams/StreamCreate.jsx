import React from 'react';
import { connect } from 'react-redux';

import { createStream, setLoading } from '../../actions';
import StreamForm from './StreamForm';

const StreamCreate = ({ createStream, loading, setLoading }) => {
  const onSubmit = (formData) => {
    setLoading(true);
    createStream(formData);
  };

  return (
    <section>
      <h3>Stream create</h3>
      <StreamForm loading={loading} onSubmit={onSubmit} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.streams.loading,
});

export default connect(
  mapStateToProps,
  {
    createStream,
    setLoading,
  },
)(StreamCreate);

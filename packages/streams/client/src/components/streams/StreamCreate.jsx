import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createStream, setLoading } from '../../actions';
import InputField from '../../common/InputField';

const StreamCreate = ({ handleSubmit, createStream, loading, setLoading }) => {
  const [loadingButton, setLoadingButton] = useState('ui button primary');

  useEffect(() => {
    loading
      ? setLoadingButton('ui button disabled')
      : setLoadingButton('ui button primary');
  }, [loading]);

  const onSubmit = (formData) => {
    setLoading(true);
    createStream(formData);
  };

  return (
    <form className={'ui form error'} onSubmit={handleSubmit(onSubmit)}>
      <Field name={'title'} component={InputField} label={'Enter a title'} />
      <br />
      <Field
        name={'description'}
        component={InputField}
        label={'Enter a description'}
      />
      <button className={loadingButton} type={'submit'}>
        Create
      </button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (
    !formValues.title ||
    (formValues.title && formValues.title.trim().length === 0)
  ) {
    errors.title = 'You must enter a title.';
  }
  if (!formValues.description || formValues.description.trim().length === 0) {
    errors.description = 'You must enter a description.';
  }

  return errors;
};

const formWrap = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

const mapStateToProps = (state) => ({
  loading: state.streams.loading,
});

export default connect(
  mapStateToProps,
  {
    createStream,
    setLoading,
  },
)(formWrap);

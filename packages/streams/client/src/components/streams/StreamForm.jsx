import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../../common/InputField';
import { setLoadingButton } from '../../utils/setLoadingButton';

const StreamForm = (props) => {
  const { loading, handleSubmit } = props;

  const loadingButton = setLoadingButton(loading, 'primary');
  return (
    <form className={'ui form error'} onSubmit={handleSubmit}>
      <Field name={'title'} component={InputField} label={'Enter a title'} />
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

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

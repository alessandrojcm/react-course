import React from 'react';

const InputField = ({ input, label, type = 'text', meta }) => {
  const className = `${meta.touched && meta.error ? 'field error' : 'field'}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} {...input} autoComplete={'off'} />
      {meta.touched && meta.error && (
        <label className={'ui error message'}>
          <div className={'header'}>{meta.error}</div>
        </label>
      )}
    </div>
  );
};

export default InputField;

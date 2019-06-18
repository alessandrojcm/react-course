import React from 'react';

const RenderLoading = ({ loading }) => {
  return (
    loading && (
      <div className={'ui active dimmer'}>
        <div className={'ui loader'} />
      </div>
    )
  );
};

export default RenderLoading;

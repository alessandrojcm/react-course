import { useEffect, useState } from 'react';

// Since loading button is used in two separated components
// we abstract it away creating a custom hook
export const setLoadingButton = (loading, type) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loadingButton, setLoadingButton] = useState('ui button primary');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    loading
      ? setLoadingButton('ui button disabled')
      : setLoadingButton(`ui button ${type}`);
  }, [loading]);

  return loadingButton;
};

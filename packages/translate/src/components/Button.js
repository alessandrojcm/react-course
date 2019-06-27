import React, { useContext } from 'react';

import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
  const { language } = useContext(LanguageContext);

  return (
    <button type={'submit'} className={'ui button primary'}>
      {language === 'english' ? 'Submit' : 'Voorleggen'}
    </button>
  );
};

export default Button;

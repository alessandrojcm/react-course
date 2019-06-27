import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <header>
      Select a language:
      <i className={'flag us'} onClick={() => setLanguage('english')} />
      <i className={'flag nl'} onClick={() => setLanguage('dutch')} />
    </header>
  );
};

export default LanguageSelector;

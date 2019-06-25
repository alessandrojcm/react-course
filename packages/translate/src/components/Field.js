import React, { useContext } from 'react';

import LanguageContext from '../contexts/LanguageContext';

const Field = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className={'ui field'}>
      <label>{language === 'english' ? 'Name' : 'Naam'}</label>
      <input type={'text'} />
    </section>
  );
};

export default Field;

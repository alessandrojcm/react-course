import React, { useState } from 'react';

const Context = React.createContext('english');

export const LanguageStore = ({ children }) => {
  const [language, setLanguage] = useState('english');

  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';

import 'semantic-ui-css/semantic.css';

const App = () => {
  return (
    <main className={'ui container'}>
      <LanguageStore>
        <LanguageSelector />
        <UserCreate />
      </LanguageStore>
    </main>
  );
};

export default App;

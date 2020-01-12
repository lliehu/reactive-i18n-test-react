import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('applicationName')}</h1>
      <LanguageSwitcher />
    </div>
  );
}

export default App;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import MapArea from './MapArea';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('applicationName')}</h1>
      <LanguageSwitcher />
      <MapArea />
    </div>
  );
}

export default App;

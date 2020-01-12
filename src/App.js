import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import MessageLog from './MessageLog';
import MapArea from './MapArea';

function App() {
  const { t } = useTranslation();

  const messageList = [
    {
      time: new Date(),
      messageId: 'testMessage'
    },
    {
      time: new Date(),
      messageId: 'testMessage'
    },
    {
      time: new Date(),
      messageId: 'testMessage'
    }
  ];

  return (
    <div className="App">
      <h1>{t('applicationName')}</h1>
      <LanguageSwitcher />
      <MessageLog messageList={messageList} />
      <MapArea />
    </div>
  );
}

export default App;

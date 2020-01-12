import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = (props) => {
  const { t, i18n } = useTranslation();

  function switchLanguageTo(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <h2>{t('languageSwitcherTitle')}</h2>
      <button onClick={switchLanguageTo.bind(null, 'fi')}>Suomi</button>
      <button onClick={switchLanguageTo.bind(null, 'en')}>English</button>
    </div>
  );
};

export default LanguageSwitcher;

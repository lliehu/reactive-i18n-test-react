import React from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manuallySelectedLanguage: false
    };
    window.addEventListener('languagechange', () => {
      if (!this.state.manuallySelectedLanguage) {
        i18next.changeLanguage(navigator.language)
      }
    });
  }

  switchLanguageTo(language) {
    i18next.changeLanguage(language);
    this.setState({
      manuallySelectedLanguage: true
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.t('languageSwitcherTitle')}</h2>
        <button onClick={this.switchLanguageTo.bind(this, 'fi')}>Suomi</button>
        <button onClick={this.switchLanguageTo.bind(this, 'en')}>English</button>
      </div>
    );
  }
};

export default withTranslation()(LanguageSwitcher);

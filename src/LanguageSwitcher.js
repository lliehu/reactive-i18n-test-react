import React from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { Button, ButtonGroup } from 'reactstrap';

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

  switchLanguageToAuto() {
    this.setState({
      manuallySelectedLanguage: false
    });
    i18next.changeLanguage(navigator.language);
  }

  render() {
    return (
      <div>
        <h2>{this.props.t('languageSwitcherTitle')}</h2>
        <ButtonGroup>
          <Button onClick={this.switchLanguageToAuto.bind(this)} active={!!!this.state.manuallySelectedLanguage}>{this.props.t('automaticLanguage')}</Button>{' '}
          <Button onClick={this.switchLanguageTo.bind(this, 'fi')} active={!!this.state.manuallySelectedLanguage && i18next.language === 'fi'}>Suomi</Button>{' '}
          <Button onClick={this.switchLanguageTo.bind(this, 'en')} active={!!this.state.manuallySelectedLanguage && i18next.language === 'en'}>English</Button>
        </ButtonGroup>
      </div>
    );
  }
};

export default withTranslation()(LanguageSwitcher);

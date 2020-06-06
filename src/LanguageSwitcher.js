import React from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { Button, ButtonGroup } from 'reactstrap';

const languages = [
  {
    code: 'en',
    nativeName: 'English'
  },
  {
    code: 'fi',
    nativeName: 'Suomi'
  },
  {
    code: 'aa',
    nativeName: 'In-Context'
  }
]

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
      <ButtonGroup>
        <Button
          onClick={this.switchLanguageToAuto.bind(this)}
          active={!!!this.state.manuallySelectedLanguage}
        >
          {this.props.t('automaticLanguage')}
        </Button>
        {languages.map(language => (
          <Button
            key={language.code}
            onClick={this.switchLanguageTo.bind(this, language.code)}
            active={!!this.state.manuallySelectedLanguage && i18next.language === language.code}
          >
            {language.nativeName}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
};

export default withTranslation()(LanguageSwitcher);

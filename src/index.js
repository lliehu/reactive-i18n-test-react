import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './index.css';
import App from './App';
import messages from './messages';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: messages,
    lng: navigator.language,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    },

    react: {
      bindI18nStore: "added removed"
    }
  });

const editableMessages = JSON.parse(JSON.stringify(messages));
const namespace = 'translation';
for (const language of Object.keys(editableMessages)) {
  editableMessages[language][namespace] = new Proxy(editableMessages[language][namespace], {
    set: function(obj, prop, value) {
      obj[prop] = value;
      i18n.addResourceBundle(language, namespace, editableMessages[language][namespace])
      return true;
    }
  })
}

window.messages = editableMessages;

window.i18n = i18n;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

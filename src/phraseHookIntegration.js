import { useTranslation as originalUseTranslation } from 'react-i18next';

function decoratedKeyName(key) {
  var prefix = window.PHRASEAPP_CONFIG.prefix ? window.PHRASEAPP_CONFIG.prefix : "[[__";
  var suffix = window.PHRASEAPP_CONFIG.suffix ? window.PHRASEAPP_CONFIG.suffix : "__]]";
  return `${prefix}phrase_${key}${suffix}`;
}

export function useTranslation() {
  const originalReturnValue = originalUseTranslation();
  return Object.assign({}, originalReturnValue, {t: (key) => decoratedKeyName(key)})
}

import React from 'react';
import { useTranslation } from 'react-i18next';

const MessageLog = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>
        {t('messageLogTitle')}
      </h2>
      { props.messageList.map((message, index) => (
        <p key={index}>
          [{
            new Intl.DateTimeFormat(i18n.language, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            }).format(message.time)
          }]&nbsp;
          {t(message.messageId, message.parameters)}
        </p>
      )) }
    </div>
  );
};

export default MessageLog;

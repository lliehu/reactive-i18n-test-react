import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const MessageLog = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <Card>
      <CardBody>
        <CardTitle>
          {t('messageLogTitle')}
        </CardTitle>
        <CardText>
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
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MessageLog;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import Select from 'react-select';

const locations = [
  {
    label: 'Hervanta',
    value: [61.45, 23.85]
  },
  {
    label: 'Kaleva',
    value: [61.498642, 23.800743]
  }
];

const MapNavigator = (props) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  return (
    <Card>
      <CardBody>
        <CardTitle>
          {t('mapNavigatorTitle')}
        </CardTitle>
        <CardText>
          <Select
            value={value}
            onChange={value => setValue(value)}
            options={locations}
          />
          <Button onClick={() => {props.onChange(value.value)}}>{t('navigateMapButton')}</Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MapNavigator;

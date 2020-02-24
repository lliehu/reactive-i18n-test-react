import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, CardTitle, FormGroup } from 'reactstrap';
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
        <FormGroup>
          <Select
              value={value}
              onChange={value => setValue(value)}
              options={locations}
              placeholder={t('locationSelectPlaceholder')}
              loadingMessage={() => t('locationSelectLoadingMessage')}
              noOptionsMessage={() => t('locationSelectNoOptions')}

          />
        </FormGroup>
        <Button onClick={() => {props.onChange(value.value)}}>{t('navigateMapButton')}</Button>
      </CardBody>
    </Card>
  );
};

export default MapNavigator;

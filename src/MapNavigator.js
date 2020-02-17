import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardText, CardTitle, Input } from 'reactstrap';
import Autosuggest from 'react-autosuggest';

const locations = [
  {
    name: 'Hervanta',
    coordinates: [61.45, 23.85]
  },
  {
    name: 'Kaleva',
    coordinates: [61.498642, 23.800743]
  }
];

const MapNavigator = (props) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const theme = {
    suggestionsContainer: 'dropdown-menu',
    suggestion: 'dropdown-item'
  };

  return (
    <Card>
      <CardBody>
        <CardTitle>
          {t('mapNavigatorTitle')}
        </CardTitle>
        <CardText>
          <Autosuggest
            theme={theme}
            suggestions={suggestions}
            inputProps={{value: value, onChange: (event, { newValue, method }) => {setValue(newValue)}}}
            getSuggestionValue={suggestion => suggestion.name}
            renderSuggestion={suggestion => (<span>{suggestion.name}</span>)}
            onSuggestionsFetchRequested={({value}) => {setSuggestions(locations.filter(location => location.name.toLowerCase().indexOf(value.toLowerCase()) !== -1))}}
            onSuggestionsClearRequested={() => {setSuggestions([])}}
            renderInputComponent={inputProps => (
              <Input type="text" {...inputProps} />
            )}
            renderSuggestionsContainer={({ containerProps, children, query}) => {
              console.log('Container props', containerProps);
              const augmentedContainerProps = Object.assign({}, containerProps);
              // augmentedContainerProps.className = "dropdown-menu " + augmentedContainerProps.className;
              return (
                <div {... augmentedContainerProps} style={{display: 'block', position: 'static', float: 'none'}}>
                  {children}
                </div>
              )
            }}
            alwaysRenderSuggestions={true}
          />
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MapNavigator;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Input } from 'reactstrap';

const CatCountControls = (props) => {
    const { t } = useTranslation();

    function handleCountChange(event) {
        props.onCatCountChange(parseInt(event.target.value, 10));
    }

    return (
        <div>
            <Input
                type="range"
                value={props.catCount}
                step={1}
                min={0}
                max={5}
                onChange={handleCountChange}
            />
            <ButtonGroup>
                <Button onClick={props.onPronounChange.bind(null, 'male')}>
                    {t('pronounSelectionMale')}
                </Button>
                <Button onClick={props.onPronounChange.bind(null, 'female')}>
                    {t('pronounSelectionFemale')}
                </Button>
                <Button onClick={props.onPronounChange.bind(null, 'other')}>
                    {t('pronounSelectionNeutral')}
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default CatCountControls;

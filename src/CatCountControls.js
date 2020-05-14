import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Input } from 'reactstrap';

const CatCountControls = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <Input type="range"/>
            <ButtonGroup>
                <Button>
                    {t('pronounSelectionMale')}
                </Button>
                <Button>
                    {t('pronounSelectionFemale')}
                </Button>
                <Button>
                    {t('pronounSelectionNeutral')}
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default CatCountControls;

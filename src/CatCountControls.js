import React from 'react';
import { useTranslation } from 'react-i18next';

const CatCountControls = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('applicationName')}
        </div>
    );
};

export default CatCountControls;

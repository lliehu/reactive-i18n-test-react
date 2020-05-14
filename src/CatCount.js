import React from 'react';
import { useTranslation } from 'react-i18next';

const CatCount = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('catCount', { context: 'female', count: 1 })}
        </div>
    );
};

export default CatCount;

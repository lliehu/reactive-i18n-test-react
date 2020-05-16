import React from 'react';
import { useTranslation } from 'react-i18next';

const CatCount = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('catCount', { context: props.pronoun, count: props.catCount })}
        </div>
    );
};

export default CatCount;

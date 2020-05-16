import React from 'react';
import { useTranslation } from 'react-i18next';

const CatCount = (props) => {
    const { t } = useTranslation();

    return (
        <span>
            {t('catCount', { context: props.pronoun, count: props.catCount })}
        </span>
    );
};

export default CatCount;

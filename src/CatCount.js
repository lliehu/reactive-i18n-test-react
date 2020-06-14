import React from 'react';
import { useTranslation } from './phraseHookIntegration';

const CatCount = (props) => {
    const { t } = useTranslation();

    return (
        <span>
            {t('catCount', { context: props.pronoun, count: props.catCount })}
        </span>
    );
};

export default CatCount;

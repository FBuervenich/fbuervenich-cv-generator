import React from 'react';
import { useTranslation } from 'react-i18next';
import ElementWithHeadingStyles from './ElementWithHeading.module.css';

function ElementWithHeading(props: {
  headingI18nKey: string;
  children: React.ReactNode;
}): JSX.Element {
  const { t } = useTranslation();

  const { headingI18nKey, children } = props;
  return (
    <div>
      <div className={ElementWithHeadingStyles['section-heading']}>
        {t(headingI18nKey)}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ElementWithHeading;

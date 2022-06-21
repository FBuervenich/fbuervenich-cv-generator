import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import ElementWithHeadingStyles from './ElementWithHeading.module.css';

type Props = {
  children: React.ReactNode;
} & DefaultProps;

type DefaultProps = Partial<typeof defaultProps>;

const defaultProps: {
  headingI18nKey?: string;
  headingTitle?: InternationalizedText;
} = {
  headingI18nKey: undefined,
  headingTitle: undefined,
};

function ElementWithHeading(props: Props): JSX.Element {
  const { t, i18n } = useTranslation();

  const { headingI18nKey, headingTitle, children } = props;
  return (
    <>
      <div className={ElementWithHeadingStyles['section-heading']}>
        {headingI18nKey ? (
          <span>{t(headingI18nKey)}</span>
        ) : (
          <span>
            {headingTitle ? (
              <span>{translate(headingTitle, i18n.language)}</span>
            ) : (
              <span />
            )}
          </span>
        )}
      </div>
      {children}
    </>
  );
}

export default ElementWithHeading;

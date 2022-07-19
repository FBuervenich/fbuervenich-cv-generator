import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import AppendixStyles from './Appendix.module.css';

type AppendixProps = {
  location: InternationalizedText;
} & DefaultProps;

type DefaultProps = Partial<typeof defaultProps>;

const defaultProps: {
  signatureUrl?: string;
} = {
  signatureUrl: undefined,
};

function Appendix(props: AppendixProps): JSX.Element {
  const { location, signatureUrl } = props;

  const { t, i18n } = useTranslation();

  return (
    <div className={AppendixStyles.wrapper}>
      <div>
        {translate(location, i18n.language)}
        <span>, {new Date().toLocaleDateString(i18n.language)}</span>
      </div>
      {signatureUrl && (
        <div>
          <img
            className={AppendixStyles.signature}
            src={signatureUrl}
            alt="signature"
          />
        </div>
      )}
    </div>
  );
}

export default Appendix;

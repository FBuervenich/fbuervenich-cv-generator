import { useTranslation } from 'react-i18next';
import React from 'react';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import ElementWithHeading from './ElementWithHeading';
import PersonalInformationStyles from './PersonalInformation.module.css';

type PersonalInfoProps = {
  name: string;
} & DefaultProps;

type DefaultProps = Partial<typeof defaultProps>;

const defaultProps: {
  address?: InternationalizedText;
  birthDate?: InternationalizedText;
  birthPlace?: InternationalizedText;
  nationality?: InternationalizedText;
  pictureUrl?: string;
} = {
  address: undefined,
  birthDate: undefined,
  birthPlace: undefined,
  nationality: undefined,
  pictureUrl: undefined,
};

function PersonalInformation(props: PersonalInfoProps): JSX.Element {
  const { name, address, birthDate, birthPlace, nationality, pictureUrl } =
    props;

  const { t, i18n } = useTranslation();

  return (
    <div className={PersonalInformationStyles.wrapper}>
      <div>
        <ElementWithHeading headingTitle={{ en: name }} preventTopPadding>
          <div>
            <div>
              {address && (
                <div className={PersonalInformationStyles.row}>
                  <div className={PersonalInformationStyles.label}>
                    {t('misc.address')}
                  </div>
                  <div className={PersonalInformationStyles.value}>
                    {translate(address, i18n.language)}
                  </div>
                </div>
              )}
              {birthDate && birthPlace && (
                <div className={PersonalInformationStyles.row}>
                  <div className={PersonalInformationStyles.label}>
                    {t('misc.date_birth_place')}
                  </div>
                  <div>
                    {translate(birthDate, i18n.language)} /{' '}
                    {translate(birthPlace, i18n.language)}
                  </div>
                </div>
              )}
              {nationality && (
                <div className={PersonalInformationStyles.row}>
                  <div className={PersonalInformationStyles.label}>
                    {t('misc.nationality')}
                  </div>
                  <div>{translate(nationality, i18n.language)}</div>
                </div>
              )}
            </div>
          </div>
        </ElementWithHeading>
      </div>
      <div>
        {pictureUrl && (
          <img
            className={PersonalInformationStyles.picture}
            src={pictureUrl}
            alt="portrait"
          />
        )}
      </div>
    </div>
  );
}

export default PersonalInformation;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import ElementWithHeading from './ElementWithHeading';

type PersonalInfoProps = {
  name: string;
} & DefaultProps;

type DefaultProps = Partial<typeof defaultProps>;

const defaultProps: {
  address?: InternationalizedText;
  birthInformation?: string;
  nationality?: InternationalizedText;
} = {
  address: undefined,
  birthInformation: undefined,
  nationality: undefined,
};

function PersonalInformation(props: PersonalInfoProps): JSX.Element {
  const { name, address } = props;

  const { i18n } = useTranslation();

  return (
    <ElementWithHeading headingTitle={{ en: name }}>
      <div>
        {address ? (
          <div>
            <div>Address</div>
            <div>{translate(address, i18n.language)}</div>
          </div>
        ) : (
          <span />
        )}
      </div>
    </ElementWithHeading>
  );
}

export default PersonalInformation;

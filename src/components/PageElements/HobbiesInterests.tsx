import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import ElementWithHeading from './ElementWithHeading';
import SpecialKnowledgeStyles from './HobbiesInterests.module.css';

type HobbiesInterestsProps = {
  hobbies: InternationalizedText[];
  interests: InternationalizedText[];
};

function HobbiesInterests(props: HobbiesInterestsProps): JSX.Element {
  const { hobbies, interests } = props;

  const { i18n, t } = useTranslation();

  return (
    <ElementWithHeading headingI18nKey="headings.hobbies_and_interests">
      <div className={SpecialKnowledgeStyles.category}>
        <div className={SpecialKnowledgeStyles['category-name']}>
          {t('misc.hobbies')}
        </div>
        <div className={SpecialKnowledgeStyles['category-items']}>
          <span>
            {hobbies.map((item) => translate(item, i18n.language)).join(', ')}
          </span>
        </div>
      </div>
      <div className={SpecialKnowledgeStyles.category}>
        <div className={SpecialKnowledgeStyles['category-name']}>
          {t('misc.interests')}
        </div>
        <div className={SpecialKnowledgeStyles['category-items']}>
          <span>
            {interests.map((item) => translate(item, i18n.language)).join(', ')}
          </span>
        </div>
      </div>
    </ElementWithHeading>
  );
}

export default HobbiesInterests;

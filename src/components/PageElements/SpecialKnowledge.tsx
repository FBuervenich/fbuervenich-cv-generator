import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import ElementWithHeading from './ElementWithHeading';
import SpecialKnowledgeStyles from './SpecialKnowledge.module.css';

type SpecialKnowlegeProps = {
  items: Array<{
    category: InternationalizedText;
    items: Array<InternationalizedText>;
  }>;
};

function SpecialKnowlege(props: SpecialKnowlegeProps): JSX.Element {
  const { items } = props;

  const { i18n } = useTranslation();

  return (
    <ElementWithHeading headingI18nKey="headings.knowledge">
      {items.map((knowledgeCategory) => (
        <div className={SpecialKnowledgeStyles.category}>
          <div className={SpecialKnowledgeStyles['category-name']}>
            {translate(knowledgeCategory.category, i18n.language)}
          </div>
          <div className={SpecialKnowledgeStyles['category-items']}>
            <span>
              {knowledgeCategory.items
                .map((item) => translate(item, i18n.language))
                .join(', ')}
            </span>
          </div>
        </div>
      ))}
    </ElementWithHeading>
  );
}

export default SpecialKnowlege;

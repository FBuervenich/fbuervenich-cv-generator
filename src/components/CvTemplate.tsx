import React from 'react';
import { useTranslation } from 'react-i18next';
import './CvTemplate.css';
import Header from './Header';

function CvTemplate(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      {new Array(5).fill(null).map((v, i) => (
        <div className="page">
          <div className="stripes-left" />
          <div className="page-wrapper">
            <Header />
            <div className="page-content">
              <div className="section-heading">{t('headings.experience')}</div>
              <div className="section-heading">{t('headings.education')}</div>
              <div className="section-heading">
                {t('headings.further_education')}
              </div>
              <div className="section-heading">{t('headings.knowledge')}</div>
              <div className="section-heading">
                {t('headings.hobbies_and_interests')}
              </div>
              {new Array(5).fill(null).map((iv, ii) => (
                <div>
                  {i}-{ii}. Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                  accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CvTemplate;

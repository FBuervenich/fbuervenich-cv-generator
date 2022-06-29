import React, { ChangeEvent, useState } from 'react';

import './App.css';

import { useTranslation } from 'react-i18next';
import CvTemplate from './components/CvTemplate';
import ElementWithHeading from './components/PageElements/ElementWithHeading';
import HobbiesInterests from './components/PageElements/HobbiesInterests';
import PersonalInformation from './components/PageElements/PersonalInformation';
import SpecialKnowlege from './components/PageElements/SpecialKnowledge';
import TimeLineEntry, {
  CareerTimelineEntry,
} from './components/PageElements/TimeLineEntry';
import { loadData } from './utils/dataLoader';

function enricheWithHeadingIfRequired(
  element: React.ReactNode,
  index: number,
  headingI18nKey: string
): React.ReactNode {
  if (index === 0) {
    return (
      <ElementWithHeading headingI18nKey={headingI18nKey}>
        {element}
      </ElementWithHeading>
    );
  }
  return element;
}

async function generateCvElements(
  data: any,
  settings: {
    showPicture: boolean;
    showAddress: boolean;
  }
): Promise<Array<React.ReactNode>> {
  if (!data) {
    return [];
  }

  const elements: React.ReactNode[] = [];

  elements.push(
    <PersonalInformation
      name={`${data.personal.firstName} ${data.personal.lastName}`}
      address={settings.showAddress && data.personal.address}
      birthDate={data.personal.birthDate}
      birthPlace={data.personal.birthPlace}
      nationality={data.personal.nationality}
      pictureUrl={settings.showPicture && data.picture}
    />
  );

  data.career.forEach((v: any, index: number) => {
    const element = (
      <CareerTimelineEntry
        fromDate={v.startDate}
        toDate={v.endDate}
        title={v.position}
        subtitle={v.company}
        content={v.content}
        technologies={v.technologies}
      />
    );
    elements.push(
      enricheWithHeadingIfRequired(element, index, 'headings.experience')
    );
  });

  data.education.forEach((v: any, index: number) => {
    const element = (
      <TimeLineEntry
        fromDate={v.startDate}
        toDate={v.endDate}
        title={v.degree}
        subtitle={v.institution}
        content={v.content}
      />
    );
    elements.push(
      enricheWithHeadingIfRequired(element, index, 'headings.education')
    );
  });

  data.qualification.forEach((v: any, index: number) => {
    const element = (
      <TimeLineEntry
        fromDate={v.startDate}
        toDate={v.endDate}
        title={v.type}
        subtitle={v.title}
        content={v.content}
      />
    );
    elements.push(
      enricheWithHeadingIfRequired(element, index, 'headings.further_education')
    );
  });

  elements.push(<SpecialKnowlege items={data.knowledge} />);

  elements.push(
    <HobbiesInterests
      hobbies={data.personal.hobbies}
      interests={data.personal.interests}
    />
  );

  return elements;
}

function App(): JSX.Element {
  const { i18n } = useTranslation();

  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [cvData, setCvData] = useState<any>({});
  const [cvElements, setCvElements] = useState<React.ReactNode[]>([]);

  const [showPicture, setShowPicture] = useState<boolean>(true);
  const [showAddress, setShowAddress] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('en');

  function initLoading(): void {
    setDataLoading(true);

    loadData().then((data: any) => {
      setCvData(data);
      generateCvElements(data, { showPicture, showAddress }).then(
        (elements) => {
          setCvElements(elements);

          setDataLoading(false);
          setDataLoaded(true);
        }
      );
    });
  }

  function handleLangChange(evt: ChangeEvent<HTMLSelectElement>): void {
    setLanguage(evt.target.value);
    i18n.changeLanguage(evt.target.value);
  }

  return (
    <div className="App">
      {dataLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="no-print settings">
            <div>
              <label htmlFor="showPicture">
                <input
                  type="checkbox"
                  name="showPicture"
                  defaultChecked={showPicture}
                  onChange={() => setShowPicture(!showPicture)}
                />
                Picture
              </label>
            </div>
            <div>
              <label htmlFor="showAddress">
                <input
                  type="checkbox"
                  name="showAddress"
                  defaultChecked={showAddress}
                  onChange={() => setShowAddress(!showAddress)}
                />
                Address
              </label>
            </div>
            <div>
              <label htmlFor="langSelect">
                Language:
                <select
                  value={language}
                  onChange={handleLangChange}
                  name="langSelect"
                >
                  <option value="en">English</option>
                  <option value="de">German</option>
                </select>
              </label>
            </div>
            <button onClick={initLoading} type="button">
              Reload
            </button>
          </div>
          {dataLoaded ? (
            <CvTemplate cvElements={cvElements} data={cvData} />
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  );
}

export default App;

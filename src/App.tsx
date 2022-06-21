import React, { useState } from 'react';

import './App.css';

import CvTemplate, { Section } from './components/CvTemplate';
import ElementWithHeading from './components/PageElements/ElementWithHeading';
import PersonalInformation from './components/PageElements/PersonalInformation';
import TimeLineEntry from './components/PageElements/TimeLineEntry';
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

async function generateCvElements(): Promise<Array<React.ReactNode>> {
  const data = (await loadData()) as any;

  if (!data) {
    return [];
  }

  const elements: React.ReactNode[] = [];

  elements.push(
    <PersonalInformation
      name={`${data.personal.firstName} ${data.personal.lastName}`}
      address={data.personal.address}
    />
  );

  data.career.forEach((v: any, index: number) => {
    const element = (
      <TimeLineEntry
        fromDate={v.startDate}
        toDate={v.endDate}
        title={v.position}
        subtitle={v.company}
        content={v.content}
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

  return elements;
}

function App(): JSX.Element {
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [cvElements, setCvElements] = useState<React.ReactNode[]>([]);

  function initLoading(): void {
    setDataLoading(true);

    generateCvElements().then((elements) => {
      setCvElements(elements);

      setDataLoading(false);
      setDataLoaded(true);
    });
  }

  return (
    <div className="App">
      {dataLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="no-print">
            <button onClick={initLoading} type="button">
              Reload
            </button>
          </div>
          {dataLoaded ? <CvTemplate cvElements={cvElements} /> : <div />}
        </div>
      )}
    </div>
  );
}

export default App;

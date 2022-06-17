import React, { useState } from 'react';

import './App.css';

import CvTemplate, { Section } from './components/CvTemplate';
import ElementWithHeading from './components/PageElements/ElementWithHeading';
import TimeLineEntry from './components/PageElements/TimeLineEntry';
import { loadData } from './utils/dataLoader';

const sections: Section[] = [
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
  {
    title: 'headings.experience',
    subsections: [
      {
        title: { en: 'hallo' },
        contents: [
          {
            en: 'Hallo 123',
          },
          {
            en: 'Hallo 123',
          },
        ],
      },
      {
        title: { en: '2hallo' },
        contents: [
          {
            en: '2Hallo 123',
          },
          {
            en: '2Hallo 123',
          },
        ],
      },
    ],
  },
];

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

  data.career.forEach((v: any, index: number) => {
    const element = (
      <TimeLineEntry
        fromDate={new Date(v.startDate)}
        toDate={new Date(v.endDate)}
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
        fromDate={new Date(v.startDate)}
        toDate={new Date(v.endDate)}
        title={v.degree}
        subtitle={v.institution}
        content={v.content}
      />
    );
    elements.push(
      enricheWithHeadingIfRequired(element, index, 'headings.education')
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
          {dataLoaded ? (
            <CvTemplate cvElements={cvElements} />
          ) : (
            <div>
              <button onClick={initLoading} type="button">
                Load
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

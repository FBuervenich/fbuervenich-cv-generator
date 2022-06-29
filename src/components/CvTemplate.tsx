import React, { useEffect, useRef, useState } from 'react';
import { InternationalizedText } from '../types';
import './CvTemplate.css';
import Header from './Header';

interface Page {
  totalHeight: number | null;
  remainingHeight: number | null;
  elements: React.ReactNode[];
}

type PageElement = React.ReactNode;

export interface Section {
  title: SectionTitle;
  subsections: Subsection[];
}

type SectionTitle = string;

interface Subsection {
  title: InternationalizedText;
  contents: InternationalizedText[];
}

async function asyncRequestAnimationFrame(): Promise<number> {
  return new Promise((resolve) => {
    window.requestAnimationFrame(resolve);
  });
}

function CvTemplate(props: {
  cvElements: PageElement[];
  data: any;
}): JSX.Element {
  const { cvElements, data } = props;

  const pagesRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [pages, setPages] = useState<Page[]>([]);

  const realPages: Page[] = [];

  function addEmptyPage(height: number | undefined = 0): Page {
    const newPage: Page = {
      totalHeight: height,
      remainingHeight: height,
      elements: [],
    };
    realPages.push(newPage);
    return newPage;
  }

  async function addElement(
    element: PageElement,
    newPageMaxHeight: number
  ): Promise<void> {
    const pseudoPageRef = pagesRefs.current[0];

    if (!pseudoPageRef) {
      return;
    }

    // add the element to the first "pseudo" page
    setPages([
      {
        elements: [element],
        remainingHeight: null,
        totalHeight: null,
      },
    ]);

    // wait for the dom to be drawn completely
    await asyncRequestAnimationFrame();
    const newSubsectionRefs = pseudoPageRef.children;

    const newSubsectionRequiredHeight = Array.from(newSubsectionRefs).reduce(
      (acc, curr) => acc + curr.clientHeight,
      0
    );

    let currentLastRealPage =
      realPages[realPages.length - 1] ?? addEmptyPage(newPageMaxHeight);

    // add new page if required
    if (
      currentLastRealPage.remainingHeight &&
      currentLastRealPage.remainingHeight < newSubsectionRequiredHeight
    ) {
      currentLastRealPage = addEmptyPage(newPageMaxHeight);
    }

    currentLastRealPage.elements.push(element);
    currentLastRealPage.remainingHeight =
      (currentLastRealPage.remainingHeight ?? 0) - newSubsectionRequiredHeight;
  }

  async function render(): Promise<void> {
    // set an empty signle page so it's height can be determined
    setPages([
      {
        elements: [],
        remainingHeight: null,
        totalHeight: null,
      },
    ]);
    await asyncRequestAnimationFrame();

    const pseudoPageRef = pagesRefs.current[0];

    if (!pseudoPageRef) {
      return;
    }

    const availablePageHeight = pseudoPageRef.clientHeight;

    for (const element of cvElements) {
      // eslint-disable-next-line
      await addElement(element, availablePageHeight);
    }

    setPages(() => realPages);
  }

  let rendered = false;
  useEffect(() => {
    // make sure to render the content only once
    if (!rendered) {
      render();
      rendered = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cvElements]);

  return (
    <div>
      {pages.map((page, pageIndex) => (
        <div className="page">
          <div className="stripes-left" />
          <div className="page-wrapper">
            <Header
              name={`${data.personal.firstName} ${data.personal.lastName}`}
              email={data.personal.privateEmail}
              phone={data.personal.phoneNumber}
            />
            <div
              ref={(el) => {
                pagesRefs.current[pageIndex] = el;
              }}
              className="page-content"
            >
              {page.elements.map((element) => {
                return element;
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CvTemplate;

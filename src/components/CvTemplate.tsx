import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../types';
import { translate } from '../utils';
import { sectionHeadings } from '../utils/constants';
import './CvTemplate.css';
import Header from './Header';

interface Page {
  totalHeight: number | null;
  remainingHeight: number | null;
  elements: PageElement[];
}

type PageElement = SectionTitle | Subsection;

export interface Section {
  title: SectionTitle;
  subsections: Subsection[];
}

type SectionTitle = string;

interface Subsection {
  title: InternationalizedText;
  contents: InternationalizedText[];
}

function typeIsSectionTitle(val: PageElement): val is SectionTitle {
  return typeof val === 'string';
}

async function asyncRequestAnimationFrame(): Promise<number> {
  return new Promise((resolve) => {
    window.requestAnimationFrame(resolve);
  });
}

function CvTemplate(props: { sections: Section[] }): JSX.Element {
  const { t, i18n } = useTranslation();
  const { sections } = props;

  const fakePagesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pagesRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [pages, setPages] = useState<Page[]>([]);

  const realPages: Page[] = [];

  // useEffect(() => {
  //   return null;
  // });

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
    const newSubsectionRef =
      pseudoPageRef.children[pseudoPageRef.children.length - 1];

    const newSubsectionRequiredHeight = newSubsectionRef.clientHeight;

    console.log('adding element with height', newSubsectionRequiredHeight);

    let currentLastRealPage =
      realPages[realPages.length - 1] ?? addEmptyPage(newPageMaxHeight);

    console.log(`remaining height`, currentLastRealPage.remainingHeight);

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

  async function test(): Promise<void> {
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

    console.log('availablePageHeight', availablePageHeight);

    for (const section of sections) {
      // eslint-disable-next-line
      await addElement(section.title, availablePageHeight);
      for (const subsection of section.subsections) {
        // eslint-disable-next-line
        await addElement(subsection, availablePageHeight);
      }
    }

    console.log(`setting real pages`, realPages);
    setPages(() => realPages);
  }

  return (
    <div>
      <div className="no-print">
        <button onClick={test} type="button">
          Gooo
        </button>
        {JSON.stringify(pages)}
      </div>
      {pages.map((page, pageIndex) => (
        <div className="page">
          <div className="stripes-left" />
          <div className="page-wrapper">
            <Header />
            <div
              ref={(el) => {
                pagesRefs.current[pageIndex] = el;
              }}
              className="page-content"
            >
              {page.elements.map((element) => {
                if (typeIsSectionTitle(element)) {
                  return (
                    <div className="section-heading">
                      {t(element as string)}
                    </div>
                  );
                }
                return (
                  <div className="subsection">
                    <div className="subsection-heading">
                      {translate(element.title, i18n.language)}
                    </div>
                    <ul>
                      {element.contents.map((contentElement) => (
                        <li>{translate(contentElement, i18n.language)}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CvTemplate;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import TimeLineEntryStyles from './TimeLineEntry.module.css';

type TimeLineEntryProps = {
  fromDate: string;
  toDate: string;
  title: InternationalizedText;
  content: InternationalizedText[];
} & DefaultProps;

type DefaultProps = Partial<typeof defaultProps>;
const defaultProps: { subtitle?: InternationalizedText } = {
  subtitle: undefined,
};

function toYearAndMonths(date: Date): string {
  const months = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${months}/${year}`;
}

function formatDate(date: string): string {
  const isDateToday = Number.isNaN(new Date(date).getDate());
  const dateString = isDateToday ? 'Today' : toYearAndMonths(new Date(date));
  return dateString;
}

function TimeLineEntry(props: TimeLineEntryProps): JSX.Element {
  const { fromDate, toDate, title, subtitle, content } = props;

  const { i18n } = useTranslation();

  return (
    <div className={TimeLineEntryStyles.wrapper}>
      <div className={TimeLineEntryStyles['date-range']}>
        <span>{formatDate(fromDate)} -</span>
        <span>{formatDate(toDate)}</span>
      </div>
      <div className={TimeLineEntryStyles.content}>
        <span className={TimeLineEntryStyles.title}>
          {translate(title, i18n.language)}
        </span>
        {subtitle ? (
          <span>, {translate(subtitle, i18n.language)}</span>
        ) : (
          <span />
        )}
        <ul>
          {content.map((contentElement) => (
            <li>{translate(contentElement, i18n.language)}</li>
          ))}
        </ul>
        <div className={TimeLineEntryStyles['wrapper-spacer']} />
      </div>
    </div>
  );
}

type CareerTimeLineEntryProps = TimeLineEntryProps &
  CareerTimeLineEntryDefaultProps;

type CareerTimeLineEntryDefaultProps = Partial<
  typeof careerTimeLineEntryDefaultProps
>;
const careerTimeLineEntryDefaultProps: {
  technologies?: InternationalizedText[];
} = {
  technologies: undefined,
};

export function CareerTimelineEntry(
  props: CareerTimeLineEntryProps
): JSX.Element {
  const { i18n } = useTranslation();

  return TimeLineEntry({
    ...props,
    content: [
      ...props.content,
      ...(props.technologies
        ? [
            {
              en: `Technologies: ${props.technologies
                .map((v) => translate(v, i18n.language))
                .join(', ')}`,
              de: `Technologien: ${props.technologies
                .map((v) => translate(v, i18n.language))
                .join(', ')}`,
            },
          ]
        : []),
    ],
  });
}

export default TimeLineEntry;

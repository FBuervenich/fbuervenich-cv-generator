import React from 'react';
import { useTranslation } from 'react-i18next';
import { InternationalizedText } from '../../types';
import { translate } from '../../utils';
import TimeLineEntryStyles from './TimeLineEntry.module.css';

type TimeLineEntryProps = {
  fromDate: Date;
  toDate: Date;
  title: InternationalizedText;
  content: InternationalizedText[];
} & DefaultProps;

type DefaultProps = Partial<typeof defaultProps>;

const defaultProps: { subtitle?: InternationalizedText } = {
  subtitle: undefined,
};

function TimeLineEntry(props: TimeLineEntryProps): JSX.Element {
  const { fromDate, toDate, title, subtitle, content } = props;

  const { i18n } = useTranslation();

  return (
    <div className={TimeLineEntryStyles.wrapper}>
      <div className={TimeLineEntryStyles['date-range']}>
        <span>{fromDate.toDateString()}</span>
        <span> - </span>
        <span>{toDate.toDateString()}</span>
      </div>
      <div>
        <span>{translate(title, i18n.language)}</span>
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
      </div>
    </div>
  );
}

TimeLineEntry.defaultProps = {};

export default TimeLineEntry;

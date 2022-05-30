import { InternationalizedText } from '../types';

export function translate(val: InternationalizedText, locale: string): string {
  if (val instanceof Object && typeof val[locale] === 'string') {
    return val[locale];
  }
  if (val instanceof Object && typeof val.en === 'string') {
    return val.en;
  }
  console.warn('translation failed for', locale, val);
  return '';
}

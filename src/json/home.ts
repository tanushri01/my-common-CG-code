import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faUsers,
  faChartLine,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

import {
  faccosteffectiveresult,
  facformatletter,
  factacticstogetmoney,
} from '../assets/icon';

export interface IMarketSize {
  title: string;
  subTitle: string;
  icon: IconDefinition;
  hiddenBg: boolean;
}

export interface IProduct {
  title: string;
  icon: IconDefinition;
  isActive: boolean;
}

export const marketSize: IMarketSize[] = [
  {
    title: '100 Million',
    subTitle: 'people in America have debt in collections',
    icon: faUsers,
    hiddenBg: true,
  },
  {
    title: 'BY 2025',
    subTitle: 'will be $16.7 billion business by 2025',
    icon: faChartLine,
    hiddenBg: true,
  },
  {
    title: 'IN 2023',
    subTitle: '$14 billion business in 2023',
    icon: faCalendarDays,
    hiddenBg: true,
  },
];

export const product: IProduct[] = [
  {
    title: 'Format of letter for DIY Violation Notice',
    icon: facformatletter,
    isActive: true,
  },
  {
    title: 'Cost Effective Results',
    icon: faccosteffectiveresult,
    isActive: false,
  },
  {
    title: 'Tactics to get money for Reporting Errors',
    icon: factacticstogetmoney,
    isActive: false,
  },
];

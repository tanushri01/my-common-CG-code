import {
  IconDefinition,
  faFile,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { RoutePathEnum } from '@/enum';

export interface ISampleLettersMenu {
  text: string;
  link: string;
  icon: IconDefinition;
}

export const SampleLettersMenu: ISampleLettersMenu[] = [
  {
    text: 'Violation Dispute Letter 2 - Equifax',
    link: RoutePathEnum.SAMPLE_LETTER1,
    icon: faUser,
  },
  {
    text: 'Violation Dispute Letter 5 - Equifax',
    link: RoutePathEnum.SAMPLE_LETTER2,
    icon: faFile,
  },
];

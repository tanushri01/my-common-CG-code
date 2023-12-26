import {
  IconDefinition,
  faFile,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { RoutePathEnum } from '@/enum';

export interface IMyAccountMenu {
  text: string;
  route: string;
  icon: IconDefinition;
}

export const MyAccountMenu: IMyAccountMenu[] = [
  {
    text: 'Profile',
    route: RoutePathEnum.PROFILE,
    icon: faUser,
  },
  {
    text: 'Document',
    route: RoutePathEnum.MY_DOCUMENT,
    icon: faFile,
  },
  {
    text: 'Logout',
    route: RoutePathEnum.SIGN_IN,
    icon: faRightFromBracket,
  },
];

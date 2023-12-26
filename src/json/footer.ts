import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { RoutePathEnum } from '@/enum';

import { facInstagram } from '../assets/icon';

export interface IGetInTouch {
  text: string;
  icon: IconDefinition;
  route: string;
}

export interface IQuickLink {
  text: string;
  route: string;
}

export interface IQuickMenu {
  text: string;
  route: string;
}

export const getInTouch: IGetInTouch[] = [
  {
    text: 'Support@iamprosay.com',
    icon: faEnvelope,
    route: 'mailto:support@iamprosay.com',
  },
  {
    text: 'Instagram Profile',
    icon: facInstagram,
    route: 'https://instagram.com/iamprosay?igshid=MzRlODBiNWFlZA==',
  },
];

export const quickLink: IQuickLink[] = [
  {
    text: 'Privacy Policy',
    route: RoutePathEnum.PRIVACY_POLICY,
  },
  {
    text: 'Terms of Service',
    route: RoutePathEnum.TERMS_OF_SERVICE,
  },
  {
    text: 'Help',
    route: RoutePathEnum.HELP,
  },
];

export const quickMenu: IQuickMenu[] = [
  {
    text: 'About',
    route: RoutePathEnum.ABOUT,
  },
  {
    text: 'Blog',
    route: RoutePathEnum.BLOG,
  },
  {
    text: 'Order Credit Reports',
    route: RoutePathEnum.ORDER_CREDIT_REPORTS,
  },
];

export const headerMenu: IQuickMenu[] = [
  {
    text: 'About',
    route: RoutePathEnum.ABOUT,
  },
  {
    text: 'Order Credit Reports',
    route: RoutePathEnum.ORDER_CREDIT_REPORTS,
  },
  {
    text: 'Blog',
    route: RoutePathEnum.BLOG,
  },
  {
    text: 'Products',
    route: RoutePathEnum.PRODUCT,
  },
];

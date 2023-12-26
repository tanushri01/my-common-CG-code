/* eslint-disable max-len */
import {
  IconDefinition,
  faMagnifyingGlassChart,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faccreditRepair,
  facfilingoflawsuits,
  fachelpconsumers,
  fachighcollectorsfree,
  facletterincorrectinfo,
  facmonetarydamages,
  facpeople,
  facshowsconsumers,
} from '../assets/icon';
import Solution1 from '../assets/images/pages/about/fcra.png';
import Solution2 from '../assets/images/pages/about/fdcpa.png';
import { RoutePathEnum } from '@/enum';

export interface IAboutData {
  subTitle: string;
  icon: IconDefinition;
}

export interface IBottomIconData {
  title: string;
  icon: IconDefinition;
}

export interface ICommonData {
  title: string;
  subTitle: string;
  icon: IconDefinition;
}

export interface IProblemData {
  title: string;
  subTitle: string;
  icon: IconDefinition;
  hiddenBg: boolean;
}

export interface ISolutionData {
  title: string;
  subTitle: string;
  icon: string;
  buttonText: string;
  buttonURL: string;
}

export const AboutData: IAboutData[] = [
  {
    subTitle:
      'IAMPROSAY offers a software as a service platform that guides consumers through reporting violations and requesting compensation or relief. The easy-to-use platform enables consumers to actively pursue remedies when their rights have been infringed upon.',
    icon: faccreditRepair,
  },
  {
    subTitle:
      'IAMPROSAY educates consumers on their rights and provides step-by-step guidance on negotiating with debt collectors while remaining within legal protections. The platform helps consumers get fair treatment from debt collectors and avoid harassment.',
    icon: facshowsconsumers,
  },
  {
    subTitle:
      'We help consumers understand their rights and communicate effectively with Credit Bureaus, Creditors, and Debt Collectors.',
    icon: fachelpconsumers,
  },
];

export const ProblemData: IProblemData[] = [
  {
    title: 'High % of people with debts',
    subTitle: '28% of Americans have debt  in collections',
    icon: facpeople,
    hiddenBg: true,
  },
  {
    title: 'High Collectors Fee',
    subTitle: 'Any Debt collectors fee is 20% - 35%',
    icon: fachighcollectorsfree,
    hiddenBg: true,
  },
];

export const SolutionData: ISolutionData[] = [
  {
    title: 'FCRA Fair Credit',
    subTitle: 'Reporting Act',
    icon: `${Solution1.src}`,
    buttonText: 'Steps to FCRA Lawsuit',
    buttonURL: RoutePathEnum.STEPS_FCRA,
  },
  {
    title: 'FDCPA Fair Debt',
    subTitle: 'Collections Practice Act',
    icon: `${Solution2.src}`,
    buttonText: 'Steps to FDCPA Lawsuit',
    buttonURL: RoutePathEnum.STEPS_FDCPA,
  },
];

export const BottomIconData: IBottomIconData[] = [
  {
    title: 'Detect Credit Errors',
    icon: faMagnifyingGlassChart,
  },
  {
    title: 'Letters Stating Inaccurate Information',
    icon: facletterincorrectinfo,
  },
  {
    title: 'Filing of Lawsuits',
    icon: facfilingoflawsuits,
  },
  {
    title: 'Deletion of Negative Items',
    icon: faTrashAlt,
  },
  {
    title: 'Monetary Damages',
    icon: facmonetarydamages,
  },
];

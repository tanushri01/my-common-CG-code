/* eslint-disable max-len */
import {
  IconDefinition,
  faCalendarDays,
  faChartLine,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import { ProductEnum } from '@/enum';

import Circle from '../assets/images/pages/product/mobile.png';
import Team from '../assets/images/pages/product/team.png';
import Man from '../assets/images/pages/home/woman.jpg';

export interface IHowItWorksTextSection {
  title: string;
  subTitle: string;
  icon: IconDefinition;
}

export interface IChooseYouPacakge {
  planCost: string;
  planType: string;
  packageDes: string[];
  monthly: boolean;
}

export interface ITextData {
  text: string;
  isActive: boolean;
}

export interface ITeamTextSection {
  text1: ITextData;
  text2: ITextData;
  text3: ITextData;
}

export interface IBottomTextSection {
  title: string;
  subTitle: string;
}

export interface IHowItWorks {
  textSection: IHowItWorksTextSection[];
  imageUrl: string;
}

export interface ITeamSection {
  imageUrl: string;
  textSection: ITeamTextSection[];
}

export interface IBottomSection {
  imageUrl: string;
  textSection: IBottomTextSection;
}

export interface IProductPageData {
  productId: string;
  howItWorks: IHowItWorks;
  chooseYouPackage: IChooseYouPacakge[];
  teamSection: ITeamSection;
  bottomSection: IBottomSection;
}

export const productPageData: IProductPageData[] = [
  {
    productId: ProductEnum.PRODUCT_1,
    howItWorks: {
      textSection: [
        {
          title: 'Customers Buy Our Custom Designed Letters',
          subTitle:
            'which state credit and debt collection laws, which can be instrumental and the basis for repairing credit reports. If the Credit Bureaus, Creditors or Debt Collectors break the law, we seek damages.',
          icon: faUsers,
        },
        {
          title: 'We Allow Customers',
          subTitle:
            'to sign up for platforms like Patreon where we hold sessions on how to create a Federal Lawsuit and how to seek settlement damages and procedures after filing the lawsuit.',
          icon: faChartLine,
        },
        {
          title: 'We Also Offer',
          subTitle:
            'one-on-one sessions for customers, wanting to learn how to file their own Federal Lawsuits and how to seek settlement damages.',
          icon: faCalendarDays,
        },
      ],
      imageUrl: `${Circle.src}`,
    },
    chooseYouPackage: [
      {
        planCost: '$29',
        planType: 'Starter',
        packageDes: [
          'Credit report analysis',
          'Dispute letter templates',
          'Email support',
        ],
        monthly: true,
      },
      {
        planCost: '$49',
        planType: 'Advanced',
        packageDes: [
          'Credit report analysis',
          'Software generated dispute letters',
          'Making basis to possibly sue',
          'Software generated draft complaint',
        ],
        monthly: true,
      },
      {
        planCost: '$99',
        planType: 'Ultimate',
        packageDes: [
          'Personal case manager',
          'Review of disputes',
          'Audit all 3 credit bureaus',
          'Custom dispute letters',
          'Provide templates to file lawsuit',
        ],
        monthly: true,
      },
      {
        planCost: '$149',
        planType: 'Ultimate Plus',
        packageDes: [
          'Review of documents',
          'Help draft lawsuit and letters',
          'Instructions on how to file lawsuit',
          'Help negotiate settlements',
          'Guide throughout process',
        ],
        monthly: true,
      },
    ],
    teamSection: {
      imageUrl: `${Team.src}`,
      textSection: [
        {
          text1: {
            text: 'IAMPROSAY is an ordinary person',
            isActive: true,
          },
          text2: {
            text: ' who struggled with poor credit for a long time. He tried many credit repair companies and consumer advocate lawyers, but nothing seemed to help.',
            isActive: false,
          },
          text3: { text: '', isActive: false },
        },
        {
          text1: {
            text: 'After spending nearly two decades repairing credit and fighting in court, we decided it was time to share our knowledge with everyone. Our goal is to bring more fairness to the system and help create an even playing field when it comes to credit. ',
            isActive: false,
          },
          text2: {
            text: 'With over 20 years of experience under our belt, ',
            isActive: true,
          },
          text3: {
            text: 'we want to empower people with the information they need to take control of their credit.',
            isActive: false,
          },
        },
      ],
    },
    bottomSection: {
      imageUrl: `${Man.src}`,
      textSection: {
        title: 'Know your rights and get the compensation you deserve',
        subTitle: 'Begin the process.',
      },
    },
  },
  {
    productId: ProductEnum.PRODUCT_2,
    howItWorks: {
      textSection: [
        {
          title: 'Customers Buy Our Custom Designed Letters',
          subTitle:
            'which state credit and debt collection laws, which can be instrumental and the basis for repairing credit reports. If the Credit Bureaus, Creditors or Debt Collectors break the law, we seek damages.',
          icon: faUsers,
        },
        {
          title: 'We Allow Customers',
          subTitle:
            'to sign up for platforms like Patreon where we hold sessions on how to create a Federal Lawsuit and how to seek settlement damages and procedures after filing the lawsuit.',
          icon: faChartLine,
        },
        {
          title: 'We Also Offer',
          subTitle:
            'one-on-one sessions for customers, wanting to learn how to file their own Federal Lawsuits and how to seek settlement damages.',
          icon: faCalendarDays,
        },
      ],
      imageUrl: `${Circle.src}`,
    },
    chooseYouPackage: [
      {
        planCost: '$49',
        planType: 'Starter',
        packageDes: [
          'Dispute letter templates',
          'Guide to disputing bankruptcy reporting errors',
          'Access to online knowledge base',
          'Email support',
        ],
        monthly: true,
      },
      {
        planCost: '$79',
        planType: 'Advanced',
        packageDes: [
          'Dispute letter generation tool',
          'Personalized action plan',
          'Review of credit reports & bankruptcy docs',
          'Email support',
        ],
        monthly: true,
      },
      {
        planCost: '$129',
        planType: 'Ultimate',
        packageDes: [
          '1 on 1 expert drafting all disputes',
          'Review of documents',
          'Legal consult if needed',
          'Help draft lawsuit',
          'Help recover damages & deletions from reports',
        ],
        monthly: true,
      },
    ],
    teamSection: {
      imageUrl: `${Team.src}`,
      textSection: [
        {
          text1: {
            text: 'IAMPROSAY is an ordinary person',
            isActive: true,
          },
          text2: {
            text: ' who struggled with poor credit for a long time. He tried many credit repair companies and consumer advocate lawyers, but nothing seemed to help.',
            isActive: false,
          },
          text3: { text: '', isActive: false },
        },
        {
          text1: {
            text: 'After spending nearly two decades repairing credit and fighting in court, we decided it was time to share our knowledge with everyone. Our goal is to bring more fairness to the system and help create an even playing field when it comes to credit. ',
            isActive: false,
          },
          text2: {
            text: 'With over 20 years of experience under our belt, ',
            isActive: true,
          },
          text3: {
            text: 'we want to empower people with the information they need to take control of their credit.',
            isActive: false,
          },
        },
      ],
    },
    bottomSection: {
      imageUrl: `${Man.src}`,
      textSection: {
        title: 'Know your rights and get the compensation you deserve',
        subTitle: 'Begin the process.',
      },
    },
  },
  {
    productId: ProductEnum.PRODUCT_3,
    howItWorks: {
      textSection: [
        {
          title: 'Customers Buy Our Custom Designed Letters',
          subTitle:
            'which state credit and debt collection laws, which can be instrumental and the basis for repairing credit reports. If the Credit Bureaus, Creditors or Debt Collectors break the law, we seek damages.',
          icon: faUsers,
        },
        {
          title: 'We Allow Customers',
          subTitle:
            'to sign up for platforms like Patreon where we hold sessions on how to create a Federal Lawsuit and how to seek settlement damages and procedures after filing the lawsuit.',
          icon: faChartLine,
        },
        {
          title: 'We Also Offer',
          subTitle:
            'one-on-one sessions for customers, wanting to learn how to file their own Federal Lawsuits and how to seek settlement damages.',
          icon: faCalendarDays,
        },
      ],
      imageUrl: `${Circle.src}`,
    },
    chooseYouPackage: [
      {
        planCost: '$29',
        planType: 'Standard',
        packageDes: ['Downloads includes FCRA violations that can be used'],
        monthly: false,
      },
    ],
    teamSection: {
      imageUrl: `${Team.src}`,
      textSection: [
        {
          text1: {
            text: 'IAMPROSAY is an ordinary person',
            isActive: true,
          },
          text2: {
            text: ' who struggled with poor credit for a long time. He tried many credit repair companies and consumer advocate lawyers, but nothing seemed to help.',
            isActive: false,
          },
          text3: { text: '', isActive: false },
        },
        {
          text1: {
            text: 'After spending nearly two decades repairing credit and fighting in court, we decided it was time to share our knowledge with everyone. Our goal is to bring more fairness to the system and help create an even playing field when it comes to credit. ',
            isActive: false,
          },
          text2: {
            text: 'With over 20 years of experience under our belt, ',
            isActive: true,
          },
          text3: {
            text: 'we want to empower people with the information they need to take control of their credit.',
            isActive: false,
          },
        },
      ],
    },
    bottomSection: {
      imageUrl: `${Man.src}`,
      textSection: {
        title: 'Know your rights and get the compensation you deserve',
        subTitle: 'Begin the process.',
      },
    },
  },
  {
    productId: ProductEnum.PRODUCT_4,
    howItWorks: {
      textSection: [
        {
          title: 'Customers Buy Our Custom Designed Letters',
          subTitle:
            'which state credit and debt collection laws, which can be instrumental and the basis for repairing credit reports. If the Credit Bureaus, Creditors or Debt Collectors break the law, we seek damages.',
          icon: faUsers,
        },
        {
          title: 'We Allow Customers',
          subTitle:
            'to sign up for platforms like Patreon where we hold sessions on how to create a Federal Lawsuit and how to seek settlement damages and procedures after filing the lawsuit.',
          icon: faChartLine,
        },
        {
          title: 'We Also Offer',
          subTitle:
            'one-on-one sessions for customers, wanting to learn how to file their own Federal Lawsuits and how to seek settlement damages.',
          icon: faCalendarDays,
        },
      ],
      imageUrl: `${Circle.src}`,
    },
    chooseYouPackage: [
      {
        planCost: '$49',
        planType: 'Standard',
        packageDes: [
          'Basic Draft of US Complaint',
          'Reference Civil Cover Sheet',
        ],
        monthly: true,
      },
      {
        planCost: '$249',
        planType: 'Advanced',
        packageDes: [
          'Draft of Complaint',
          'Civil Cover Sheet filled in',
          'Reviewed by Paralegal or Attornyey',
          'Evaluate for further damages',
        ],
        monthly: true,
      },
    ],
    teamSection: {
      imageUrl: `${Team.src}`,
      textSection: [
        {
          text1: {
            text: 'IAMPROSAY is an ordinary person',
            isActive: true,
          },
          text2: {
            text: ' who struggled with poor credit for a long time. He tried many credit repair companies and consumer advocate lawyers, but nothing seemed to help.',
            isActive: false,
          },
          text3: { text: '', isActive: false },
        },
        {
          text1: {
            text: 'After spending nearly two decades repairing credit and fighting in court, we decided it was time to share our knowledge with everyone. Our goal is to bring more fairness to the system and help create an even playing field when it comes to credit. ',
            isActive: false,
          },
          text2: {
            text: 'With over 20 years of experience under our belt, ',
            isActive: true,
          },
          text3: {
            text: 'we want to empower people with the information they need to take control of their credit.',
            isActive: false,
          },
        },
      ],
    },
    bottomSection: {
      imageUrl: `${Man.src}`,
      textSection: {
        title: 'Know your rights and get the compensation you deserve',
        subTitle: 'Begin the process.',
      },
    },
  },
  {
    productId: ProductEnum.PRODUCT_5,
    howItWorks: {
      textSection: [
        {
          title: 'Customers Buy Our Custom Designed Letters',
          subTitle:
            'which state credit and debt collection laws, which can be instrumental and the basis for repairing credit reports. If the Credit Bureaus, Creditors or Debt Collectors break the law, we seek damages.',
          icon: faUsers,
        },
        {
          title: 'We Allow Customers',
          subTitle:
            'to sign up for platforms like Patreon where we hold sessions on how to create a Federal Lawsuit and how to seek settlement damages and procedures after filing the lawsuit.',
          icon: faChartLine,
        },
        {
          title: 'We Also Offer',
          subTitle:
            'one-on-one sessions for customers, wanting to learn how to file their own Federal Lawsuits and how to seek settlement damages.',
          icon: faCalendarDays,
        },
      ],
      imageUrl: `${Circle.src}`,
    },
    chooseYouPackage: [
      {
        planCost: '$49',
        planType: 'Standard',
        packageDes: [
          'Basic Draft of US Complaint',
          'Reference Civil Cover Sheet',
        ],
        monthly: true,
      },
      {
        planCost: '$249',
        planType: 'Advanced',
        packageDes: [
          'Draft of Complaint',
          'Civil Cover Sheet filled in',
          'Reviewed by Paralegal or Attornyey',
          'Evaluate for further damages',
        ],
        monthly: true,
      },
    ],
    teamSection: {
      imageUrl: `${Team.src}`,
      textSection: [
        {
          text1: {
            text: 'IAMPROSAY is an ordinary person',
            isActive: true,
          },
          text2: {
            text: ' who struggled with poor credit for a long time. He tried many credit repair companies and consumer advocate lawyers, but nothing seemed to help.',
            isActive: false,
          },
          text3: { text: '', isActive: false },
        },
        {
          text1: {
            text: 'After spending nearly two decades repairing credit and fighting in court, we decided it was time to share our knowledge with everyone. Our goal is to bring more fairness to the system and help create an even playing field when it comes to credit. ',
            isActive: false,
          },
          text2: {
            text: 'With over 20 years of experience under our belt, ',
            isActive: true,
          },
          text3: {
            text: 'we want to empower people with the information they need to take control of their credit.',
            isActive: false,
          },
        },
      ],
    },
    bottomSection: {
      imageUrl: `${Man.src}`,
      textSection: {
        title: 'Know your rights and get the compensation you deserve',
        subTitle: 'Begin the process.',
      },
    },
  },
];

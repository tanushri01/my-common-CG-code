/* eslint-disable max-len */
import Blog1 from '../assets/images/pages/blog/blog-image-01.png';
import Blog2 from '../assets/images/pages/blog/blog-image-02.png';
import Blog3 from '../assets/images/pages/blog/blog-image-03.png';
import Blog4 from '../assets/images/pages/blog/blog-image-04.png';
import Blog5 from '../assets/images/pages/blog/blog-image-05.png';
import Blog6 from '../assets/images/pages/blog/blog-image-06.png';
import Blog7 from '../assets/images/pages/blog/blog-image-07.png';

export interface IBlog {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

export const BlogData: IBlog[] = [
  {
    id: '1',
    image: `${Blog1.src}`,
    title: 'Why Sue Yourself?',
    date: 'September 06, 2023',
    description:
      'Here are some potential benefits of suing a debt collector or credit furnisher yourself: Save money on legal fees. If you sue without an....',
  },
  {
    id: '2',
    image: `${Blog2.src}`,
    title: 'Debt Collectors and Credit Furnishers - Hard Ball',
    date: 'September 06, 2023',
    description:
      'In the world of personal finance, the relationship between debtors and creditors is often a delicate balancing act. Debts are a common part....',
  },
  {
    id: '3',
    image: `${Blog3.src}`,
    title: 'What is a Credit Furnisher?',
    date: 'September 06, 2023',
    description:
      'A credit furnisher is an entity or organization that provides data about consumers credit behaviors to credit reporting agencies....',
  },
  {
    id: '4',
    image: `${Blog4.src}`,
    title: 'What is a Debt Collector?',
    date: 'September 06, 2023',
    description:
      'Debt is a common aspect of many people financial lives. Whether it is a credit card balance, a medical bill, or a loan payment, managing....',
  },
  {
    id: '5',
    image: `${Blog5.src}`,
    title: 'Credit reports are now permanently free',
    date: 'September 25, 2023',
    description:
      'Credit reports are now permanently free once a week, according to Equifax, Experian and TransUnion....',
  },
  {
    id: '6',
    image: `${Blog6.src}`,
    title: 'Common FCRA Violations & Damages',
    date: 'September 26, 2023',
    description:
      'Here are some of the most common violations of the Fair Credit Reporting Act (FCRA) by credit bureaus, lenders, and other....',
  },
  {
    id: '7',
    image: `${Blog7.src}`,
    title: 'Common FDCPA Violations & Damages',
    date: 'September 26, 2023',
    description:
      'Here are some of the most common violations of the Fair Debt Collection Practices Act (FDCPA) by debt collectors....',
  },
];

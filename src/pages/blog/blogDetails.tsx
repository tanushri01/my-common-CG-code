import React, { ReactNode } from 'react';

import BlogDesc1 from './components/blogDescriptions/blogDesc1';
import BlogDesc2 from './components/blogDescriptions/blogDesc2';
import BlogDesc3 from './components/blogDescriptions/blogDesc3';
import BlogDesc4 from './components/blogDescriptions/blogDesc4';
import BlogDesc5 from './components/blogDescriptions/blogDesc5';
import BlogDesc6 from './components/blogDescriptions/blogDesc6';
import BlogDesc7 from './components/blogDescriptions/blogDesc7';

import Blog1 from '../../assets/images/pages/blog/blog-image-01.png';
import Blog2 from '../../assets/images/pages/blog/blog-image-02.png';
import Blog3 from '../../assets/images/pages/blog/blog-image-03.png';
import Blog4 from '../../assets/images/pages/blog/blog-image-04.png';
import Blog5 from '../../assets/images/pages/blog/blog-image-05.png';
import Blog6 from '../../assets/images/pages/blog/blog-image-06.png';
import Blog7 from '../../assets/images/pages/blog/blog-image-07.png';

export interface IBlogDetail {
  id: string;
  image: string;
  title: string;
  date: string;
  description: ReactNode;
}

export const BlogDetail: IBlogDetail[] = [
  {
    id: '1',
    image: `${Blog1.src}`,
    title: 'Why Sue Yourself?',
    date: 'September 06, 2023',
    description: <BlogDesc1 />,
  },
  {
    id: '2',
    image: `${Blog2.src}`,
    title: 'Debt Collectors and Credit Furnishers - Hard Ball',
    date: 'September 06, 2023',
    description: <BlogDesc2 />,
  },
  {
    id: '3',
    image: `${Blog3.src}`,
    title: 'What is a Credit Furnisher?',
    date: 'September 06, 2023',
    description: <BlogDesc3 />,
  },
  {
    id: '4',
    image: `${Blog4.src}`,
    title: 'What is a Debt Collector?',
    date: 'September 06, 2023',
    description: <BlogDesc4 />,
  },
  {
    id: '5',
    image: `${Blog5.src}`,
    title:
      'Credit reports are now permanently free once a week, according to Equifax, Experian and TransUnion',
    date: 'September 25, 2023',
    description: <BlogDesc5 />,
  },
  {
    id: '6',
    image: `${Blog6.src}`,
    title: 'Common FCRA Violations & Damages',
    date: 'September 26, 2023',
    description: <BlogDesc6 />,
  },
  {
    id: '7',
    image: `${Blog7.src}`,
    title: 'Common FDCPA Violations & Damages',
    date: 'September 26, 2023',
    description: <BlogDesc7 />,
  },
];

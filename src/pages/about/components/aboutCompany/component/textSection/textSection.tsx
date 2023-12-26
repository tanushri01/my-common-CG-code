import React from 'react';

import { StringHelper } from '@/helper';
import { AboutData, IAboutData } from '@/json';
import TriangleHeading from '@/components/triangleHeading';

import { AboutTextSectionLeft, AboutContent } from './textSection.style';

/**
 * @component {TextSection} This is Component for showing About text and icon section.
 * @return {JSX.Element}
 */
const TextSection = (): JSX.Element => (
  <AboutTextSectionLeft>
    {AboutData.map((data: IAboutData, index: number) => (
      <AboutContent key={StringHelper.generateUID(data.subTitle, index)}>
        <TriangleHeading subTitle={data.subTitle} iconName={data.icon} />
      </AboutContent>
    ))}
  </AboutTextSectionLeft>
);

export default TextSection;

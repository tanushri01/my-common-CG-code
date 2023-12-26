import React from 'react';

import { CommonIconTextComponent } from '@/components';
import { StringHelper } from '@/helper';
import { IProblemData, ProblemData } from '@/json';

import { ProblemSectionLeft, ProblemTextContent } from './textSection.style';

/**
 * @component {TextSection} This is Component for showing Problem Text Section.
 * @return {JSX.Element}
 */
const TextSection = (): JSX.Element => (
  <ProblemSectionLeft>
    {ProblemData.map((data: IProblemData, index: number) => (
      <ProblemTextContent key={StringHelper.generateUID(data.title, index)}>
        <CommonIconTextComponent
          title={data.title}
          subtitle={data.subTitle}
          icon={data.icon}
          hiddenBg={data.hiddenBg}
        />
      </ProblemTextContent>
    ))}
  </ProblemSectionLeft>
);
export default TextSection;

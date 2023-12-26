import React from 'react';
import Image from 'next/image';

import { Typography } from '@/components';

import {
  ProblemSectionRight,
  TypographyBox,
  GraphTitle,
} from './imageSection.style';
import Map from '../../../../../../assets/images/pages/about/map.png';

/**
 * @component {ImageSection} This is Component for showing Problem Image Section.
 * @return {JSX.Element}
 */
const ImageSection = (): JSX.Element => (
  <ProblemSectionRight>
    <Image src={Map} alt="Map" />
    <TypographyBox variant="h4" color="primary">
      28%
    </TypographyBox>
    <GraphTitle>
      <Typography variant="h6" color="primary">
        OF AMERICANS
      </Typography>
      <Typography variant="h6" color="primary">
        HAVE DEBTS
      </Typography>
    </GraphTitle>
  </ProblemSectionRight>
);

export default ImageSection;

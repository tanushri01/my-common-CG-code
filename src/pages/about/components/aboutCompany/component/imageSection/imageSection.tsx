import React from 'react';
import Image from 'next/image';
import { Theme, useMediaQuery } from '@mui/material';

import { ImageWrapper } from './imagSection.style';

import ManWoodenCubes from '../../../../../../assets/images/pages/about/man-wooden-cubes.png';
import ManWoodenCubesMobile from '../../../../../../assets/images/pages/about/man-wooden-cubes-mobile.png';

/**
 * @component {ImageSection} This is Component for showing About Company Image.
 * @return {JSX.Element}
 */
const ImageSection = (): JSX.Element => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <ImageWrapper>
      <Image
        src={isMobile ? ManWoodenCubesMobile : ManWoodenCubes}
        alt="Man-Wooden-Cubes"
      />
    </ImageWrapper>
  );
};

export default ImageSection;

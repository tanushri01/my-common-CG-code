import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';

import ManImageSection from '@/components/manImageSection';
import { BottomSectionBox } from '@/styles';
import { IBottomTextSection } from '@/json';
import { Box } from '@/components';

import BottomTextSection from './components/bottomTextSection/bottomTextSection';

interface IProps
  extends Readonly<{
    imageUrl: string;
    textSection: IBottomTextSection;
    id: string;
  }> {}

/**
 * @component {BottomSection} This is Component for showing Bottom Section.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const BottomSection = (props: IProps): JSX.Element => {
  const { imageUrl, textSection, id } = props;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <BottomSectionBox>
        {!isMobile && <ManImageSection imageUrl={imageUrl} />}
        <BottomTextSection id={id} textSection={textSection} />
      </BottomSectionBox>
    </Box>
  );
};

export default BottomSection;

import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';

import ManImageSection from '@/components/manImageSection';
import { BottomSectionBox } from '@/styles';
import { Box } from '@/components';

import TextSection from './component/textSection';

/**
 * @component {BottomSection} This is Component for showing Bottom Section.
 * @return {JSX.Element}
 */
const BottomSection = (): JSX.Element => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <BottomSectionBox>
        {!isMobile && <ManImageSection imageUrl="" />}
        <TextSection />
      </BottomSectionBox>
    </Box>
  );
};

export default BottomSection;

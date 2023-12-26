import React from 'react';

import { Box, Spacing, SpacingEnum } from '@/components';
import CommonIconTextComponent from '@/components/commonIconTextComponent';
import { StringHelper } from '@/helper';
import { marketSize, IMarketSize } from '@/json';

import { MarketSizeLeft } from './textSection.style';

/**
 * @component  {TextSection} This is Component for showing Bottom Text Section.
 * @return {JSX.Element}
 */
const TextSection = (): JSX.Element => (
  <MarketSizeLeft>
    {marketSize.map((data: IMarketSize, index: number) => (
      <Box key={StringHelper.generateUID(data.title, index)}>
        <CommonIconTextComponent
          title={data.title}
          subtitle={data.subTitle}
          icon={data.icon}
          hiddenBg={data.hiddenBg}
        />
        <Spacing spacing={5} variant={SpacingEnum.BOTTOM} />
      </Box>
    ))}
  </MarketSizeLeft>
);
export default TextSection;

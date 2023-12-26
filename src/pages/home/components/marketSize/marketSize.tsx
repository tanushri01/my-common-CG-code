import React from 'react';

import { Spacing, SpacingEnum } from '@/components';
import Heading from '@/components/heading';
import { MARKET_SIZE } from '@/constant';

import { MarketBox, MarketSizeBox } from './marketSize.style';
import MarketGraph from './component/marketGraph';
import TextSection from './component/textSection';

/**
 * @component {MarketSize} - This component is for showing component
 * @return {JSX.Element}
 */
const MarketSize = (): JSX.Element => (
  <MarketSizeBox>
    <Heading title={MARKET_SIZE} subTitle={MARKET_SIZE} />
    <Spacing spacing={6} variant={SpacingEnum.BOTTOM} />
    <MarketBox>
      <TextSection />
      <MarketGraph />
    </MarketBox>
  </MarketSizeBox>
);

export default MarketSize;

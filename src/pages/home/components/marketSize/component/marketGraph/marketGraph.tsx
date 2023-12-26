import React from 'react';

import { Typography } from '@/components';
import {
  Cirlce,
  LargerCirlce,
  LargestCirlce,
  MarketSizeRight,
  TextBox,
} from './marketGraph.style';

/**
 * @component {MarketGraph} - This component is for showing market graph
 * @return {JSX.Element}
 */
const MarketGraph = (): JSX.Element => (
  <MarketSizeRight>
    <LargestCirlce>
      <TextBox sx={{ top: '10px' }}>
        <Typography color="primary" variant="h5">
          PEOPLE
        </Typography>
        <Typography color="black" variant="body2" sx={{ fontWeight: 500 }}>
          100 M
        </Typography>
      </TextBox>
    </LargestCirlce>
    <LargerCirlce>
      <TextBox>
        <Typography variant="h5">2025</Typography>
        <Typography>$16.7 B</Typography>
      </TextBox>
    </LargerCirlce>
    <Cirlce>
      <TextBox sx={{ top: '50%', transform: 'translate(-50%,-50%)' }}>
        <Typography variant="h5">2023</Typography>
        <Typography>$14 B</Typography>
      </TextBox>
    </Cirlce>
  </MarketSizeRight>
);

export default MarketGraph;

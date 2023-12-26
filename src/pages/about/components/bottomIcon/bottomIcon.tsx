import React from 'react';

import { Spacing, SpacingEnum, Typography, CircleIcon } from '@/components';
import { BottomIconData, IBottomIconData } from '@/json';
import { StringHelper } from '@/helper';

import {
  CircleIconBox,
  BottomWrapper,
  BottomIconWrapper,
} from './bottomIcon.style';

/**
 * @component {BottomIcon} This is Component for showing About Bottom Icon.
 * @return {JSX.Element}
 */
const BottomIcon = (): JSX.Element => (
  <BottomIconWrapper>
    {BottomIconData.map((data: IBottomIconData, index: number) => (
      <BottomWrapper key={StringHelper.generateUID(data.title, index)}>
        <CircleIconBox>
          <CircleIcon icon={data.icon} />
        </CircleIconBox>
        <Spacing spacing={2} variant={SpacingEnum.BOTTOM} />
        <Typography variant="h6" color="primary">
          {data.title}
        </Typography>
      </BottomWrapper>
    ))}
  </BottomIconWrapper>
);

export default BottomIcon;

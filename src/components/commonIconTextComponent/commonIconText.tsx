import React, { memo } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
  Box,
  Typography,
  Spacing,
  SpacingEnum,
  CircleIcon,
} from '@/components';

import { CommonIconTextBox } from './commonIconText.style';

interface IProps
  extends Readonly<{
    title: string;
    subtitle: string;
    icon: IconDefinition;
    hiddenBg?: boolean;
  }> {}

/**
 * @component {CommonIconTextComponent} - This component is for circle Icon with text.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const CommonIconTextComponent = (props: IProps): JSX.Element => {
  const { title, subtitle, icon, hiddenBg = false } = props;

  return (
    <CommonIconTextBox>
      <CircleIcon icon={icon} hiddenBg={hiddenBg} />
      <Box>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Spacing spacing={0.5} variant={SpacingEnum.BOTTOM} />
        <Typography sx={{ textTransform: 'capitalize' }}>{subtitle}</Typography>
      </Box>
    </CommonIconTextBox>
  );
};

export default memo(CommonIconTextComponent);

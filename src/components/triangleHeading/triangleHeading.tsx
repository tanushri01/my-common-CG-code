import React, { memo } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Spacing, SpacingEnum, Typography, Triangle } from '@/components';
import { TriangleIconSizeEnum } from '@/enum';

import { TextBox, TriangleBox } from './triangleHeading.style';

interface IProps
  extends Readonly<{
    iconName: IconProp;
    title?: string;
    subTitle?: string;
  }> {}

/**
 * @component {TriangleHeading} - This is for Triangle Heading.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const TriangleHeading = (props: IProps): JSX.Element => {
  const { title, iconName, subTitle } = props;

  return (
    <TriangleBox>
      <Triangle size={TriangleIconSizeEnum.SM} iconName={iconName} />
      <TextBox>
        <Typography color="primary" variant="h5" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Spacing variant={SpacingEnum.BOTTOM} spacing={1} />
        <Typography variant="body1">{subTitle}</Typography>
      </TextBox>
    </TriangleBox>
  );
};

export default memo(TriangleHeading);

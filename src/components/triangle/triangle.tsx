import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { TringleSvg } from '../../assets/svg/tringle.svg';
import { TriangleIconSizeEnum } from '@/enum';

import { CardIconWrapper, CardIcon } from './triangle.style';

interface IProps
  extends Readonly<{
    iconName: IconProp;
    size: TriangleIconSizeEnum;
  }> {}

/**
 * @component {Triangle} - This component is using for Triangle Icon.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Triangle = (props: IProps): JSX.Element => {
  const { iconName, size } = props;

  return (
    <CardIconWrapper size={size}>
      <CardIcon
        size={size === TriangleIconSizeEnum.LG ? '3x' : '2x'}
        icon={iconName}
      />
      <TringleSvg />
    </CardIconWrapper>
  );
};

export default Triangle;

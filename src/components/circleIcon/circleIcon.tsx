import React, { memo } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Icon } from '@/components';

import { IconBox } from './circleIcon.style';

interface IProps
  extends Readonly<{
    icon: IconDefinition;
    hiddenBg?: boolean;
  }> {}

/**
 * @component {CircleIcon} This Component is for showing Circle Icon.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const CircleIcon = (props: IProps): JSX.Element => {
  const { icon, hiddenBg } = props;

  return (
    <IconBox hiddenBg={hiddenBg}>
      <Icon disableButton color="inherit" icon={icon} iconSize="2x" />
    </IconBox>
  );
};

export default memo(CircleIcon);

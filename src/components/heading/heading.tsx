import React from 'react';

import { Typography } from '@/components';

import { HeadingBox } from './heading.style';

interface IProps
  extends Readonly<{
    title: string;
    subTitle: string;
  }> {}

/**
 * @component {Heading} - This component is for Heading of page.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Heading = (props: IProps): JSX.Element => {
  const { title, subTitle } = props;

  return (
    <HeadingBox>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h2">{subTitle}</Typography>
    </HeadingBox>
  );
};

export default Heading;

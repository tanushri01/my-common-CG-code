import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/components';

import { BlogCardBox, ImageBox } from './card.style';
import { CustomButtonBox } from '@/styles';

interface IProps
  extends Readonly<{
    title: string;
    subTitle: string;
    icon: string;
    buttonText: string;
    buttonUrl: string;
  }> {}

/**
 * @component {Card} This is Component for showing Solution Card.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Card = (props: IProps): JSX.Element => {
  const { title, subTitle, icon, buttonText, buttonUrl } = props;
  return (
    <BlogCardBox>
      <ImageBox>
        <Image src={icon} width="220" height="190" alt="blog-image" />
      </ImageBox>
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
      <Typography variant="h6" color="primary">
        {subTitle}
      </Typography>
      <CustomButtonBox variant="contained" sx={{ mt: 2 }}>
        <Link href={buttonUrl}>
          <Typography>{buttonText}</Typography>
        </Link>
      </CustomButtonBox>
    </BlogCardBox>
  );
};
export default Card;

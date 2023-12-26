import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box, CardActions, Typography } from '@/components';
import { RoutePathEnum } from '@/enum';

import { CardButton, BlogCardBox, ImageBox } from './blogCard.style';

interface IProps
  extends Readonly<{
    image: string;
    title: string;
    date: string;
    description: string;
    id: string;
  }> {}

/**
 * @component {BlogCard } - This component is using for blog card.
 * @param {IProps} props
 * @return {JSX.Element}
 */
export const BlogCard = (props: IProps): JSX.Element => {
  const { image, title, date, description, id } = props;

  return (
    <BlogCardBox>
      <ImageBox>
        <Image src={image} width="400" height="300" alt="blog-image" />
      </ImageBox>
      <Box sx={{ p: 3, pb: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', mt: 2, flexWrap: 'wrap' }}>
          <Typography
            color="secondary"
            variant="body2"
            sx={{ fontStyle: 'italic', mr: 1 }}
          >
            {date}
          </Typography>
        </Box>
        <Typography
          color="secondary"
          sx={{ mt: 2, fontWeight: 400 }}
          variant="body2"
        >
          {description}
        </Typography>
      </Box>
      <CardActions>
        <CardButton>
          <Link
            href={{
              pathname: RoutePathEnum.BLOG_DETAIL,
              query: { blogId: id },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Read More
            </Typography>
          </Link>
        </CardButton>
      </CardActions>
    </BlogCardBox>
  );
};

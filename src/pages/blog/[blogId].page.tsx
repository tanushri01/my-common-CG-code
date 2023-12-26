import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { AuthContentWrapper, CustomContainer } from '@/styles';
import { StringHelper } from '@/helper';
import { Typography } from '@/components';
import { BLOG, BLOGGING, BLOG_DETAILS } from '@/constant';

import useBlogIdController from './blogId.controller';
import { BlogContentBox, BlogImageBox, BlogMainBox } from './blogId.style';
import { IBlogDetail } from './blogDetails';

const Heading = dynamic(() => import('../../components/heading'));
const Layout = dynamic(() => import('../../layout'));

/**
 * @component {BlogDetails} - This is for Blog Details.
 * @return {JSX.Element}
 */
const BlogDetails = (): JSX.Element => {
  const { getters } = useBlogIdController();
  const { blogFilterdDetail, theme } = getters;

  return (
    <AuthContentWrapper>
      <CustomContainer>
        <Heading title={BLOGGING} subTitle={BLOG} />
        {blogFilterdDetail.map((data: IBlogDetail, index: number) => (
          <BlogMainBox
            key={StringHelper.generateUID(data.title, index)}
            sx={{ mt: 4 }}
          >
            <Typography variant="h5" color="primary">
              {data.title}
            </Typography>
            <BlogContentBox>
              <Typography
                sx={{
                  fontStyle: 'italic',
                  color: theme.palette.secondary.main,
                }}
              >
                {data.date}
              </Typography>
            </BlogContentBox>
            <BlogImageBox>
              <Image
                src={data.image}
                width="1280"
                height="850"
                alt="blog-image"
              />
            </BlogImageBox>
            {data.description}
          </BlogMainBox>
        ))}
      </CustomContainer>
    </AuthContentWrapper>
  );
};

BlogDetails.getLayout = (page: JSX.Element) => (
  <Layout title={BLOG_DETAILS}>{page}</Layout>
);

export default BlogDetails;

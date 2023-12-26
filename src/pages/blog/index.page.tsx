import React from 'react';
import dynamic from 'next/dynamic';

import { BlogData, IBlog } from '@/json';
import { StringHelper } from '@/helper';
import { Grid, Spacing, SpacingEnum } from '@/components';
import { AuthContentWrapper, CustomContainer } from '@/styles';
import { BLOG, BLOGGING } from '@/constant';

import BlogCard from './components/blogCard';

const Heading = dynamic(() => import('../../components/heading'));
const Layout = dynamic(() => import('../../layout'));

/**
 * @page {Blog} This page is used for showing blog.
 * @return {JSX.Element}
 */
const Blog = (): JSX.Element => (
  <AuthContentWrapper>
    <CustomContainer>
      <Heading title={BLOGGING} subTitle={BLOG} />
      <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
      <Grid container spacing={3} rowSpacing={4} columnSpacing={4}>
        {BlogData.map((data: IBlog, index: number) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={StringHelper.generateUID(data.title, index)}
          >
            <BlogCard
              image={data.image}
              title={data.title}
              date={data.date}
              description={data.description}
              id={data.id}
            />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  </AuthContentWrapper>
);

Blog.getLayout = (page: JSX.Element) => <Layout title={BLOG}>{page}</Layout>;

export default Blog;

import React from 'react';
import Image from 'next/image';

import { Grid } from '@/components';
import Heading from '@/components/heading';
import { IProduct, product } from '@/json';
import { StringHelper } from '@/helper';
import { CustomContainer } from '@/styles';

import ProductCard from './component/productCard/productCard';
import { ImageWrapper } from './product.style';
import CommonCreditLogoIcon from '../../../../assets/images/common/common-credit-logo-icon.png';

/**
 * @component {Product} - This component is for showing Product.
 * @return {JSX.Element}
 */
const Product = (): JSX.Element => (
  <CustomContainer sx={{ position: 'relative' }}>
    <Heading title="Why Use IAMPROSAY" subTitle="Why Use IAMPROSAY" />
    <ImageWrapper>
      <Image
        alt="Common-Credit-Logo"
        src={CommonCreditLogoIcon}
        width="75"
        height="70"
      />
    </ImageWrapper>
    <Grid container spacing={{ xs: 3, lg: 6, xl: 10 }}>
      {product.map((data: IProduct, index: number) => (
        <Grid
          item
          key={StringHelper.generateUID(data.title, index)}
          xs={12}
          sm={4}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <ProductCard title={data.title} icon={data.icon} />
        </Grid>
      ))}
    </Grid>
  </CustomContainer>
);

export default Product;

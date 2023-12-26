/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import { Typography } from '@/components';

import { QutoeBox, SliderBox, TestimonialWrapper } from './testimonial.style';
import Heading from '@/components/heading';
import { TESTIMONIAL } from '@/constant';
import { CustomContainer } from '@/styles';

import Stars from '../../../../assets/svg/stars.svg';
import Quotes from '../../../../assets/svg/quotes.svg';

/**
 * @component {Testimonials} - This component is for showing Testimonials.
 * @return {JSX.Element}
 */
const Testimonials = (): JSX.Element => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <TestimonialWrapper>
      <CustomContainer>
        <Heading title={TESTIMONIAL} subTitle={TESTIMONIAL} />
        <Slider {...settings}>
          <SliderBox>
            <QutoeBox>
              <Image src={Quotes} alt="Quotes" />
            </QutoeBox>
            <Typography>
              My name is Nicole J. and I couldn't be more pleased with the
              results I received from IAMPROSAY. Within 3 months I began
              to see removals from my credit report. I was also made financially
              whole by TransUnion, Equifax and Experian for their inaccurate
              reporting. IAMPROSAY was there every step of the way and took the
              lead on my case. My scores went from the low 500's to now all
              three in the high 700's. This all came in time for my son to go to
              college and I was able to secure a loan with ease. Thank you
              IAMPROSAY. You changed my life and made my son's future a reality.
            </Typography>
            <Image src={Stars} alt="stars" />
            <Typography variant="h4" sx={{ mt: 2 }}>
              Nicole J
            </Typography>
          </SliderBox>
          <SliderBox>
            <QutoeBox>
              <Image src={Quotes} alt="Quotes" />
            </QutoeBox>
            <Typography>
              My name is Michael K "I had the pleasure of working with IAMPROSAY
              to improve my credit score, and I couldn't be happier with the
              results. My credit score skyrocketed from 450 to an impressive
              750, thanks to their exceptional service. The team at IAMPROSAY is
              truly amazing, and I'm incredibly grateful for their expertise and
              dedication. I highly recommend their services to anyone looking to
              repair and boost their credit. Thank you, IAMPROSAY, for
              transforming my financial future!"
            </Typography>
            <Image src={Stars} alt="stars" />
            <Typography variant="h4" sx={{ mt: 2 }}>
              Michael K
            </Typography>
          </SliderBox>
        </Slider>
      </CustomContainer>
    </TestimonialWrapper>
  );
};

export default Testimonials;

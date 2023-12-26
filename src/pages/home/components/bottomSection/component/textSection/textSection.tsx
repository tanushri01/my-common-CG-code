import React from 'react';
import Link from 'next/link';

import { Typography, Spacing, SpacingEnum } from '@/components';
import { CustomButtonBox } from '@/styles';
import { ProductEnum, RoutePathEnum } from '@/enum';
import {
  BANKRUPTCY_REMOVAL_LETTERS,
  CREDIT_DISPUTE_LETTERS,
  INQUIRY_REMOVAL_LETTERS,
  US_COURT_COMPLAINT,
} from '@/constant';
import {
  FIRST_FORM_LIMIT,
  FOURTH_FORM_LIMIT,
  SECOND_FORM_LIMIT,
  THIRD_FORM_LIMIT,
  useAppSelector,
} from '@/redux';

import {
  TextSectionBox,
  TextSectionHeading,
  TextSectionRight,
} from './textSection.style';

/**
 * @component  {TextSection} This is Component for showing Bottom Text Section.
 * @return {JSX.Element}
 */
const TextSection = (): JSX.Element => {
  const firstFormLimit = useAppSelector(FIRST_FORM_LIMIT);
  const secondFormLimit = useAppSelector(SECOND_FORM_LIMIT);
  const thirdFormLimit = useAppSelector(THIRD_FORM_LIMIT);
  const fourthFormLimit = useAppSelector(FOURTH_FORM_LIMIT);

  return (
    <TextSectionRight>
      <TextSectionHeading>
        <Typography variant="h1" color="primary">
          IAMPROSAY
        </Typography>
      </TextSectionHeading>
      <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
      <Typography variant="h6" color="secondary">
        We are here to support you nationwide.
      </Typography>
      <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
      <TextSectionBox>
        {!firstFormLimit ? (
          <Link
            href={{
              pathname: RoutePathEnum.PRODUCT,
              query: { id: ProductEnum.PRODUCT_1 },
            }}
          >
            <CustomButtonBox variant="contained">
              {CREDIT_DISPUTE_LETTERS}
            </CustomButtonBox>
          </Link>
        ) : (
          <CustomButtonBox variant="contained" disabled>
            {CREDIT_DISPUTE_LETTERS}
          </CustomButtonBox>
        )}
        {!thirdFormLimit ? (
          <Link
            href={{
              pathname: RoutePathEnum.PRODUCT,
              query: { id: ProductEnum.PRODUCT_2 },
            }}
          >
            <CustomButtonBox variant="contained">
              {BANKRUPTCY_REMOVAL_LETTERS}
            </CustomButtonBox>
          </Link>
        ) : (
          <CustomButtonBox variant="contained" disabled>
            {BANKRUPTCY_REMOVAL_LETTERS}
          </CustomButtonBox>
        )}
      </TextSectionBox>
      <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
      <TextSectionBox sx={{ display: 'flex', gap: '20px' }}>
        {!secondFormLimit ? (
          <Link
            href={{
              pathname: RoutePathEnum.PRODUCT,
              query: { id: ProductEnum.PRODUCT_3 },
            }}
          >
            <CustomButtonBox variant="contained">
              {INQUIRY_REMOVAL_LETTERS}
            </CustomButtonBox>
          </Link>
        ) : (
          <CustomButtonBox variant="contained" disabled>
            {INQUIRY_REMOVAL_LETTERS}
          </CustomButtonBox>
        )}
        {!fourthFormLimit ? (
          <Link
            href={{
              pathname: RoutePathEnum.PRODUCT,
              query: { id: ProductEnum.PRODUCT_5 },
            }}
          >
            <CustomButtonBox variant="contained">
              {US_COURT_COMPLAINT}
            </CustomButtonBox>
          </Link>
        ) : (
          <CustomButtonBox variant="contained" disabled>
            {US_COURT_COMPLAINT}
          </CustomButtonBox>
        )}
      </TextSectionBox>
    </TextSectionRight>
  );
};
export default TextSection;

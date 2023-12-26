import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Typography, Spacing, SpacingEnum } from '@/components';
import { CustomButtonBox } from '@/styles';

import {
  TextSectionRight,
  TextSectionHeading,
} from './bottomTextSection.style';
import { LocalStorageEnum, ProductEnum, RoutePathEnum } from '@/enum';
import { StorageHelper } from '@/helper';

interface IProps {
  textSection: {
    title: string;
    subTitle: string;
  };
  id: string;
}

/**
 * @component {BottomTextSection} This is Component for showing Bottom Text Section.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const BottomTextSection = (props: IProps): JSX.Element => {
  const { textSection, id } = props;
  const [isToken, setIsToken] = useState<string>('');

  const generateUrl = (): string => {
    if (isToken) {
      switch (id) {
        case ProductEnum.PRODUCT_1: {
          return RoutePathEnum.CREDIT_DISPUTE_LETTER;
        }
        case ProductEnum.PRODUCT_2: {
          return RoutePathEnum.BANKRUPTCY_REMOVAL_LETTER;
        }
        case ProductEnum.PRODUCT_3: {
          return RoutePathEnum.INQUIRY_REMOVAL_LETTER;
        }
        case ProductEnum.PRODUCT_5: {
          return RoutePathEnum.US_COURT_COMPLAINT;
        }
        default: {
          return RoutePathEnum.CREDIT_DISPUTE_LETTER;
        }
      }
    }
    return RoutePathEnum.SIGN_IN;
  };

  useEffect(() => {
    setIsToken(StorageHelper.getLocalStorage(LocalStorageEnum.TOKEN));
  }, []);

  return (
    <TextSectionRight>
      <TextSectionHeading>
        <Typography variant="h1" color="primary">
          {textSection.title}
        </Typography>
      </TextSectionHeading>
      <Spacing variant={SpacingEnum.BOTTOM} spacing={1} />
      <Typography>{textSection.subTitle}</Typography>
      <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
      <CustomButtonBox variant="contained">
        <Link href={generateUrl()}>
          <Typography>Get Started</Typography>
        </Link>
      </CustomButtonBox>
    </TextSectionRight>
  );
};

export default BottomTextSection;

/* eslint-disable react/require-default-props */
import React, { memo } from 'react';

import { Grid } from '@/components';
import { StringHelper } from '@/helper';
import { CustomContainer } from '@/styles';
import { IChooseYouPacakge } from '@/json';

import Card from './components/card';
import { ChooseYourPackageBox } from './chooseYouPackage.style';

interface IPackageData {
  planCost: string;
  planType: string;
  packageDes: string[];
  monthly: boolean;
}

interface IProps {
  packageData: IPackageData[];
  handlePlan: (plan: string) => void;
  id?: string;
}

/**
 * @component {ChooseYourPackage} - This component is for showing ChooseYourPackage.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const ChooseYourPackage = (props: IProps): JSX.Element => {
  const { packageData, handlePlan, id } = props;

  return (
    <ChooseYourPackageBox>
      <CustomContainer>
        <Grid
          container
          spacing={{ xs: 4 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {packageData.map((data: IChooseYouPacakge, index: number) => (
            <Grid
              item
              key={StringHelper.generateUID(data.planType, index)}
              xs={12}
              sm={4}
              md={packageData.length === 4 ? 3 : 4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                packageDes={data.packageDes}
                planCost={data.planCost}
                planType={data.planType}
                handlePlan={handlePlan}
                monthly={data.monthly}
                id={id as string}
              />
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </ChooseYourPackageBox>
  );
};

export default memo(ChooseYourPackage);

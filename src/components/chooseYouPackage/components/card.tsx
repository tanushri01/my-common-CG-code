import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import {
  Box,
  Chip,
  Spacing,
  SpacingEnum,
  Typography,
  Icon,
} from '@/components';
import { StringHelper } from '@/helper';

import {
  CustomCardActions,
  ProductDeailCard,
  CustomCardContent,
} from './card.style';
import { SELECTED_PLAN, useAppSelector } from '@/redux';

interface IProps
  extends Readonly<{
    packageDes: string[];
    planCost: string;
    planType: string;
    handlePlan: (plan: string) => void;
    id: string;
    monthly?: boolean;
  }> {}

/**
 * @component {Card} - This component is using for Package Card.
 * @param {IProps} props
 * @return {JSX.Element}
 *
 */
const Card = (props: IProps): JSX.Element => {
  const { packageDes, planCost, planType, handlePlan, id, monthly } = props;
  const selectedPlan = useAppSelector(SELECTED_PLAN);

  return (
    <ProductDeailCard>
      <CustomCardContent>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2" color="primary" sx={{ m: '0 !important' }}>
              {planCost}
            </Typography>
            <Typography variant="body1" color="primary">
              {monthly ? '/month' : '/Flat fee'}
            </Typography>
          </Box>
          <Spacing spacing={1} variant={SpacingEnum.BOTTOM} />
          <Chip
            label={planType}
            color="primary"
            size="small"
            sx={{ minWidth: '100px' }}
          />
          <Spacing spacing={2} variant={SpacingEnum.BOTTOM} />
          <Typography color="primary">Package includes:</Typography>
          <Spacing spacing={2} variant={SpacingEnum.BOTTOM} />
        </Box>
        {packageDes.map((data, index) => (
          <Box
            sx={{ display: 'flex', mb: 2 }}
            key={StringHelper.generateUID(data, index)}
          >
            <Icon disableButton icon={faCheck} />
            <Spacing spacing={2} variant={SpacingEnum.RIGHT} />
            <Typography>{data}</Typography>
          </Box>
        ))}
      </CustomCardContent>
      {!id && (
        <CustomCardActions
          size="small"
          color="primary"
          variant="contained"
          onClick={() => handlePlan(planCost)}
        >
          {selectedPlan !== planCost ? 'Select Plan' : 'Selected Plan'}
        </CustomCardActions>
      )}
    </ProductDeailCard>
  );
};

export default Card;

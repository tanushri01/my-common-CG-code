import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box, Typography } from '@/components';
import ChooseYourPackage from '@/components/chooseYouPackage';
import { ISubStepRef } from '@/interface';

import { useMakePaymentController } from './makePayment.controller';

/**
 * @page {MakePayment} - Make Payment for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const MakePayment = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers } = useMakePaymentController();
  const { selectedPlan, error, chooseYourPackage } = getters;
  const { handleSelectPlan, setError } = handlers;

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (selectedPlan && !error) {
        setError(false);
        return true;
      }
      setError(true);
      return false;
    },
  }));

  return (
    <Box>
      <Typography
        variant="h3"
        color="primary"
        sx={{ textAlign: 'center', mb: 12 }}
      >
        Payment
      </Typography>
      {error && (
        <Typography sx={{ textAlign: 'center' }}>
          Please select the plan first then click on continue button
        </Typography>
      )}
      <ChooseYourPackage
        packageData={chooseYourPackage}
        handlePlan={handleSelectPlan}
      />
    </Box>
  );
};

export default memo(forwardRef<ISubStepRef>(MakePayment));

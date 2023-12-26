import React, { memo } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { Divider } from '@mui/material';

import { Box, Typography } from '@/components';
import { PaymentEnum } from '@/enum';
import { CustomButtonBox, StepBox } from '@/styles';

import { usePaymentController } from './payment.controller';

/**
 * @page {Payment} - Make Payment for the form

 * @return {JSX.Element}
 */
const Payment = (): JSX.Element => {
  const { getters, handlers } = usePaymentController();
  const {
    stripe,
    elements,
    theme,
    errorMessage,
    payment,
    cardCompleted,
    disable,
    selectedPlan,
    isPayment,
  } = getters;
  const {
    handleSubmit,
    setCardCompleStatus,
    setErrorMessage,
    setPayment,
    paymentStatus,
  } = handlers;

  return (
    <form onSubmit={handleSubmit}>
      <StepBox>
        <Box>
          <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
            Finalize your purchase.
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Debt Validation Letter Basic{' '}
          </Typography>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
            Package <Typography>{selectedPlan}</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between' }}>
            Total <Typography>{selectedPlan}</Typography>
          </Box>
          {!isPayment && (
            <Box
              sx={{
                border: `1px solid ${theme.palette.border.main}`,
                p: 2,
                borderRadius: '0px 10px 0px 10px',
              }}
            >
              <CardElement
                options={{
                  hidePostalCode: true,
                  iconStyle: 'solid',
                  style: {
                    base: {
                      color: theme.palette.common.black,
                    },
                  },
                }}
                onChange={(event: StripeCardElementChangeEvent) => {
                  setCardCompleStatus(event.complete);
                  if (event.error) {
                    setPayment({ status: PaymentEnum.ERROR });
                    setErrorMessage(event.error.message ?? 'Error in fetching');
                    setTimeout(() => {
                      setErrorMessage('');
                    }, 3000);
                  }
                }}
              />
            </Box>
          )}
        </Box>
        {errorMessage.length > 0 && <Typography>{errorMessage}</Typography>}
        <CustomButtonBox
          variant="contained"
          type="submit"
          size="medium"
          disabled={
            !['initial', 'succeeded', 'error'].includes(payment.status) ||
            !stripe ||
            !elements ||
            !cardCompleted ||
            disable
          }
          onChange={() => paymentStatus(payment.status)}
          sx={{ mt: 3 }}
        >
          Pay Now
        </CustomButtonBox>
      </StepBox>
    </form>
  );
};

export default memo(Payment);

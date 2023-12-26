/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Box, Typography } from '@/components';
import {
  PAYMENT_HISTORY,
  PaymentThunk,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { RoutePathEnum, StepTypeEnum } from '@/enum';
import { DocumentBox, ErrorTypography } from './docMultilineText.style';

interface IProps
  extends Readonly<{
    title: string;
    subTitle: string;
    form: RoutePathEnum;
    formId?: string;
    activeSteps?: number;
    subActiveSteps?: number;
    isDisabled?: boolean;
  }> {}

/**
 * @component {DocMultiLineText} - This is for Title and SubTilte.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const DocMultiLineText = (props: IProps): JSX.Element => {
  const {
    title,
    subTitle,
    form,
    formId,
    activeSteps,
    subActiveSteps,
    isDisabled,
  } = props;
  const dispatch = useAppDispatch();
  const paymentHistory = useAppSelector(PAYMENT_HISTORY);
  const [activeStep, setActiveStep] = useState<number>(StepTypeEnum.FOUR);
  const [subActiveStep, setSubActiveStep] = useState<number>(StepTypeEnum.ZERO);

  useEffect(() => {
    if (
      formId === paymentHistory.formId &&
      paymentHistory.status === 'succeeded'
    ) {
      setActiveStep(StepTypeEnum.FOUR);
      setSubActiveStep(StepTypeEnum.ZERO);
    } else {
      setActiveStep(activeSteps as number);
      setSubActiveStep(subActiveSteps as number);
    }
  }, [
    activeStep,
    activeSteps,
    formId,
    paymentHistory,
    paymentHistory.status,
    subActiveStep,
    subActiveSteps,
  ]);

  useEffect(() => {
    const payload = {
      formId: formId as string,
    };
    dispatch(PaymentThunk.getTransactionHistory(payload));
  }, [dispatch, formId]);

  return (
    <DocumentBox>
      <Box className={isDisabled ? 'disabled' : ''}>
        {isDisabled ? (
          <Box>
            <Typography
              color="primary"
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
            >
              {title}
            </Typography>
          </Box>
        ) : (
          <Link
            href={
              formId
                ? {
                    pathname: form,
                    query: { formId, activeStep, subActiveStep },
                  }
                : form
            }
            style={{ textDecoration: 'none' }}
          >
            <Typography
              color="primary"
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
            >
              {title}
            </Typography>
          </Link>
        )}
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          {subTitle}
        </Typography>
      </Box>
      {isDisabled && (
        <ErrorTypography variant="caption">
          This Form's limit has been reached, maximum three forms are allowed.
        </ErrorTypography>
      )}
    </DocumentBox>
  );
};

export default DocMultiLineText;

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import {
  FORM_SUBHEADING,
  FORM_SUBTITLE,
  FORM_TITLE,
  US_COURT_COMPLAINT,
} from '@/constant';
import { CustomContainer } from '@/styles';
import FormStepper from '@/components/formStepper';
import { AuthProvider } from '@/contexts';

import GenerateResponse from './components/generateReport';
import MakePayment from './components/makePayment';
import SendLetter from './components/sendLetter';
import ProvideYourInformation from './components/provideYourInfo';
import OtherQuestions from './components/otherQuestions';

import { useUsCourtComplaintController } from './uscourtcomplaint.controller';
import { FormSubheading } from './uscourtcomplaint.style';
import { IMultistepFormResponse } from '@/interface';
import { form1Actions, useAppDispatch } from '@/redux';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {UsCourtComplaint} - Form page for Us Court Complaint Form
 * @return {JSX.Element}
 */
const UsCourtComplaint = (): JSX.Element => {
  const { getters, refs, handlers } = useUsCourtComplaintController();
  const { step1Ref, step2Ref, step3Ref, step4Ref, step5Ref } = refs;
  const { continueStep } = handlers;
  const { formId, usCourtComplaintData } = getters;
  const dispatch = useAppDispatch();

  console.log(usCourtComplaintData, 'usCourtComplaintData');

  useEffect(() => {
    if (usCourtComplaintData?.length > 0) {
      dispatch(
        form1Actions.setFormData(
          usCourtComplaintData as IMultistepFormResponse[],
        ),
      );
    }
  }, [usCourtComplaintData, dispatch, formId]);

  return (
    <CustomContainer>
      <Heading title={FORM_TITLE} subTitle={FORM_SUBTITLE} />
      <FormSubheading>{FORM_SUBHEADING}</FormSubheading>
      <FormStepper
        firstStep={<ProvideYourInformation ref={step1Ref} />}
        secondStep={<OtherQuestions ref={step2Ref} />}
        generateResponse={<GenerateResponse ref={step3Ref} />}
        makePayment={<MakePayment ref={step4Ref} />}
        sendLetter={<SendLetter ref={step5Ref} />}
        continueStep={continueStep}
      />
    </CustomContainer>
  );
};

export default UsCourtComplaint;

UsCourtComplaint.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={US_COURT_COMPLAINT}>{page}</Layout>
  </AuthProvider>
);

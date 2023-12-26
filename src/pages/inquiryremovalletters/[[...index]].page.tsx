import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import {
  FORM_SUBHEADING,
  FORM_SUBTITLE,
  FORM_TITLE,
  INQUIRY_REMOVAL_LETTERS,
} from '@/constant';
import { CustomContainer } from '@/styles';
import FormStepper from '@/components/formStepper';
import { AuthProvider } from '@/contexts';
import { form1Actions, useAppDispatch } from '@/redux';
import { IMultistepFormResponse } from '@/interface';

import ProvideYourInfo from './components/provideYourInfo';
import OtherQuestions from './components/otherQuestions';
import GenerateReport from './components/generateReport';
import MakePayment from './components/makePayment';
import SendLetter from './components/sendLetter';

import { useInquiryRemovalLettersController } from './inquiryremovalletters.controller';
import { FormSubheading } from './inquiryremovalletters.style';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {InquiryRemovalLetters} - Form page for Inquiry Removal Letters Form
 * @return {JSX.Element}
 */
const InquiryRemovalLetters = (): JSX.Element => {
  const { getters, refs, handlers } = useInquiryRemovalLettersController();
  const { step1Ref, step2Ref, step3Ref, step4Ref, step5Ref } = refs;
  const { continueStep } = handlers;
  const { currentFormData, formId } = getters;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentFormData) {
      const forms = currentFormData.filter(
        (currentForms: IMultistepFormResponse) =>
          currentForms.formId === formId,
      );
      if (!forms) return;

      dispatch(form1Actions.setFormData(forms));
    }
  }, [currentFormData, dispatch, formId]);

  return (
    <CustomContainer>
      <Heading title={FORM_TITLE} subTitle={FORM_SUBTITLE} />
      <FormSubheading>{FORM_SUBHEADING}</FormSubheading>
      <FormStepper
        firstStep={<ProvideYourInfo ref={step1Ref} />}
        secondStep={<OtherQuestions ref={step2Ref} />}
        generateResponse={<GenerateReport ref={step3Ref} />}
        makePayment={<MakePayment ref={step4Ref} />}
        sendLetter={<SendLetter ref={step5Ref} />}
        continueStep={continueStep}
      />
    </CustomContainer>
  );
};

export default InquiryRemovalLetters;

InquiryRemovalLetters.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={INQUIRY_REMOVAL_LETTERS}>{page}</Layout>
  </AuthProvider>
);

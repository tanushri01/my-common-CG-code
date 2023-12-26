import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import {
  BANKRUPTCY_REMOVAL_LETTERS,
  FORM_SUBHEADING,
  FORM_SUBTITLE,
  FORM_TITLE,
} from '@/constant';
import { CustomContainer } from '@/styles';
import FormStepper from '@/components/formStepper';
import { AuthProvider } from '@/contexts';
import { form1Actions, useAppDispatch } from '@/redux';
import { IMultistepFormResponse } from '@/interface';

import GenerateResponse from './components/generateReport';
import MakePayment from './components/makePayment';
import SendLetter from './components/sendLetter';
import ProvideYourInformation from './components/provideYourInfo';
import OtherQuestions from './components/otherQuestions';

import { useBankruptcyRemovalController } from './bankruptcyremovalletter.controller';
import { FormSubheading } from './bankruptcyremovalletters.style';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {BankruptcyRemovalLetters} - Form page for Bankruptcy Removal Letters Form
 * @return {JSX.Element}
 */
const BankruptcyRemovalLetters = (): JSX.Element => {
  const { getters, refs, handlers } = useBankruptcyRemovalController();
  const { step1Ref, step2Ref, step3Ref, step4Ref, step5Ref } = refs;
  const { continueStep } = handlers;
  const { currentFormData, formId } = getters;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const forms = currentFormData.filter(
      (currentForms: IMultistepFormResponse) => currentForms.formId === formId,
    );
    if (!forms) return;

    dispatch(form1Actions.setFormData(forms));
  }, [currentFormData, dispatch, formId]);

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

export default BankruptcyRemovalLetters;

BankruptcyRemovalLetters.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={BANKRUPTCY_REMOVAL_LETTERS}>{page}</Layout>
  </AuthProvider>
);

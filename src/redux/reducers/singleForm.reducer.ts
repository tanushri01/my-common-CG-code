// Disabled for the Entire file due to no pram reassing but its required in
// Redux
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ReducerEnum } from '@/enum';
import { IMultistepFormResponse } from '@/interface';
import { IFourthStep } from '@/pages/creditdisputeletters/interfaces';
import { IThirdStep } from '@/pages/uscourtcomplaint/interfaces';

export interface IForm1State {
  activeStep: number;
  subActiveStep: number;
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  fifthQuestion: string;
  sixthQuestion: string;
  seventhQuestion: string;
  tenthQuestion: string | string[];
  eleventhQuestion: string;
  twelthQuestion: string;
  thirteenthQuestion: string;
  selectedPlan: string;
  generateReport: string;
  debtCollectorInfo: IFourthStep[];
}

const initialState: IForm1State = {
  activeStep: 0,
  subActiveStep: 0,
  fullName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
  fifthQuestion: 'yes',
  sixthQuestion: 'yes',
  seventhQuestion: 'yes',
  tenthQuestion: ['Equifax Information Services, LLC'],
  eleventhQuestion: 'credit card debt',
  twelthQuestion: 'yes',
  thirteenthQuestion: 'yes',
  generateReport: '',
  selectedPlan: '',
  debtCollectorInfo: [
    {
      dcName: '',
      dcStreet: '',
      dcCity: '',
      dcState: '',
      dcZipCode: '',
    },
  ],
};

export const form1Slice = createSlice({
  name: ReducerEnum.FORMS,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setActiveStep: (state: IForm1State, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    },
    setSubActiveStep: (state: IForm1State, action: PayloadAction<number>) => {
      state.subActiveStep = action.payload;
    },
    setFullName: (state: IForm1State, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setStreet: (state: IForm1State, action: PayloadAction<string>) => {
      state.street = action.payload;
    },
    setCity: (state: IForm1State, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setState: (state: IForm1State, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setZipCode: (state: IForm1State, action: PayloadAction<string>) => {
      state.zipCode = action.payload;
    },
    setPhone: (state: IForm1State, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setDebtCollectorInfo: (
      state: IForm1State,
      action: PayloadAction<IFourthStep[]>,
    ) => {
      state.debtCollectorInfo = action.payload;
    },
    setFifthQuestion: (state: IForm1State, action: PayloadAction<string>) => {
      state.fifthQuestion = action.payload;
    },
    setSixthQuestion: (state: IForm1State, action: PayloadAction<string>) => {
      state.sixthQuestion = action.payload;
    },
    setSeventhQuestion: (state: IForm1State, action: PayloadAction<string>) => {
      state.seventhQuestion = action.payload;
    },
    setTenthQuestion: (
      state: IForm1State,
      action: PayloadAction<string | string[]>,
    ) => {
      state.tenthQuestion = action.payload;
    },
    setEleventhQuestion: (
      state: IForm1State,
      action: PayloadAction<string>,
    ) => {
      state.eleventhQuestion = action.payload;
    },
    setTwelthQuestion: (state: IForm1State, action: PayloadAction<string>) => {
      state.twelthQuestion = action.payload;
    },
    setThirteenthQuestion: (
      state: IForm1State,
      action: PayloadAction<string>,
    ) => {
      state.thirteenthQuestion = action.payload;
    },
    setSelectedPlan: (state: IForm1State, action: PayloadAction<string>) => {
      state.selectedPlan = action.payload;
    },
    setFormData: (
      state: IForm1State,
      action: PayloadAction<IMultistepFormResponse[]>,
    ) => {
      const [
        secondStep,
        thirdStep,
        fourthStep,
        fifthStep,
        sixthStep,
        seventhStep,
        tenthStep,
        eleventhStep,
        twelthStep,
        thirteenthStep,
        generateReport,
      ] = action.payload;

      if (!secondStep) return;
      state.fullName = secondStep.answer as string;

      if (!thirdStep) return;
      const thirdStepAnswer = thirdStep.answer as IThirdStep;
      state.street = thirdStepAnswer.street;
      state.city = thirdStepAnswer.city;
      state.state = thirdStepAnswer.state;
      state.zipCode = thirdStepAnswer.zipCode;
      state.phone = thirdStepAnswer.phone;

      if (!fourthStep) return;
      state.debtCollectorInfo = fourthStep.answer as IFourthStep[];

      if (!fifthStep) return;
      state.fifthQuestion = fifthStep.answer as string;

      if (!sixthStep) return;
      state.sixthQuestion = sixthStep.answer as string;

      if (!seventhStep) return;
      state.seventhQuestion = seventhStep.answer as string;

      if (!tenthStep) return;
      state.tenthQuestion = tenthStep.answer as string | string[];

      if (!eleventhStep) return;
      state.eleventhQuestion = eleventhStep.answer as string;

      if (!twelthStep) return;
      state.twelthQuestion = twelthStep.answer as string;

      if (!thirteenthStep) return;
      state.thirteenthQuestion = thirteenthStep.answer as string;

      if (!generateReport) return;
      state.generateReport = generateReport.answer as string;
    },
  },
});

// Action creators are generated for each case reducer function
export const form1Actions = { ...form1Slice.actions };

export default form1Slice.reducer;

import { RootState } from '@/redux';

export const FULL_NAME = (state: RootState) => state.form1.fullName;
export const STREET = (state: RootState) => state.form1.street;
export const CITY = (state: RootState) => state.form1.city;
export const STATE = (state: RootState) => state.form1.state;
export const ZIP_CODE = (state: RootState) => state.form1.zipCode;
export const PHONE = (state: RootState) => state.form1.phone;

export const DC_INFO = (state: RootState) => state.form1.debtCollectorInfo;

export const FIFTH_QUESTION = (state: RootState) => state.form1.fifthQuestion;

export const SIXTH_QUESTION = (state: RootState) => state.form1.sixthQuestion;
export const SEVENTH_QUESTION = (state: RootState) =>
  state.form1.seventhQuestion;
export const TENTH_QUESTION = (state: RootState) => state.form1.tenthQuestion;
export const ELEVENTH_QUESTION = (state: RootState) =>
  state.form1.eleventhQuestion;
export const TWELTH_QUESTION = (state: RootState) => state.form1.twelthQuestion;
export const THIRTEENTH_QUESTION = (state: RootState) =>
  state.form1.thirteenthQuestion;

export const ACTIVE_STEP = (state: RootState) => state.form1.activeStep;
export const SUB_ACTIVE_STEP = (state: RootState) => state.form1.subActiveStep;

export const SELECTED_PLAN = (state: RootState) => state.form1.selectedPlan;

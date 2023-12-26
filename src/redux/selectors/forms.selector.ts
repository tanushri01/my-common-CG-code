import { RootState } from '@/redux';

export const FORMS_DATA = (state: RootState) => state.forms.formsData;
export const IS_LOADING = (state: RootState) => state.forms.isLoading;
export const FORM_ID = (state: RootState) => state.forms.formId;
export const CURRENT_FORM_DATA = (state: RootState) =>
  state.forms.currentFormData;
export const US_COURT_FORM_DATA = (state: RootState) =>
  state.forms.formDataForUsCourt;
export const FORMS_LIMIT = (state: RootState) => state.forms.formsLimit;
export const FIRST_FORM_LIMIT = (state: RootState) =>
  state.forms.firstFormLimit;
export const SECOND_FORM_LIMIT = (state: RootState) =>
  state.forms.secondFormLimit;
export const THIRD_FORM_LIMIT = (state: RootState) =>
  state.forms.thirdFormLimit;
export const FOURTH_FORM_LIMIT = (state: RootState) =>
  state.forms.fourthFormLimit;

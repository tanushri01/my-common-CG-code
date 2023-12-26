// Disabled for the Entire file due to no pram reassing but its required in
// Redux
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LocalStorageEnum, ReducerEnum } from '@/enum';
import {
  IAddMultistepFormResponse,
  IGetUserFormsLimitResponse,
  IMultistepFormResponse,
} from '@/interface';
import { StorageHelper } from '@/helper';

import { FormsThunk } from '../actions';

export interface IFormsState {
  formsData: IMultistepFormResponse[];
  isLoading: boolean;
  formId: string;
  currentFormData: IMultistepFormResponse[];
  formDataForUsCourt: IMultistepFormResponse[];
  formsLimit: IGetUserFormsLimitResponse;
  firstFormLimit: boolean;
  secondFormLimit: boolean;
  thirdFormLimit: boolean;
  fourthFormLimit: boolean;
}

const initialState: IFormsState = {
  formsData: {} as IMultistepFormResponse[],
  isLoading: true,
  formId: '',
  currentFormData: [],
  formDataForUsCourt: {} as IMultistepFormResponse[],
  formsLimit: {} as IGetUserFormsLimitResponse,
  firstFormLimit: false,
  secondFormLimit: false,
  thirdFormLimit: false,
  fourthFormLimit: false,
};

export const formsSlice = createSlice({
  name: ReducerEnum.FORMS,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setIsLoading: (state: IFormsState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setFormsData: (
      state: IFormsState,
      action: PayloadAction<IMultistepFormResponse[]>,
    ) => {
      state.formsData = action.payload;
    },
    setCurrentFormData: (
      state: IFormsState,
      action: PayloadAction<IMultistepFormResponse[]>,
    ) => {
      state.currentFormData = action.payload;
    },
    setFormId: (state: IFormsState, action: PayloadAction<string>) => {
      state.formId = action.payload;
    },
    setfirstFormLimit: (state: IFormsState, action: PayloadAction<boolean>) => {
      state.firstFormLimit = action.payload;
    },
    setSecondFormLimit: (
      state: IFormsState,
      action: PayloadAction<boolean>,
    ) => {
      state.secondFormLimit = action.payload;
    },
    setThirdFormLimit: (state: IFormsState, action: PayloadAction<boolean>) => {
      state.thirdFormLimit = action.payload;
    },
    setFourthFormLimit: (
      state: IFormsState,
      action: PayloadAction<boolean>,
    ) => {
      state.fourthFormLimit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      FormsThunk.fetchInProgressForms.fulfilled,
      (
        state: IFormsState,
        payload: PayloadAction<IMultistepFormResponse[]>,
      ) => {
        state.formsData = payload.payload;
      },
    );

    builder.addCase(
      FormsThunk.fetchInProgressForms.rejected,
      (state: IFormsState) => {
        state.formsData = [];
      },
    );

    builder.addCase(
      FormsThunk.addForm.fulfilled,
      (
        state: IFormsState,
        payload: PayloadAction<IAddMultistepFormResponse>,
      ) => {
        const formId = StorageHelper.getLocalStorage(LocalStorageEnum.FORM_ID);

        if (payload.payload.formId) {
          state.formId = payload.payload.formId;
        } else {
          state.formId = formId;
        }
      },
    );

    builder.addCase(FormsThunk.addForm.rejected, (state: IFormsState) => {
      state.formId = '';
    });

    builder.addCase(
      FormsThunk.fetchForm.fulfilled,
      (
        state: IFormsState,
        payload: PayloadAction<IMultistepFormResponse[]>,
      ) => {
        state.currentFormData = payload.payload;
      },
    );

    builder.addCase(FormsThunk.fetchForm.rejected, (state: IFormsState) => {
      state.currentFormData = [];
    });

    builder.addCase(
      FormsThunk.fetchUsCourtForm.fulfilled,
      (
        state: IFormsState,
        payload: PayloadAction<IMultistepFormResponse[]>,
      ) => {
        state.formDataForUsCourt = payload.payload;
      },
    );

    builder.addCase(
      FormsThunk.fetchUsCourtForm.rejected,
      (state: IFormsState) => {
        state.formDataForUsCourt = [];
      },
    );

    builder.addCase(
      FormsThunk.fetchMaxLimitForms.fulfilled,
      (
        state: IFormsState,
        payload: PayloadAction<IGetUserFormsLimitResponse>,
      ) => {
        state.formsLimit = payload.payload;
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const formsActions = { ...formsSlice.actions };

export default formsSlice.reducer;

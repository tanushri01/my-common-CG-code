// Disabled for the Entire file due to no pram reassing but its required in
// Redux
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PaymentThunk } from '../actions';

import { ReducerEnum } from '@/enum';
import {
  IGetTransactionResponse,
  IUpdateTransactionResponse,
} from '@/interface';

export interface IPaymentState {
  updateTransactionHistory: IUpdateTransactionResponse;
  isPayment: boolean;
  paymentHistory: IGetTransactionResponse;
}

const initialState: IPaymentState = {
  updateTransactionHistory: {} as IUpdateTransactionResponse,
  isPayment: false,
  paymentHistory: {} as IGetTransactionResponse,
};

export const paymentSlice = createSlice({
  name: ReducerEnum.PAYMENT,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setIsPayment: (state: IPaymentState, action: PayloadAction<boolean>) => {
      state.isPayment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      PaymentThunk.updateTransactionHistory.fulfilled,
      (
        state: IPaymentState,
        payload: PayloadAction<IUpdateTransactionResponse>,
      ) => {
        state.updateTransactionHistory = payload.payload;
      },
    );

    builder.addCase(
      PaymentThunk.getTransactionHistory.fulfilled,
      (
        state: IPaymentState,
        payload: PayloadAction<IGetTransactionResponse>,
      ) => {
        state.paymentHistory = payload.payload;
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const paymentActions = { ...paymentSlice.actions };

export default paymentSlice.reducer;

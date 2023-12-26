// Disabled for the Entire file due to no pram reassing but its required in
// Redux
/* eslint-disable no-param-reassign */
import {
  PayloadAction,
  createSlice,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';

import { AuthenticationThunk } from '../actions';

import { ReducerEnum } from '@/enum';
import { IApiResponseWithBody } from '@/interface';
import { IValidateTokenResponse } from '@/pages/resetpassword/interface';
import { ISignInResponse } from '@/pages/auth/interface';

export interface IAuthticationState {
  isAuthenticated: boolean;
  istokenvalid: boolean;
}

const initialState: IAuthticationState = {
  isAuthenticated: false,
  istokenvalid: false,
};

export const authSlice = createSlice({
  name: ReducerEnum.AUTHENTICATION,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAuthticationState>) => {
    builder.addCase(
      AuthenticationThunk.signIn.fulfilled,
      (
        state: IAuthticationState,
        payload: PayloadAction<IApiResponseWithBody<ISignInResponse>>,
      ) => {
        if (payload.payload.body.token) {
          state.isAuthenticated = true;
        }
      },
    );

    builder.addCase(
      AuthenticationThunk.signIn.rejected,
      (state: IAuthticationState) => {
        state.isAuthenticated = false;
      },
    );

    builder.addCase(
      AuthenticationThunk.signUp.fulfilled,
      (
        state: IAuthticationState,
        payload: PayloadAction<IApiResponseWithBody<ISignInResponse>>,
      ) => {
        if (payload.payload.body.token) {
          state.isAuthenticated = true;
        }
      },
    );

    builder.addCase(
      AuthenticationThunk.signUp.rejected,
      (state: IAuthticationState) => {
        state.isAuthenticated = false;
      },
    );

    builder.addCase(
      AuthenticationThunk.validateResetPasswordToken.fulfilled,
      (
        state: IAuthticationState,
        payload: PayloadAction<IValidateTokenResponse>,
      ) => {
        state.istokenvalid = payload.payload.isTokenValid;
      },
    );

    builder.addCase(
      AuthenticationThunk.validateResetPasswordToken.rejected,
      (state: IAuthticationState) => {
        state.istokenvalid = false;
      },
    );

    builder.addCase(
      AuthenticationThunk.logout.fulfilled,
      (state: IAuthticationState) => {
        state.isAuthenticated = false;
      },
    );

    builder.addCase(
      AuthenticationThunk.logout.rejected,
      (state: IAuthticationState) => {
        state.isAuthenticated = true;
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const authenticationActions = { ...authSlice.actions };

export default authSlice.reducer;

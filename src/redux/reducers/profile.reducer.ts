// Disabled for the Entire file due to no pram reassing but its required in
// Redux
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ProfileThunk } from '../actions';

import { ReducerEnum } from '@/enum';
import { IGetProfileResponse, IUpdateProfileRequest } from '@/interface';

export interface IProfileState {
  profileData: IGetProfileResponse;
  updateProfile: IUpdateProfileRequest;
}

const initialState: IProfileState = {
  profileData: {} as IGetProfileResponse,
  updateProfile: {} as IUpdateProfileRequest,
};

export const profileSlice = createSlice({
  name: ReducerEnum.PROFILE,
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setUpdateProfile: (
      state: IProfileState,
      action: PayloadAction<IUpdateProfileRequest>,
    ) => {
      state.updateProfile.email = action.payload.email;
      state.updateProfile.firstName = action.payload.firstName;
      state.updateProfile.lastName = action.payload.lastName;
      state.updateProfile.newPassword = action.payload.newPassword;
      state.updateProfile.confirmPassword = action.payload.confirmPassword;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      ProfileThunk.fetchProfileInfo.fulfilled,
      (state: IProfileState, payload: PayloadAction<IGetProfileResponse>) => {
        state.profileData = payload.payload;
      },
    );
    builder.addCase(
      ProfileThunk.fetchProfileInfo.rejected,
      (state: IProfileState) => {
        state.profileData = {} as IGetProfileResponse;
      },
    );
  },
});

// Action creators are generated for each case reducer function
export const profileActions = { ...profileSlice.actions };

export default profileSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IGetProfileResponse,
  IUpdateProfileRequest,
  IUpdateProfileResponse,
} from '@/interface';
import { ProfileService } from '@/services';

/**
 * Profile Thunk
 */
export class ProfileThunk {
  /**
   * @function {fetchProfileInfo} - Method for fetching profile data
   * @return {Promise<IGetProfileResponse>}
   */
  public static fetchProfileInfo = createAsyncThunk(
    'profile/fetch',
    async (): Promise<IGetProfileResponse> => {
      const response = await ProfileService.fetchProfileInfo();
      return response;
    },
  );

  /**
   * @function {updateProfileInfo} - Method for updating profile data
   * @return {Promise<IUpdateProfileResponse>}
   */
  public static updateProfileInfo = createAsyncThunk(
    'profile/update',
    async (payload: IUpdateProfileRequest): Promise<IUpdateProfileResponse> => {
      const response = await ProfileService.updateProfileInfo(payload);
      return response;
    },
  );
}

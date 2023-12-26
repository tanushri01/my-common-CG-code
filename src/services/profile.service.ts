import { AxiosResponse } from 'axios';

import { ApiHelper, StorageHelper } from '../helper';

import {
  IApiResponseWithBody,
  IGetProfileResponse,
  IUpdateProfileRequest,
  IUpdateProfileResponse,
} from '@/interface';
import { LocalStorageEnum } from '@/enum';

/**
 * Profile Page Service
 */
export class ProfileService {
  /**
   * @functions {fetchProfileInfo} - For fetching profile page data
   * @return {Promise<IGetProfileResponse>}
   */
  public static async fetchProfileInfo(): Promise<IGetProfileResponse> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);
    const res: AxiosResponse<IApiResponseWithBody<IGetProfileResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IGetProfileResponse>>({
        url: `/api/user/userDetails/${userId}`,
        method: 'GET',
      });

    return res.data.body;
  }

  /**
   * @functions {updateProfileInfo} - For updating profile page data
   * @param {IUpdateProfileRequest} payload
   * @return {Promise<IUpdateProfileResponse>}
   */
  public static async updateProfileInfo(
    payload: IUpdateProfileRequest,
  ): Promise<IUpdateProfileResponse> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);
    const res: AxiosResponse<IApiResponseWithBody<IUpdateProfileResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IUpdateProfileResponse>>({
        url: `/api/user/updateUser/${userId}`,
        method: 'PUT',
        data: payload,
      });

    return res.data.body;
  }
}

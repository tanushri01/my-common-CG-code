import { AxiosResponse } from 'axios';

import { ApiHelper, StorageHelper, StringHelper } from '../helper';

import {
  IAddMultistepFormRequest,
  IAddMultistepFormResponse,
  IApiResponseWithBody,
  IFetchMultistepFormRequest,
  IGetUserFormsLimitResponse,
  IMultistepFormResponse,
} from '@/interface';
import { LocalStorageEnum } from '@/enum';

/**
 * Multistep Forms Service
 */
export class FormsService {
  /**
   * @functions {getInProgressForms} - For fetching data of InProgress forms
   * @param {IMultistepFormRequest} payload
   * @return {Promise<IMultistepFormResponse[]>}
   */
  public static async getInProgressForms(): Promise<IMultistepFormResponse[]> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);
    const res: AxiosResponse<IApiResponseWithBody<IMultistepFormResponse[]>> =
      await ApiHelper.send<IApiResponseWithBody<IMultistepFormResponse[]>>({
        url: StringHelper.translationHelper('/api/multistepForm/%s', userId),
        method: 'GET',
      });
    return res.data.body;
  }

  /**
   * @functions {addForm} - For adding data in form
   * @param {IAddMultistepFormRequest} payload
   * @return {Promise<IAddMultistepFormResponse>}
   */
  public static async addForm(
    payload: IAddMultistepFormRequest,
  ): Promise<IAddMultistepFormResponse> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);

    const res: AxiosResponse<IApiResponseWithBody<IAddMultistepFormResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IAddMultistepFormResponse>>({
        url: StringHelper.translationHelper('/api/multistepForm/%s', userId),
        method: 'POST',
        data: payload,
      });
    StorageHelper.setLocalStorage(
      LocalStorageEnum.FORM_ID,
      res.data.body.formId,
    );

    return res.data.body;
  }

  /**
   * @functions {fetchForm} - For fetching data in form
   * @param {IFetchMultistepFormRequest} payload
   * @return {Promise<IMultistepFormResponse[]>}
   */
  public static async fetchForm(
    payload: IFetchMultistepFormRequest,
  ): Promise<IMultistepFormResponse[]> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);

    const res: AxiosResponse<IApiResponseWithBody<IMultistepFormResponse[]>> =
      await ApiHelper.send<IApiResponseWithBody<IMultistepFormResponse[]>>({
        url: StringHelper.translationHelper(
          '/api/multistepForm/%s/%s',
          userId,
          payload.formId,
        ),
        method: 'GET',
      });

    return res.data.body;
  }

  /**
   * @functions {fetchUsCourtForm} - For fetching data in UsCourt form
   * @return {Promise<IMultistepFormResponse[]>}
   */
  public static async fetchUsCourtForm(): Promise<IMultistepFormResponse[]> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);

    const res: AxiosResponse<IApiResponseWithBody<IMultistepFormResponse[]>> =
      await ApiHelper.send<IApiResponseWithBody<IMultistepFormResponse[]>>({
        url: StringHelper.translationHelper(
          'api/usCourtForm/userId/%s',
          userId,
        ),
        method: 'GET',
      });

    return res.data.body;
  }

  /**
   * @functions {fetchMaxLimitForms} - For fetching data of maximum limit reached forms
   * @return {Promise<IGetUserFormsLimitResponse>}
   */
  public static async fetchMaxLimitForms(): Promise<IGetUserFormsLimitResponse> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);

    const res: AxiosResponse<IApiResponseWithBody<IGetUserFormsLimitResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IGetUserFormsLimitResponse>>({
        url: StringHelper.translationHelper('api/forms/limit/%s', userId),
        method: 'GET',
      });

    return res.data.body;
  }
}

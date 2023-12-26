import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IAddMultistepFormRequest,
  IAddMultistepFormResponse,
  IFetchMultistepFormRequest,
  IGetUserFormsLimitResponse,
  IMultistepFormResponse,
} from '@/interface';
import { FormsService } from '@/services';

/**
 * Forms Thunk
 */
export class FormsThunk {
  /**
   * @function {fetchInProgressForms} - Method for fetching forms data
   * @return {Promise<IMultistepFormResponse[]>}
   */
  public static fetchInProgressForms = createAsyncThunk(
    'forms/fetch',
    async (): Promise<IMultistepFormResponse[]> => {
      const response = await FormsService.getInProgressForms();
      return response;
    },
  );

  /**
   * @function {addForm} - Method for adding form data
   * @param {IAddMultistepFormRequest} payload
   * @return {Promise<IAddMultistepFormResponse>}
   */
  public static addForm = createAsyncThunk(
    'form/add',
    async (
      payload: IAddMultistepFormRequest,
    ): Promise<IAddMultistepFormResponse> => {
      const response = await FormsService.addForm(payload);
      return response;
    },
  );

  /**
   * @function {fetchForm} - Method for fetching form data
   * @param {IAddMultistepFormRequest} payload
   * @return {Promise<IMultistepFormResponse[]>}
   */
  public static fetchForm = createAsyncThunk(
    'form/fetch',
    async (
      payload: IFetchMultistepFormRequest,
    ): Promise<IMultistepFormResponse[]> => {
      const response = await FormsService.fetchForm(payload);
      return response;
    },
  );

  /**
   * @function {fetchUsCourtForm} - Method for fetching form data
   * @return {Promise<IMultistepFormResponse[]>}
   */
  public static fetchUsCourtForm = createAsyncThunk(
    'form/fetchUsCourt',
    async (): Promise<IMultistepFormResponse[]> => {
      const response = await FormsService.fetchUsCourtForm();
      return response;
    },
  );

  /**
   * @function {fetchMaxLimitForms} - Method for fetching form data
   * @return {Promise<IGetUserFormsLimitResponse>}
   */
  public static fetchMaxLimitForms = createAsyncThunk(
    'form/fetchFormLimit',
    async (): Promise<IGetUserFormsLimitResponse> => {
      const response = await FormsService.fetchMaxLimitForms();
      return response;
    },
  );
}

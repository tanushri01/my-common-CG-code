import { AxiosResponse } from 'axios';

import { ApiHelper, StorageHelper } from '../helper';

import { IApiResponseWithBody, IReportResponse } from '@/interface';
import { LocalStorageEnum } from '@/enum';

/**
 * Report Service
 */
export class ReportService {
  /**
   * @functions {downloadReport} - For downloading report and sending on mail
   * @return {Promise<IReportResponse>}
   */
  public static async downloadReport(): Promise<IReportResponse> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);
    const formId = StorageHelper.getLocalStorage(LocalStorageEnum.FORM_ID);
    const response: AxiosResponse<IApiResponseWithBody<IReportResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IReportResponse>>({
        url: `/api/sendReport/${userId}/${formId}`,
        method: 'GET',
      });

    return response.data.body;
  }

  /**
   * @functions {downloadReport} - For downloading report and sending on mail
   * @return {Promise<IReportResponse>}
   */
  public static async createReport(): Promise<IReportResponse> {
    const userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);
    const formId = StorageHelper.getLocalStorage(LocalStorageEnum.FORM_ID);
    const response: AxiosResponse<IApiResponseWithBody<IReportResponse>> =
      await ApiHelper.sendDownload<IApiResponseWithBody<IReportResponse>>(
        {
          url: `/api/createReport/${userId}/${formId}`,
          method: 'GET',
        },
        true,
      );

    return response.data.body;
  }
}

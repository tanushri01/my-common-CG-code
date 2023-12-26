import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';
import router from 'next/router';

import { StorageHelper } from './storage.helper';

import { LocalStorageEnum, RoutePathEnum } from '@/enum';

axios.defaults.headers.common.timezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';

/** Api Helper Class */
export class ApiHelper {
  /**
   * @functions {send} -To make generic  api call i.e. post, get, delete, update etc.
   * @param {AxiosRequestConfig} config
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async send<T>(
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const res: AxiosResponse<T, T> = await axios(config);
    return res;
  }

  /**
   * @functions {sendDownload} for normal api calling
   * @param {AxiosRequestConfig} config
   * @param {boolean} isContentType
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async sendDownload<T>(
    config: AxiosRequestConfig,
    isContentType?: boolean,
  ): Promise<AxiosResponse<T>> {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    axios.defaults.headers.common.Authorization = `Bearer ${StorageHelper.getSessionStorage(
      LocalStorageEnum.TOKEN,
    )}`;
    if (isContentType) {
      axios.defaults.headers.isPdf = true;
      axios.defaults.responseType = 'blob';
    }
    const axiosData = await axios({ ...config });
    if (isContentType) {
      const url = window.URL.createObjectURL(new Blob([axiosData.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf');
      document.body.appendChild(link);
      link.click();
    } else {
      axios.defaults.headers.isPdf = false;
      axios.defaults.responseType = undefined;
    }
    return axiosData;
  }

  /**
   * @functions {initRequestManager} Manage Request
   */
  public static initRequestManager() {
    axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const newConfig = config;
        const token = StorageHelper.getLocalStorage(LocalStorageEnum.TOKEN);
        newConfig.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error: AxiosError) => Promise.resolve(error),
    );
  }

  /**
   * @functions  {responseHandler} Manage response through interceptor
   */
  public static responseHandler() {
    axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error?.response?.status === 401) {
          router.push(window.location.origin + RoutePathEnum.SIGN_IN);
          StorageHelper.clearLocalStorage();
        }
        return Promise.reject(JSON.stringify(error.response?.data));
      },
    );
  }

  /**
   *  @functions {init} To Initiate  api call
   */
  public static init() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    ApiHelper.initRequestManager();
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * API for make payment
   * @param {string} url
   * @param {object} data
   * @return {Promise<any>}
   */
  public static async fetchPostJSON(url: string, data?: object): Promise<any> {
    try {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    } catch (error: unknown) {
      return error;
    }
  }

  /**
   * To make generic  api call for payment related API
   * @param {AxiosRequestConfig} requestObject
   * @return {Promise<AxiosResponse<T>>}
   */
  public static async PaymentAsync<T>(
    requestObject: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await axios(requestObject);
      if (response.status < 200 && response.status > 300) {
        // eslint-disable-next-line no-console
        throw console.error(`Error-${response.status}: ${response.statusText}`);
      }
      axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
      return response;
    } catch (error) {
      Promise.resolve(error);
      throw error;
    }
  }
}

ApiHelper.init();

import { useEffect } from 'react';

import {
  CITY,
  DC_INFO,
  FORM_ID,
  FULL_NAME,
  PHONE,
  PROFILE_DATA,
  ProfileThunk,
  STATE,
  STREET,
  TENTH_QUESTION,
  ZIP_CODE,
  useAppDispatch,
  useAppSelector,
} from '@/redux';

import { IFourthStep } from '../../interfaces';

interface IGenerateResponseControllerResponse {
  getters: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    dcInfo: IFourthStep[];
    today: Date;
    formId: string;
    email: string;
    companyNames: string | string[];
  };
}

/**
 * @controller {useGenerateReportController}
 * @return {IGenerateResponseControllerResponse}
 */
export const useGenerateReportController =
  (): IGenerateResponseControllerResponse => {
    const today = new Date();

    // Redux State
    const dispatch = useAppDispatch();
    const fullName = useAppSelector(FULL_NAME);
    const street = useAppSelector(STREET);
    const city = useAppSelector(CITY);
    const state = useAppSelector(STATE);
    const zipCode = useAppSelector(ZIP_CODE);
    const phone = useAppSelector(PHONE);
    const dcInfo = useAppSelector(DC_INFO);
    const formId = useAppSelector(FORM_ID);
    const profileData = useAppSelector(PROFILE_DATA);
    const companyNames = useAppSelector(TENTH_QUESTION);
    const { email } = profileData;

    useEffect(() => {
      dispatch(ProfileThunk.fetchProfileInfo());
    }, [dispatch]);

    return {
      getters: {
        phone,
        fullName,
        street,
        city,
        state,
        zipCode,
        dcInfo,
        today,
        formId,
        email,
        companyNames,
      },
    };
  };

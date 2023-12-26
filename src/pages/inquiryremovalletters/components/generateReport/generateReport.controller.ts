import {
  CITY,
  DC_INFO,
  FORM_ID,
  FULL_NAME,
  STATE,
  STREET,
  ZIP_CODE,
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
    dcInfo: IFourthStep[];
    today: Date;
    formId: string;
  };
}

/**
 * @controller {useGenerateResponseController}
 * @return {IGenerateResponseControllerResponse}
 */
export const useGenerateResponseController =
  (): IGenerateResponseControllerResponse => {
    const today = new Date();

    // Redux State
    const fullName = useAppSelector(FULL_NAME);
    const street = useAppSelector(STREET);
    const city = useAppSelector(CITY);
    const state = useAppSelector(STATE);
    const zipCode = useAppSelector(ZIP_CODE);
    const dcInfo = useAppSelector(DC_INFO);
    const formId = useAppSelector(FORM_ID);

    return {
      getters: {
        fullName,
        street,
        city,
        state,
        zipCode,
        dcInfo,
        today,
        formId,
      },
    };
  };

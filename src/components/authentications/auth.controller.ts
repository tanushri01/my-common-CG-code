import {
  RefObject,
  useRef,
  useState,
  useCallback,
  useEffect,
  KeyboardEvent,
} from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { AxiosError } from 'axios';

import { ITextInputFieldData, ITextInputFieldRef } from '@/components';
import {
  SIGNIN_SUCCESSFUL,
  SIGNUP_SUCCESSFUL,
  SIGN_IN,
  SOMETHING_WENT_WRONG,
} from '@/constant';
import {
  SnackbarTypeEnum,
  RoutePathEnum,
  LocalStorageEnum,
  LoginTypeEnum,
  KeyboardEventEnum,
} from '@/enum';
import { useAppSnackbar } from '@/hooks/snackbar.hook';
import { useAppDispatch, AuthenticationThunk } from '@/redux';

import { ISignInRequest, ISignUpRequest } from '../../pages/auth/interface';
import { ILocation } from './location';
import { StorageHelper } from '@/helper';

interface IAuthControllerResponse {
  getters: {
    email: string;
    password: string;
    showPassword: boolean;
    session: Session | null;
  };
  handlers: {
    onEmailChange: (event: ITextInputFieldData) => void;
    onPasswordChange: (event: ITextInputFieldData) => void;
    handleShowPassword: () => void;
    handleSubmit: () => Promise<void>;
    handleClickOnEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  };
  ref: {
    emailRef: RefObject<ITextInputFieldRef>;
    passwordRef: RefObject<ITextInputFieldRef>;
  };
}

interface IProps
  extends Readonly<{
    title: string;
  }> {}

/**
 * @controller {useAuthController}
 * @param {IProps} props
 * @return {IAuthControllerResponse}
 */
export const useAuthController = (props: IProps): IAuthControllerResponse => {
  // React State
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Redux State
  const dispatch = useAppDispatch();

  // React Refs
  const emailRef = useRef<ITextInputFieldRef>(null);
  const passwordRef = useRef<ITextInputFieldRef>(null);

  // Next Router
  const router = useRouter();
  const { data: session } = useSession();

  // Custom Hooks
  const { enqueueSnackbar } = useAppSnackbar();

  // Props
  const { title } = props;

  useEffect(() => {
    /**
     * @function fetchData
     */
    async function fetchData() {
      if (session) {
        const payload: ISignUpRequest = {
          email: session.user?.email as string,
          password: '',
          loginType: LoginTypeEnum.GOOGLE,
        };
        if (title === SIGN_IN) {
          await dispatch(AuthenticationThunk.signIn(payload)).unwrap();
        } else {
          await dispatch(AuthenticationThunk.signUp(payload)).unwrap();
        }
        const response = await fetch(
          'https://api.ipregistry.co/?key=lzct9jq8b5f1et5f',
        );
        const data: ILocation = await response.json();
        StorageHelper.setLocalStorage(
          LocalStorageEnum.COUNTRY,
          data.location.country.code,
        );
        if (title === SIGN_IN) {
          enqueueSnackbar(SIGNIN_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
        } else {
          enqueueSnackbar(SIGNUP_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
        }
        router.push(RoutePathEnum.HOME);
      }
    }
    fetchData();
  }, [dispatch, enqueueSnackbar, router, session, title]);

  /**
   * @function {onEmailChange}-  Handle on Change of email
   * @param {ITextInputFieldData} event
   */
  const onEmailChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    setEmail(value);
  }, []);

  /**
   * @function {onPasswordChange} -  Handle on Change of Password
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onPasswordChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    setPassword(value);
  }, []);

  /**
   * @functions {handleShowPassword} - To handle to show password functionality
   * @return {void}
   */
  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  /**
   * @function {isValidSubmittion} - Validate request before submittion
   * @return {boolean}
   */
  const isValidSubmittion = useCallback((): boolean => {
    const emailError = emailRef.current?.validateValue();
    const passwordError = passwordRef.current?.validateValue();

    if (!(emailError && passwordError)) {
      return true;
    }
    return false;
  }, []);

  /**
   * @function {handleSubmit} - To handle to sign in functionality
   * @return {Promise<void>}
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    if (isValidSubmittion()) {
      return;
    }

    if (title === SIGN_IN) {
      const payload: ISignInRequest = {
        email: email.trim(),
        password: password.trim(),
        loginType: LoginTypeEnum.NORMAL,
      };
      try {
        await dispatch(AuthenticationThunk.signIn(payload)).unwrap();
        const response = await fetch(
          'https://api.ipregistry.co/?key=lzct9jq8b5f1et5f',
        );
        const data = await response.json();
        StorageHelper.setLocalStorage(
          LocalStorageEnum.COUNTRY,
          data.location.country.code,
        );
        enqueueSnackbar(SIGNIN_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
        router.push(RoutePathEnum.MY_DOCUMENT);
      } catch (error: unknown) {
        const errorMessage = error as AxiosError;
        if (errorMessage && JSON.parse(errorMessage.message).message) {
          enqueueSnackbar(
            JSON.parse(errorMessage.message).message,
            SnackbarTypeEnum.ERROR,
          );
        } else {
          enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
        }
      }
    } else {
      const payload: ISignUpRequest = {
        email: email.trim(),
        password: password.trim(),
        loginType: LoginTypeEnum.NORMAL,
      };
      try {
        await dispatch(AuthenticationThunk.signUp(payload)).unwrap();
        const response = await fetch(
          'https://api.ipregistry.co/?key=lzct9jq8b5f1et5f',
        );
        const data: ILocation = await response.json();
        StorageHelper.setLocalStorage(
          LocalStorageEnum.COUNTRY,
          data.location.country.code,
        );
        enqueueSnackbar(SIGNUP_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
        router.push(RoutePathEnum.HOME);
      } catch (error) {
        const errorMessage = error as AxiosError;
        if (JSON.parse(errorMessage.message).message) {
          enqueueSnackbar(
            JSON.parse(errorMessage.message).message,
            SnackbarTypeEnum.ERROR,
          );
        } else {
          enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
        }
      }
    }
  }, [
    dispatch,
    email,
    enqueueSnackbar,
    isValidSubmittion,
    password,
    router,
    title,
  ]);

  /**
   * @function {handleClickOnEnter} - To handling on enter key
   * @param {KeyboardEvent<HTMLInputElement>} event
   */
  const handleClickOnEnter = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === KeyboardEventEnum.ENTER) {
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  return {
    getters: {
      email,
      password,
      showPassword,
      session,
    },
    handlers: {
      onEmailChange,
      onPasswordChange,
      handleShowPassword,
      handleSubmit,
      handleClickOnEnter,
    },
    ref: {
      emailRef,
      passwordRef,
    },
  };
};

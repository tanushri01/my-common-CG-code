import { RefObject, useRef, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ITextInputFieldData, ITextInputFieldRef } from '@/components';
import { LoginTypeEnum, RoutePathEnum, SnackbarTypeEnum } from '@/enum';
import { useAppSnackbar } from '@/hooks/snackbar.hook';
import {
  useAppDispatch,
  AuthenticationThunk,
  useAppSelector,
  AUTH_IS_TOKEN_VALID,
} from '@/redux';
import { RESET_SUCCESSFUL, SOMETHING_WENT_WRONG } from '@/constant';

import {
  IResetPasswordRequest,
  IValidateTokenResponse,
} from '../resetpassword/interface';
import { ISignInRequest } from '../auth/interface';

interface IResetPasswordControllerResponse {
  getters: {
    confirmPassword: string;
    password: string;
    showPassword: boolean;
    validatePassword: boolean;
    isButtonDisabled: boolean;
    showTokenExpireMessage: boolean;
    showContent: boolean;
  };
  handlers: {
    onConfirmPasswordChange: (event: ITextInputFieldData) => void;
    onPasswordChange: (event: ITextInputFieldData) => void;
    handleShowPassword: () => void;
    handleSubmit: () => Promise<void>;
  };
  ref: {
    confirmPasswordRef: RefObject<ITextInputFieldRef>;
    passwordRef: RefObject<ITextInputFieldRef>;
  };
}

/**
 * @controller {useResetPasswordController}
 * @return {IResetPasswordControllerResponse}
 */
export function useResetPasswordController(): IResetPasswordControllerResponse {
  // React State
  const [confirmPassword, setconfirmPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [validatePassword, setValidatePassword] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [showTokenExpireMessage, setShowTokenExpireMessage] =
    useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  // Redux State
  const dispatch = useAppDispatch();
  const isTokenValid = useAppSelector(AUTH_IS_TOKEN_VALID);

  // React Refs
  const confirmPasswordRef = useRef<ITextInputFieldRef>(null);
  const passwordRef = useRef<ITextInputFieldRef>(null);

  // React Router
  const router = useRouter();
  const { query } = useRouter();
  const { token, email } = query;

  // Custom Hooks
  const { enqueueSnackbar } = useAppSnackbar();

  /**
   * @function {onConfirmPasswordChange}-  Handle on Change of confirmPassword
   * @param {ITextInputFieldData} event
   */
  const onConfirmPasswordChange = useCallback(
    (event: ITextInputFieldData): void => {
      if (!event.event) return;
      const { value } = event.event.target;
      setconfirmPassword(value);
    },
    [],
  );

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
    const confirmPasswordError = confirmPasswordRef.current?.validateValue();
    const passwordError = passwordRef.current?.validateValue();

    if (!(confirmPasswordError && passwordError)) {
      return true;
    }
    return false;
  }, []);

  /**
   * @function {handleSubmit} - To handle to reset password functionality
   * @return {Promise<void>}
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    if (isValidSubmittion()) {
      return;
    }
    setIsButtonDisabled(true);

    const signinPayload: ISignInRequest = {
      email: email as string,
      password,
      loginType: LoginTypeEnum.NORMAL,
    };

    const payload: IResetPasswordRequest = {
      token: token as string,
      newPassword: password.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    try {
      await dispatch(AuthenticationThunk.resetPassword(payload));
      await dispatch(AuthenticationThunk.signIn(signinPayload));
      router.push(RoutePathEnum.MY_DOCUMENT);
      enqueueSnackbar(RESET_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
    } catch (error) {
      enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
    }
    setIsButtonDisabled(false);
  }, [
    isValidSubmittion,
    email,
    password,
    token,
    confirmPassword,
    dispatch,
    router,
    enqueueSnackbar,
  ]);

  // This is for checking both password are same or not.
  useEffect(() => {
    if (password !== confirmPassword && password && confirmPassword) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  }, [confirmPassword, password]);

  // This is checking token is validate or not.
  useEffect(() => {
    (async () => {
      if (showTokenExpireMessage) {
        router.push(RoutePathEnum.SIGN_IN);
      }
      if (email && token) {
        try {
          const response: IValidateTokenResponse = await dispatch(
            AuthenticationThunk.validateResetPasswordToken({
              email: email as string,
              token: token as string,
            }),
          ).unwrap();
          if (!isTokenValid && !response.isTokenValid) {
            setShowTokenExpireMessage(true);
          }
          setShowContent(true);
        } catch (error) {
          enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
        }
      }
    })();
  }, [
    dispatch,
    email,
    enqueueSnackbar,
    isTokenValid,
    router,
    showTokenExpireMessage,
    token,
  ]);

  return {
    getters: {
      confirmPassword,
      password,
      showPassword,
      validatePassword,
      isButtonDisabled,
      showTokenExpireMessage,
      showContent,
    },
    handlers: {
      onConfirmPasswordChange,
      onPasswordChange,
      handleShowPassword,
      handleSubmit,
    },
    ref: {
      confirmPasswordRef,
      passwordRef,
    },
  };
}

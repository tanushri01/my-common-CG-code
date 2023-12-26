import { RefObject, useRef, useState, useCallback } from 'react';
import router from 'next/router';
import { AxiosError } from 'axios';

import { ITextInputFieldData, ITextInputFieldRef } from '@/components';
import { EMAIL_SENT_SUCCESSFUL, SOMETHING_WENT_WRONG } from '@/constant';
import { RoutePathEnum, SnackbarTypeEnum } from '@/enum';
import { useAppSnackbar } from '@/hooks/snackbar.hook';
import { AuthenticationThunk, useAppDispatch } from '@/redux';
import { IForgotPasswordRequest } from '@/pages/password/interface';

interface IPasswordRecoveryControllerResponse {
  getters: {
    email: string;
    showEmailSent: boolean;
    isButtonDisabled: boolean;
  };
  handlers: {
    onEmailChange: (event: ITextInputFieldData) => void;
    handleSubmit: () => Promise<void>;
  };
  ref: {
    emailRef: RefObject<ITextInputFieldRef>;
  };
}

/**
 * @controller {usePasswordRecoveryController}
 * @return {IPasswordRecoveryControllerResponse}
 */
export function usePasswordRecoveryController(): IPasswordRecoveryControllerResponse {
  // React State
  const [email, setEmail] = useState<string>('');
  const [showEmailSent, setshowEmailSent] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  // Redux State
  const dispatch = useAppDispatch();

  // React Ref
  const emailRef = useRef<ITextInputFieldRef>(null);

  // Custom Hooks
  const { enqueueSnackbar } = useAppSnackbar();

  /**
   *
   * @function onEmailChange - Handle on Change of email
   * @param {ITextInputFieldData} event
   */
  const onEmailChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    setEmail(value);
  }, []);

  /**
   * @function {isValidSubmission} - Validate request before submission
   * @return {boolean}
   */
  const isValidSubmission = useCallback((): boolean => {
    const emailError = emailRef.current?.validateValue();

    return !emailError;
  }, []);

  /**
   * @function {handleSubmit} - Send the email  on registered id
   * @return {Promise<void>}
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    if (isValidSubmission()) {
      return;
    }

    setIsButtonDisabled(true);

    const payload: IForgotPasswordRequest = {
      email: email.trim(),
    };

    try {
      await dispatch(AuthenticationThunk.forgetPassword(payload)).unwrap();
      setshowEmailSent(true);
      router.push(RoutePathEnum.SIGN_IN);
      enqueueSnackbar(EMAIL_SENT_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
    } catch (error: unknown) {
      const errorMessage = error as AxiosError;
      if (error && errorMessage && JSON.parse(errorMessage.message).message) {
        enqueueSnackbar(
          JSON.parse(errorMessage.message).message,
          SnackbarTypeEnum.ERROR,
        );
      } else {
        enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
      }
    }
    setIsButtonDisabled(false);
  }, [dispatch, email, enqueueSnackbar, isValidSubmission]);

  return {
    getters: {
      email,
      showEmailSent,
      isButtonDisabled,
    },
    handlers: {
      onEmailChange,
      handleSubmit,
    },
    ref: {
      emailRef,
    },
  };
}

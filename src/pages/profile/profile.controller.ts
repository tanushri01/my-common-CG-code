import { RefObject, useRef, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import { ITextInputFieldData, ITextInputFieldRef } from '@/components';
import {
  PROFILE_DATA,
  ProfileThunk,
  UPDATE_PROFILE,
  profileActions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { IGetProfileResponse, IUpdateProfileRequest } from '@/interface';
import { useAppSnackbar } from '@/hooks';
import { SnackbarTypeEnum } from '@/enum';
import { SOMETHING_WENT_WRONG, UPDATED_SUCESSFULLY } from '@/constant';

interface IProfileControllerResponse {
  getters: {
    showPasswordError: boolean;
    profileData: IGetProfileResponse;
    isLoading: boolean;
    showPassword: boolean;
    updateProfile: IUpdateProfileRequest;
    localPassword: string;
    currentPasswordError: boolean;
    showNewPassword: boolean;
    showConfirmPassword: boolean;
  };
  handlers: {
    onEmailChange: (event: ITextInputFieldData) => void;
    onPasswordChange: (event: ITextInputFieldData) => void;
    onFirstNameChange: (event: ITextInputFieldData) => void;
    onLastNameChange: (event: ITextInputFieldData) => void;
    onNewPasswordChange: (event: ITextInputFieldData) => void;
    onConfirmPasswordChange: (event: ITextInputFieldData) => void;
    handleSubmit: () => Promise<void>;
    validatePassword: () => void;
    handleShowPassword: () => void;
    handleShowNewPassword: () => void;
    handleShowConfirmPassword: () => void;
  };
  ref: {
    emailRef: RefObject<ITextInputFieldRef>;
    passwordRef: RefObject<ITextInputFieldRef>;
    firstNameRef: RefObject<ITextInputFieldRef>;
    lastNameRef: RefObject<ITextInputFieldRef>;
    newPasswordRef: RefObject<ITextInputFieldRef>;
    confirmPasswordRef: RefObject<ITextInputFieldRef>;
  };
}

/**
 * @controller {useProfileController}
 * @return {IProfileControllerResponse}
 */
export const useProfileController = (): IProfileControllerResponse => {
  // React State
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [localPassword, setLocalPassword] = useState<string>('');
  const [currentPasswordError, setCurrentPasswordError] =
    useState<boolean>(false);

  // React Refs
  const emailRef = useRef<ITextInputFieldRef>(null);
  const passwordRef = useRef<ITextInputFieldRef>(null);
  const firstNameRef = useRef<ITextInputFieldRef>(null);
  const lastNameRef = useRef<ITextInputFieldRef>(null);
  const newPasswordRef = useRef<ITextInputFieldRef>(null);
  const confirmPasswordRef = useRef<ITextInputFieldRef>(null);

  // Redux States
  const dispatch = useAppDispatch();
  const profileData = useAppSelector(PROFILE_DATA);
  const updateProfile = useAppSelector(UPDATE_PROFILE);

  // Custom Hooks
  const { enqueueSnackbar } = useAppSnackbar();

  // Next Router
  const router = useRouter();

  const handleRefresh = useCallback(() => {
    router.reload();
  }, [router]);

  /**
   * Fetch profile data
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(ProfileThunk.fetchProfileInfo());
      } catch (error: unknown) {
        enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
      }
    };

    fetchData();
    if (!profileData) {
      handleRefresh();
    }
  }, [dispatch, enqueueSnackbar, handleRefresh, profileData]);

  /**
   * @functions {handleShowPassword} - To handle to show password functionality for current password
   * @return {void}
   */
  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  /**
   * @functions {handleShowNewPassword} - To handle to show password functionality for new password
   * @return {void}
   */
  const handleShowNewPassword = (): void => {
    setShowNewPassword(!showNewPassword);
  };

  /**
   * @functions {handleShowConfirmPassword} - To handle to show password functionality for confirm password
   * @return {void}
   */
  const handleShowConfirmPassword = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  /**
   * @function onEmailChange - Handle on Change of email
   * @param {ITextInputFieldData} event
   */
  const onEmailChange = useCallback(
    (event: ITextInputFieldData): void => {
      if (!event.event) return;
      const { value } = event.event.target;
      dispatch(
        profileActions.setUpdateProfile({
          email: value || updateProfile.email || profileData?.email,
          firstName: updateProfile.firstName || profileData?.firstName,
          lastName: updateProfile.lastName || profileData?.lastName,
          newPassword: updateProfile.newPassword,
          confirmPassword: updateProfile.confirmPassword,
        }),
      );
    },
    [
      dispatch,
      profileData?.email,
      profileData?.firstName,
      profileData?.lastName,
      updateProfile.confirmPassword,
      updateProfile.email,
      updateProfile.firstName,
      updateProfile.lastName,
      updateProfile.newPassword,
    ],
  );

  /**
   * @function onFirstNameChange - Handle on Change of First Name
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onFirstNameChange = useCallback(
    (event: ITextInputFieldData): void => {
      if (!event.event) return;
      const { value } = event.event.target;
      dispatch(
        profileActions.setUpdateProfile({
          email: updateProfile.email || profileData?.email,
          firstName: value || updateProfile.firstName || profileData?.firstName,
          lastName: updateProfile.lastName || profileData?.lastName,
          newPassword: updateProfile.newPassword,
          confirmPassword: updateProfile.confirmPassword,
        }),
      );
    },
    [
      dispatch,
      profileData?.email,
      profileData?.firstName,
      profileData?.lastName,
      updateProfile.confirmPassword,
      updateProfile.email,
      updateProfile.firstName,
      updateProfile.lastName,
      updateProfile.newPassword,
    ],
  );

  /**
   * @function onLastNameChange - Handle on Change of Last Name
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onLastNameChange = useCallback(
    (event: ITextInputFieldData): void => {
      if (!event.event) return;
      const { value } = event.event.target;
      dispatch(
        profileActions.setUpdateProfile({
          email: updateProfile.email || profileData?.email,
          firstName: updateProfile.firstName || profileData?.firstName,
          lastName: value || updateProfile.lastName || profileData?.lastName,
          newPassword: updateProfile.newPassword,
          confirmPassword: updateProfile.confirmPassword,
        }),
      );
    },
    [
      dispatch,
      profileData?.email,
      profileData?.firstName,
      profileData?.lastName,
      updateProfile.confirmPassword,
      updateProfile.email,
      updateProfile.firstName,
      updateProfile.lastName,
      updateProfile.newPassword,
    ],
  );

  /**
   * @function onNewPasswordChange - Handle on Change of New Password
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onNewPasswordChange = useCallback(
    (event: ITextInputFieldData): void => {
      if (!event.event) return;
      const { value } = event.event.target;
      dispatch(
        profileActions.setUpdateProfile({
          email: updateProfile.email || profileData?.email,
          firstName: updateProfile.firstName || profileData?.firstName,
          lastName: updateProfile.lastName || profileData?.lastName,
          newPassword: value,
          confirmPassword: updateProfile.confirmPassword,
        }),
      );
    },
    [
      dispatch,
      profileData?.email,
      profileData?.firstName,
      profileData?.lastName,
      updateProfile.confirmPassword,
      updateProfile.email,
      updateProfile.firstName,
      updateProfile.lastName,
    ],
  );

  /**
   * @function onConfirmPasswordChange - Handle on Change of Confirm Password
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onConfirmPasswordChange = useCallback(
    (event: ITextInputFieldData): void => {
      if (!event.event) return;
      const { value } = event.event.target;
      dispatch(
        profileActions.setUpdateProfile({
          email: updateProfile.email || profileData?.email,
          firstName: updateProfile.firstName || profileData?.firstName,
          lastName: updateProfile.lastName || profileData?.lastName,
          newPassword: updateProfile.newPassword,
          confirmPassword: value,
        }),
      );
    },
    [
      dispatch,
      profileData?.email,
      profileData?.firstName,
      profileData?.lastName,
      updateProfile.email,
      updateProfile.firstName,
      updateProfile.lastName,
      updateProfile.newPassword,
    ],
  );

  /**
   * @function onPasswordChange - Handle on Change of Password
   * @param {ITextInputFieldData} event
   * @return {void}
   */
  const onPasswordChange = useCallback((event: ITextInputFieldData): void => {
    if (!event.event) return;
    const { value } = event.event.target;
    setLocalPassword(value);
  }, []);

  /**
   * @function validatePassword - Validate the password
   */
  const validatePassword = useCallback(() => {
    if (
      updateProfile.newPassword !== updateProfile.confirmPassword &&
      updateProfile.newPassword &&
      updateProfile.confirmPassword
    ) {
      return setShowPasswordError(true);
    }
    return setShowPasswordError(false);
  }, [updateProfile.confirmPassword, updateProfile.newPassword]);

  /**
   * @function validateCurrentPassword - Validate the current password
   */
  const validateCurrentPassword = useCallback(() => {
    if (localPassword !== profileData?.password) {
      setCurrentPasswordError(true);
      return false;
    }
    setCurrentPasswordError(false);
    return true;
  }, [localPassword, profileData?.password]);

  /**
   * Call the new password validation Function
   */
  useEffect(() => {
    validatePassword();
  }, [validatePassword]);

  /**
   * @function isValidSubmition - Validate requset before submition
   * @return {boolean}
   */
  const isValidSubmition = useCallback((): boolean => {
    validatePassword();
    const emailError = emailRef.current?.validateValue();
    const passwordError = passwordRef.current?.validateValue();
    const firstNameError = firstNameRef.current?.validateValue();
    const lastNameError = lastNameRef.current?.validateValue();
    const newPasswordError = newPasswordRef.current?.validateValue();
    const confirmPasswordError = confirmPasswordRef.current?.validateValue();

    if (
      !(
        emailError &&
        passwordError &&
        firstNameError &&
        lastNameError &&
        newPasswordError &&
        confirmPasswordError
      )
    ) {
      return true;
    }

    return false;
  }, [validatePassword]);

  /**
   * To handle to Login functionality
   * @function handleSubmit
   * @return {void}
   */
  const handleSubmit = async (): Promise<void> => {
    if (isValidSubmition()) {
      return;
    }

    if (!validateCurrentPassword()) {
      return;
    }

    const payload = {
      email: updateProfile.email || profileData?.email,
      firstName: updateProfile.firstName,
      lastName: updateProfile.lastName,
      newPassword: updateProfile.newPassword,
      confirmPassword: updateProfile.confirmPassword,
    } as IUpdateProfileRequest;

    setIsLoading(true);
    try {
      const response = await dispatch(ProfileThunk.updateProfileInfo(payload));
      if (response.payload) {
        enqueueSnackbar(UPDATED_SUCESSFULLY, SnackbarTypeEnum.SUCCESS);
        handleRefresh();
      }
    } catch (error: unknown) {
      enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
    }
    setIsLoading(false);
  };

  return {
    getters: {
      updateProfile,
      showPasswordError,
      profileData,
      isLoading,
      showPassword,
      localPassword,
      currentPasswordError,
      showConfirmPassword,
      showNewPassword,
    },
    handlers: {
      onEmailChange,
      onPasswordChange,
      handleSubmit,
      onFirstNameChange,
      onLastNameChange,
      onNewPasswordChange,
      onConfirmPasswordChange,
      validatePassword,
      handleShowPassword,
      handleShowNewPassword,
      handleShowConfirmPassword,
    },
    ref: {
      emailRef,
      passwordRef,
      firstNameRef,
      lastNameRef,
      newPasswordRef,
      confirmPasswordRef,
    },
  };
};

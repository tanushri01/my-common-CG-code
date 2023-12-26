import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import {
  Spacing,
  TextInputField,
  SpacingEnum,
  Typography,
  FormGroup,
  InputAdornment,
  Icon,
  Box,
} from '@/components';
import {
  CURRENT_PASSWORD,
  EMAIL_ADDRESS,
  FIRST_NAME,
  LAST_NAME,
  NEW_PASSWORD,
  NEW_PASSWORD_CONFIRMATION,
  PASSWORD_MUST_BE_SAME,
  PROFILE,
} from '@/constant';
import { CustomButtonBox, CustomContainer } from '@/styles';
import { ValidationHelper } from '@/helper';
import { AuthProvider } from '@/contexts';

import {
  ContentWrapper,
  ContentInnerWrapper,
  ContentCard,
  ImageBox,
} from './profile.style';
import { useProfileController } from './profile.controller';
import ProfileImage from '../../assets/images/pages/profile/profile.png';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {Profile} - This page is used for user profile.
 * @return {JSX.Element}
 */
const Profile = (): JSX.Element => {
  const { getters, handlers, ref } = useProfileController();
  const {
    showPasswordError,
    profileData,
    showPassword,
    updateProfile,
    localPassword,
    currentPasswordError,
    showConfirmPassword,
    showNewPassword,
  } = getters;
  const {
    onEmailChange,
    onPasswordChange,
    handleSubmit,
    onFirstNameChange,
    onLastNameChange,
    onNewPasswordChange,
    onConfirmPasswordChange,
    handleShowPassword,
    handleShowConfirmPassword,
    handleShowNewPassword,
  } = handlers;
  const {
    emailRef,
    passwordRef,
    firstNameRef,
    lastNameRef,
    newPasswordRef,
    confirmPasswordRef,
  } = ref;

  return (
    <ContentWrapper>
      <CustomContainer>
        <Heading title={PROFILE} subTitle={PROFILE} />
        <ContentInnerWrapper>
          <ContentCard>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
            <FormGroup>
              <TextInputField
                label={EMAIL_ADDRESS}
                placeholder={EMAIL_ADDRESS}
                type="email"
                onChange={onEmailChange}
                value={updateProfile.email || profileData?.email || ''}
                ref={emailRef}
                validation={ValidationHelper.emailValidator}
              />
              <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
              <TextInputField
                label={CURRENT_PASSWORD}
                placeholder={CURRENT_PASSWORD}
                type={showPassword ? 'text' : 'password'}
                onChange={onPasswordChange}
                value={localPassword}
                ref={passwordRef}
                validation={ValidationHelper.validateNotEmpty}
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ ml: 0.5 }} position="end">
                      <Icon
                        icon={!showPassword ? faEyeSlash : faEye}
                        title={showPassword ? 'hide' : 'show'}
                        onClick={handleShowPassword}
                        color="inherit"
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: 'flex', gap: '6px' }}>
                <Typography sx={{ mt: 1 }} variant="body2">
                  We need your current password to confirm changes
                </Typography>
                {currentPasswordError && (
                  <Typography sx={{ mt: 1 }} variant="body2" color="error">
                    is invalid
                  </Typography>
                )}
              </Box>
              <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
              <TextInputField
                label={FIRST_NAME}
                placeholder={FIRST_NAME}
                type="text"
                onChange={onFirstNameChange}
                value={
                  (updateProfile.firstName as string) ||
                  profileData?.firstName ||
                  ''
                }
                ref={firstNameRef}
                validation={ValidationHelper.validateNone}
              />
              <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
              <TextInputField
                label={LAST_NAME}
                placeholder={LAST_NAME}
                type="text"
                onChange={onLastNameChange}
                value={
                  (updateProfile.lastName as string) ||
                  profileData?.lastName ||
                  ''
                }
                ref={lastNameRef}
                validation={ValidationHelper.validateNone}
              />
              <Typography sx={{ mt: 1 }} variant="body2">
                If you want to change your password, enter the new password
                below.
              </Typography>
              <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
              <TextInputField
                label={NEW_PASSWORD}
                placeholder={NEW_PASSWORD}
                type={showNewPassword ? 'text' : 'password'}
                onChange={onNewPasswordChange}
                value={updateProfile.newPassword?.trim() as string}
                ref={newPasswordRef}
                validation={ValidationHelper.validateNone}
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ ml: 0.5 }} position="end">
                      <Icon
                        icon={!showNewPassword ? faEyeSlash : faEye}
                        title={showNewPassword ? 'hide' : 'show'}
                        onClick={handleShowNewPassword}
                        color="inherit"
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
              <TextInputField
                label={NEW_PASSWORD_CONFIRMATION}
                placeholder={NEW_PASSWORD_CONFIRMATION}
                type={showConfirmPassword ? 'text' : 'password'}
                onChange={onConfirmPasswordChange}
                value={updateProfile.confirmPassword?.trim() as string}
                ref={confirmPasswordRef}
                validation={ValidationHelper.validateNone}
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ ml: 0.5 }} position="end">
                      <Icon
                        icon={!showConfirmPassword ? faEyeSlash : faEye}
                        title={showConfirmPassword ? 'hide' : 'show'}
                        onClick={handleShowConfirmPassword}
                        color="inherit"
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {showPasswordError && (
                <Typography color="error" variant="body2">
                  {PASSWORD_MUST_BE_SAME}
                </Typography>
              )}
            </FormGroup>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
            <CustomButtonBox variant="contained" onClick={handleSubmit}>
              Update
            </CustomButtonBox>
          </ContentCard>
          <ImageBox>
            <Image alt="my-account" src={ProfileImage} quality={100} />
          </ImageBox>
        </ContentInnerWrapper>
      </CustomContainer>
    </ContentWrapper>
  );
};

Profile.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={PROFILE}>{page}</Layout>
  </AuthProvider>
);

export default Profile;

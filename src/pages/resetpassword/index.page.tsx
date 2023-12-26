import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ValidationHelper } from '@/helper';
import {
  TextInputField,
  SpacingEnum,
  InputAdornment,
  FormGroup,
  Spacing,
  Icon,
  Box,
  Typography,
} from '@/components';

import {
  AuthBox,
  CustomButtonBox,
  AuthPasswordWrapper,
  CustomContainer,
} from '@/styles';
import {
  CONFIRM_PASSWORD,
  NEW_PASSWORD,
  PASSWORD_MUST_BE_SAME,
  RESET_PASSWORD,
} from '@/constant';
import { AuthProvider } from '@/contexts';

import { useResetPasswordController } from './resetpassword.controller';
import { SignInContentWrapper, ImageBox } from './resetpassword.style';

import MyAccount from '../../assets/images/common/my-account.png';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {ResetPassword} - This page is used for user login.
 * @return {JSX.Element}
 */
const ResetPassword = (): JSX.Element => {
  const { getters, handlers, ref } = useResetPasswordController();
  const {
    confirmPassword,
    password,
    showPassword,
    validatePassword,
    isButtonDisabled,
  } = getters;
  const {
    onConfirmPasswordChange,
    onPasswordChange,
    handleShowPassword,
    handleSubmit,
  } = handlers;
  const { confirmPasswordRef, passwordRef } = ref;

  return (
    <SignInContentWrapper>
      <CustomContainer>
        <AuthBox>
          <Heading title={RESET_PASSWORD} subTitle={RESET_PASSWORD} />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <FormGroup>
            <TextInputField
              label={NEW_PASSWORD}
              placeholder={NEW_PASSWORD}
              onChange={onPasswordChange}
              ref={passwordRef}
              value={password}
              type={showPassword ? 'text' : 'password'}
              validation={ValidationHelper.validatePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ ml: 0.5 }} position="end">
                    <Icon
                      icon={showPassword ? faEyeSlash : faEye}
                      title={showPassword ? 'hide' : 'show'}
                      onClick={handleShowPassword}
                      color="inherit"
                    />
                  </InputAdornment>
                ),
              }}
            />
            <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
            <TextInputField
              label={CONFIRM_PASSWORD}
              placeholder={CONFIRM_PASSWORD}
              onChange={onConfirmPasswordChange}
              ref={confirmPasswordRef}
              value={confirmPassword}
              type={showPassword ? 'text' : 'password'}
              validation={ValidationHelper.validatePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ ml: 0.5 }} position="end">
                    <Icon
                      icon={showPassword ? faEyeSlash : faEye}
                      title={showPassword ? 'hide' : 'show'}
                      onClick={handleShowPassword}
                      color="inherit"
                    />
                  </InputAdornment>
                ),
              }}
            />
          </FormGroup>
          <Spacing spacing={1} variant={SpacingEnum.TOP} />
          {validatePassword && (
            <Box>
              <Typography color="error" variant="body2">
                {PASSWORD_MUST_BE_SAME}
              </Typography>
            </Box>
          )}
          <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
          <AuthPasswordWrapper>
            <CustomButtonBox
              onClick={handleSubmit}
              variant="contained"
              disabled={isButtonDisabled}
            >
              Change Password
            </CustomButtonBox>
          </AuthPasswordWrapper>
        </AuthBox>
        <ImageBox>
          <Image alt="my-account" src={MyAccount} quality={100} />
        </ImageBox>
      </CustomContainer>
    </SignInContentWrapper>
  );
};

export default ResetPassword;

ResetPassword.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={RESET_PASSWORD}>{page}</Layout>
  </AuthProvider>
);

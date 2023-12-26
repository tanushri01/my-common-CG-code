import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { signIn } from 'next-auth/react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ValidationHelper } from '@/helper';
import {
  TextInputField,
  SpacingEnum,
  InputAdornment,
  Typography,
  FormGroup,
  Spacing,
  Icon,
} from '@/components';
import {
  LinkWrapper,
  AuthBox,
  CustomButtonBox,
  AuthPasswordWrapper,
  CustomContainer,
} from '@/styles';
import { RoutePathEnum } from '@/enum';
import {
  EMAIL_ADDRESS,
  MY_ACCOUNT,
  PASSWORD,
  SIGN_IN,
  SIGN_UP,
} from '@/constant';

import GoogleIcon from '../../assets/images/common/google.png';
import MyAccount from '../../assets/images/common/my-account.png';
import Signup from '../../assets/images/common/signup.png';
import { useAuthController } from './auth.controller';
import { AuthContentWrapper, AuthFooter, ImageBox } from './auth.style';

const Heading = dynamic(() => import('../../components/heading'));

interface IProps
  extends Readonly<{
    title: string;
  }> {}

/**
 * @component {Auth} - This component is used for user signin and signup.
 * @param {IProps} props
 * @return {JSX.Element}
 */
export const Auth = (props: IProps): JSX.Element => {
  const { getters, handlers, ref } = useAuthController(props);
  const { email, password, showPassword, session } = getters;
  const {
    onEmailChange,
    onPasswordChange,
    handleShowPassword,
    handleSubmit,
    handleClickOnEnter,
  } = handlers;
  const { emailRef, passwordRef } = ref;
  const { title } = props;

  return (
    <AuthContentWrapper>
      <CustomContainer>
        <AuthBox>
          <Heading
            title={title === SIGN_IN ? MY_ACCOUNT : SIGN_UP}
            subTitle={title === SIGN_IN ? MY_ACCOUNT : SIGN_UP}
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <FormGroup>
            <TextInputField
              label={EMAIL_ADDRESS}
              type="email"
              placeholder={EMAIL_ADDRESS}
              onChange={onEmailChange}
              value={email}
              ref={emailRef}
              validation={ValidationHelper.emailValidator}
              onKeyDown={handleClickOnEnter}
            />
            <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
            <TextInputField
              label={PASSWORD}
              placeholder={PASSWORD}
              onChange={onPasswordChange}
              ref={passwordRef}
              value={password}
              type={showPassword ? 'text' : 'password'}
              validation={ValidationHelper.validatePassword}
              onKeyDown={handleClickOnEnter}
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
          <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
          <AuthPasswordWrapper>
            <CustomButtonBox onClick={handleSubmit} variant="contained">
              {title === SIGN_IN ? 'Login' : 'Submit'}
            </CustomButtonBox>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
            {title === SIGN_IN && (
              <AuthFooter>
                <LinkWrapper>
                  <Link href={RoutePathEnum.FORGET_PASSWORD}>
                    <Typography variant="body1" sx={{ fontFamily: 'Raleway' }}>
                      Forgot Password?
                    </Typography>
                  </Link>
                </LinkWrapper>
              </AuthFooter>
            )}
          </AuthPasswordWrapper>
          <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
          {title !== SIGN_IN ? (
            <LinkWrapper>
              <Link href={RoutePathEnum.SIGN_IN}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Raleway', display: 'inline-block' }}
                >
                  Already have an account?
                </Typography>
              </Link>
            </LinkWrapper>
          ) : (
            <LinkWrapper>
              <Link href={RoutePathEnum.SIGN_UP}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Raleway', display: 'inline-block' }}
                >
                  Do not have an account? Signup Here
                </Typography>
              </Link>
            </LinkWrapper>
          )}
          <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
          <Typography sx={{ textAlign: 'center' }}>or</Typography>
          <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
          {!session && (
            <CustomButtonBox
              variant="outlined"
              fullWidth
              startIcon={<Image alt="google-icon" src={GoogleIcon} />}
              onClick={() => {
                signIn('google');
              }}
            >
              <Typography color="primary">Continue with Google</Typography>
            </CustomButtonBox>
          )}
        </AuthBox>
        <ImageBox title={title}>
          <Image
            alt="my-account"
            src={title === SIGN_IN ? MyAccount : Signup}
            quality={100}
          />
        </ImageBox>
      </CustomContainer>
    </AuthContentWrapper>
  );
};

export default Auth;

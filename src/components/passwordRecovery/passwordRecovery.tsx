import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import {
  TextInputField,
  SpacingEnum,
  Typography,
  FormGroup,
  Spacing,
} from '@/components';
import {
  AuthBox,
  CustomButtonBox,
  CustomContainer,
  LinkWrapper,
} from '@/styles';
import { EMAIL_ADDRESS, FORGOT_PASSWORD, RESEND_EMAIL } from '@/constant';
import { RoutePathEnum } from '@/enum';
import { ValidationHelper } from '@/helper';

import MyAccount from '../../assets/images/common/my-account.png';
import { usePasswordRecoveryController } from './passwordRecovery.controller';
import { ForgotContentWrapper, ImageBox } from './passwordRecovery.style';

const Heading = dynamic(() => import('../heading'));

interface IProps
  extends Readonly<{
    title: string;
  }> {}

/**
 * @component {PasswordRecovery} - This component is used for forget password and resend confirmation
 * @param {IProps} props
 * @return {JSX.Element}
 */
const PasswordRecovery = (props: IProps): JSX.Element => {
  const { getters, handlers, ref } = usePasswordRecoveryController();
  const { email, isButtonDisabled } = getters;
  const { onEmailChange, handleSubmit } = handlers;
  const { emailRef } = ref;

  // Props
  const { title } = props;

  return (
    <ForgotContentWrapper>
      <CustomContainer>
        <AuthBox>
          <Heading
            title={title === FORGOT_PASSWORD ? FORGOT_PASSWORD : RESEND_EMAIL}
            subTitle={
              title === FORGOT_PASSWORD ? FORGOT_PASSWORD : RESEND_EMAIL
            }
          />
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <FormGroup>
            <TextInputField
              label={EMAIL_ADDRESS}
              placeholder={EMAIL_ADDRESS}
              type="email"
              onChange={onEmailChange}
              value={email}
              ref={emailRef}
              validation={ValidationHelper.emailValidator}
            />
          </FormGroup>
          <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
          <CustomButtonBox
            variant="contained"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            {title === FORGOT_PASSWORD
              ? 'Send Reset Instructions'
              : 'Resend Instructions'}
          </CustomButtonBox>
          <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />

          <LinkWrapper>
            <Typography variant="body1">
              <Link
                href={
                  title === FORGOT_PASSWORD
                    ? RoutePathEnum.RESEND_CONFIRMATION
                    : RoutePathEnum.FORGET_PASSWORD
                }
              >
                {title === FORGOT_PASSWORD
                  ? `Didn't receive email confirmation instructions?`
                  : 'Forgot your password?'}
              </Link>
            </Typography>
          </LinkWrapper>
        </AuthBox>
        <ImageBox>
          <Image alt="my-account" src={MyAccount} quality={100} />
        </ImageBox>
      </CustomContainer>
    </ForgotContentWrapper>
  );
};

export default PasswordRecovery;

import { RootState } from '@/redux';

export const AUTH_AUTHENTICATED = (state: RootState) =>
  state.auth.isAuthenticated;

export const AUTH_IS_TOKEN_VALID = (state: RootState) =>
  state.auth.istokenvalid;

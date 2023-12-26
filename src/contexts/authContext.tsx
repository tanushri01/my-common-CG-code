import React, { createContext, ReactElement, useContext } from 'react';

import { LocalStorageEnum } from '@/enum';
import { StorageHelper } from '@/helper';

interface IAuthProviderProps
  extends Readonly<{
    children: ReactElement;
  }> {}

const AuthContext = createContext<boolean>(false);

/**
 * Permission Guard, checks for permission and helps in handling
 * the permissions of the active Page
 * @param {IAuthProviderProps} props
 * @return {ReactElement}
 */
export const AuthProvider = ({
  children,
}: IAuthProviderProps): ReactElement => {
  // Variable
  let isAuthenticated = true;
  let isToken;

  if (typeof window !== 'undefined') {
    isToken = StorageHelper.getLocalStorage(LocalStorageEnum.TOKEN);
  }

  if (!isToken) {
    isAuthenticated = false;
  }

  return (
    <AuthContext.Provider value={isAuthenticated}>
      {children}
    </AuthContext.Provider>
  );
};

// Creating consumer for take data from pages
export const AuthConsumer = AuthContext.Consumer;

/**
 * @hook creating hook {useAuth}
 * @return {boolean}
 */
export const useAuth = (): boolean => useContext(AuthContext);

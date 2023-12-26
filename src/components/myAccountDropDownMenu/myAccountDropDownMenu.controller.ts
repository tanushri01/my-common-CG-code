import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { Theme, useTheme } from '@mui/material';

import { RoutePathEnum, SnackbarTypeEnum } from '@/enum';
import { AuthenticationThunk, useAppDispatch } from '@/redux';
import { useAppSnackbar } from '@/hooks';
import { LOGOUT_SUCCESSFUL, SOMETHING_WENT_WRONG } from '@/constant';

interface IMyAccountDropDownControllerResponse {
  getters: {
    theme: Theme;
    session: Session | null;
  };
  handlers: {
    handleLogoutClick: () => Promise<void>;
  };
}

/**
 * @controller {useMyAccountDropdownController}
 * @return {IMyAccountDropDownControllerResponse}
 */
export const useMyAccountDropdownController =
  (): IMyAccountDropDownControllerResponse => {
    // Custom Hooks
    const { enqueueSnackbar } = useAppSnackbar();

    // Redux State
    const dispatch = useAppDispatch();

    // Next Router
    const router = useRouter();
    const { data: session } = useSession();

    // Theme
    const theme = useTheme();

    /**
     * @functions {handleLogoutClick} - Logout Functionality
     * @return {Promise<void>}
     */
    const handleLogoutClick = useCallback(async (): Promise<void> => {
      try {
        signOut({ redirect: false }).then(async () => {
          await dispatch(AuthenticationThunk.logout()).unwrap();
          enqueueSnackbar(LOGOUT_SUCCESSFUL, SnackbarTypeEnum.SUCCESS);
          router.push(RoutePathEnum.SIGN_IN);
        });
      } catch (error) {
        enqueueSnackbar(SOMETHING_WENT_WRONG, SnackbarTypeEnum.ERROR);
      }
    }, [dispatch, enqueueSnackbar, router]);

    return {
      getters: {
        theme,
        session,
      },
      handlers: {
        handleLogoutClick,
      },
    };
  };

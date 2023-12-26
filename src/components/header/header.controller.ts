import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';

import { LocalStorageEnum, RoutePathEnum } from '@/enum';
import { StorageHelper } from '@/helper';

interface IHeaderControllerResponse {
  getters: {
    myAccountOpen: HTMLElement | null;
    mobileDrawerOpen: boolean;
    productOpenAnchor: HTMLElement | null;
    sampleOpenAnchor: HTMLElement | null;
  };
  handlers: {
    handleMyAccountClick: (event: MouseEvent<HTMLElement>) => void;
    handleProductMenuOpen: (event: MouseEvent<HTMLElement>) => void;
    handleSampleMenuOpen: (event: MouseEvent<HTMLElement>) => void;
    handleMyAccountClose: () => void;
    handleDrawerOpenToggle: () => void;
    handleDrawerCloseToggle: () => void;
    handleProductMenuClose: () => void;
    handleSampleMenuClose: () => void;
  };
}

/**
 * @controller {useHeaderController}
 * @return {IHeaderControllerResponse}
 */
export const useHeaderController = (): IHeaderControllerResponse => {
  // React State
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [myAccountOpen, setMyAccountOpen] = useState<null | HTMLElement>(null);
  const [productOpenAnchor, setProductOpenAnchor] =
    useState<null | HTMLElement>(null);
  const [sampleOpenAnchor, setSampleOpenAnchor] = useState<null | HTMLElement>(
    null,
  );

  // Next Router
  const router = useRouter();

  let isToken: string;

  if (typeof window !== 'undefined') {
    isToken = StorageHelper.getLocalStorage(LocalStorageEnum.TOKEN);
  }

  /**
   * Open the drawer in mobile view
   * @function handleDrawerOpenToggle
   */
  const handleDrawerOpenToggle = (): void => {
    setMobileDrawerOpen(true);
  };

  /**
   * Close the drawer in mobile view
   * @function handleDrawerCloseToggle
   */
  const handleDrawerCloseToggle = (): void => {
    setMobileDrawerOpen(false);
  };

  /**
   * Open the my account menu Box
   * @function handleMyAccountClick
   * @param {MouseEvent<HTMLElement>} event
   */
  const handleMyAccountClick = (event: MouseEvent<HTMLElement>): void => {
    if (isToken) {
      setMyAccountOpen(event.currentTarget);
    } else {
      router.push(RoutePathEnum.SIGN_UP);
    }
  };

  /**
   * Close the my account menu Box
   * @function handleMyAccountClose
   */
  const handleMyAccountClose = (): void => {
    setMyAccountOpen(null);
  };

  /**
   * Close the Product menu Box
   * @function handleProductMenuClose
   */
  const handleProductMenuClose = (): void => {
    setProductOpenAnchor(null);
  };

  /**
   * Open the Product menu Box
   * @function handleProductClick
   * @param {MouseEvent<HTMLElement>} event
   */
  const handleProductMenuOpen = (event: MouseEvent<HTMLElement>): void => {
    if (productOpenAnchor !== event.currentTarget) {
      setProductOpenAnchor(event.currentTarget);
    }
  };

  /**
   * Close the Sample Letters menu Box
   * @function handleSampleMenuClose
   */
  const handleSampleMenuClose = (): void => {
    setSampleOpenAnchor(null);
  };

  /**
   * Open the Product menu Box
   * @function handleSampleMenuOpen
   * @param {MouseEvent<HTMLElement>} event
   */
  const handleSampleMenuOpen = (event: MouseEvent<HTMLElement>): void => {
    if (productOpenAnchor !== event.currentTarget) {
      setSampleOpenAnchor(event.currentTarget);
    }
  };

  return {
    getters: {
      mobileDrawerOpen,
      myAccountOpen,
      productOpenAnchor,
      sampleOpenAnchor,
    },
    handlers: {
      handleMyAccountClick,
      handleMyAccountClose,
      handleDrawerCloseToggle,
      handleDrawerOpenToggle,
      handleProductMenuClose,
      handleProductMenuOpen,
      handleSampleMenuClose,
      handleSampleMenuOpen,
    },
  };
};

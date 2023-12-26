import React from 'react';
import Link from 'next/link';
import { Box, Fade } from '@mui/material';

import { IProductMenu } from '@/json';
import { StringHelper } from '@/helper';
import { Typography } from '@/components';

import {
  DropDownMenuBox,
  DropDownMenuItem,
  AccountMenu,
  DisabledBox,
} from './productDropDownMenu.style';
import { useProductDropdownController } from './productDropDownMenu.controller';
import { FIRST_FORM_NAME, SECOND_FORM_NAME, THIRD_FORM_NAME } from '@/constant';

interface IProps
  extends Readonly<{
    menu: IProductMenu[];
    handleClose: () => void;
    productOpenAnchor: HTMLElement | null;
  }> {}

/**
 * @component {ProductDropDownMenu} - This component is for Product DropDown Menu.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const ProductDropDownMenu = (props: IProps): JSX.Element => {
  const { handleClose, menu, productOpenAnchor } = props;
  const { getters } = useProductDropdownController(props);
  const {
    isSameUrl,
    firstFormLimit,
    secondFormLimit,
    thirdFormLimit,
    fourthFormLimit,
  } = getters;

  /**
   * This function is for generating menus
   * @function generateMenu
   * @param {IProductMenu} data
   * @return {JSX.Element}
   */
  const generateMenu = (data: IProductMenu): JSX.Element => {
    switch (data.text) {
      case FIRST_FORM_NAME:
        if (!firstFormLimit) {
          return (
            <Link
              style={{ textDecoration: 'none' }}
              href={{
                pathname: data.route,
                query: { id: data.productId },
              }}
            >
              <Typography variant="body2">{data.text}</Typography>
            </Link>
          );
        }
        return (
          <DisabledBox>
            <Typography variant="body2">{data.text}</Typography>
          </DisabledBox>
        );

      case SECOND_FORM_NAME:
        if (!secondFormLimit) {
          return (
            <Link
              style={{ textDecoration: 'none' }}
              href={{
                pathname: data.route,
                query: { id: data.productId },
              }}
            >
              <Typography variant="body2">{data.text}</Typography>
            </Link>
          );
        }
        return (
          <DisabledBox>
            <Typography variant="body2">{data.text}</Typography>
          </DisabledBox>
        );

      case THIRD_FORM_NAME:
        if (!thirdFormLimit) {
          return (
            <Link
              style={{ textDecoration: 'none' }}
              href={{
                pathname: data.route,
                query: { id: data.productId },
              }}
            >
              <Typography variant="body2">{data.text}</Typography>
            </Link>
          );
        }
        return (
          <DisabledBox>
            <Typography variant="body2">{data.text}</Typography>
          </DisabledBox>
        );

      case 'Us Court Complaint':
        if (!fourthFormLimit) {
          return (
            <Link
              style={{ textDecoration: 'none' }}
              href={{
                pathname: data.route,
                query: { id: data.productId },
              }}
            >
              <Typography variant="body2">{data.text}</Typography>
            </Link>
          );
        }
        return (
          <DisabledBox>
            <Typography variant="body2">{data.text}</Typography>
          </DisabledBox>
        );

      default:
        return (
          <Box>
            <Typography variant="body2">{data.text}</Typography>
          </Box>
        );
    }
  };

  return (
    <AccountMenu
      id="hover-menu"
      anchorEl={productOpenAnchor}
      open={Boolean(productOpenAnchor)}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose }}
      TransitionComponent={Fade}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {menu.map((data: IProductMenu, index: number) => (
        <DropDownMenuItem
          onClick={handleClose}
          key={StringHelper.generateUID(data.text, index)}
        >
          <DropDownMenuBox>{!isSameUrl && generateMenu(data)}</DropDownMenuBox>
        </DropDownMenuItem>
      ))}
    </AccountMenu>
  );
};

export default ProductDropDownMenu;

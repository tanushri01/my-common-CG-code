import React from 'react';
import Link from 'next/link';
import { Fade } from '@mui/material';

import { IMyAccountMenu } from '@/json';
import { StringHelper } from '@/helper';
import { Spacing, SpacingEnum, Typography } from '@/components';
import Icon from '@/components/icon';
import { LOGOUT, PROFILE } from '@/constant';

import {
  DropDownMenuBox,
  DropDownMenuItem,
  AccountMenu,
} from './myAccountDropDownMenu.style';
import { useMyAccountDropdownController } from './myAccountDropDownMenu.controller';

interface IProps
  extends Readonly<{
    myAccountOpen: HTMLElement | null;
    menu: IMyAccountMenu[];
    handleClose: () => void;
  }> {}

/**
 * @component {MyAccountDropDownMenu} - This component is for MyAccount DropDown Menu.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const MyAccountDropDownMenu = (props: IProps): JSX.Element => {
  const { handleClose, menu, myAccountOpen } = props;
  const { getters, handlers } = useMyAccountDropdownController();
  const { handleLogoutClick } = handlers;
  const { theme, session } = getters;

  return (
    <AccountMenu
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': 'fade-button',
      }}
      anchorEl={myAccountOpen}
      open={!!myAccountOpen}
      onClose={handleClose}
      TransitionComponent={Fade}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {menu.map((data: IMyAccountMenu, index: number) => {
        switch (data.text) {
          case LOGOUT: {
            return (
              <DropDownMenuItem
                onClick={handleClose}
                key={StringHelper.generateUID(data.text, index)}
              >
                <Icon icon={data.icon} color="default" disableButton />
                <Spacing variant={SpacingEnum.LEFT} spacing={0.5} />
                {!session ? (
                  <DropDownMenuBox onClick={handleLogoutClick}>
                    <Typography variant="body2">{data.text}</Typography>
                  </DropDownMenuBox>
                ) : (
                  <DropDownMenuBox
                    onClick={() => {
                      handleLogoutClick();
                    }}
                  >
                    <Typography variant="body2">{data.text}</Typography>
                  </DropDownMenuBox>
                )}
              </DropDownMenuItem>
            );
          }
          case PROFILE: {
            return (
              !session && (
                <Link
                  href={data.route}
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.secondary.dark,
                  }}
                  key={StringHelper.generateUID(data.text, index)}
                >
                  <DropDownMenuItem onClick={handleClose}>
                    <Icon icon={data.icon} color="default" disableButton />
                    <Spacing variant={SpacingEnum.LEFT} spacing={0.5} />
                    <DropDownMenuBox>
                      <Typography variant="body2">{data.text}</Typography>
                    </DropDownMenuBox>
                  </DropDownMenuItem>
                </Link>
              )
            );
          }
          default: {
            return (
              <Link
                href={data.route}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.secondary.dark,
                }}
                key={StringHelper.generateUID(data.text, index)}
              >
                <DropDownMenuItem onClick={handleClose}>
                  <Icon icon={data.icon} color="default" disableButton />
                  <Spacing variant={SpacingEnum.LEFT} spacing={0.5} />
                  <DropDownMenuBox>
                    <Typography variant="body2">{data.text}</Typography>
                  </DropDownMenuBox>
                </DropDownMenuItem>
              </Link>
            );
          }
        }
      })}
    </AccountMenu>
  );
};

export default MyAccountDropDownMenu;

import React, { memo, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography, useTheme } from '@mui/material';

import {
  IQuickMenu,
  MyAccountMenu,
  ProductMenu,
  SampleLettersMenu,
  headerMenu,
} from '@/json';
import { StringHelper } from '@/helper';
import { RoutePathEnum } from '@/enum';
import { CustomContainer } from '@/styles';
import {
  Box,
  ListItem,
  Button,
  Icon,
  ProductDropDownMenu,
  MyAccountDropDownMenu,
} from '@/components';
import { PRODUCTS, SAMPLE_LETTERS } from '@/constant';

import {
  DrawerBox,
  HeaderBox,
  CustomToolbar,
  DeskTopLogoBox,
  CustomDrawer,
  CustomList,
  NavAppBar,
  OpenDrawerIcon,
  MenuList,
  DrawerCancelBox,
  ListItemWrapperButton,
  NavBox,
} from './header.style';
import { useHeaderController } from './header.controller';
import CommonCreditLogo from '../../assets/images/common/i-am-pro-say-logo.png';
import SampleLettersDropDownMenu from '../sampleLettersDropdownMenu';

interface IProps
  extends Readonly<{
    title: string;
  }> {}

/**
 * @component {Header} - This component is using for Header
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Header = (props: IProps): JSX.Element => {
  const { title } = props;
  const { getters, handlers } = useHeaderController();
  const {
    mobileDrawerOpen,
    myAccountOpen,
    productOpenAnchor,
    sampleOpenAnchor,
  } = getters;
  const {
    handleMyAccountClick,
    handleMyAccountClose,
    handleDrawerCloseToggle,
    handleDrawerOpenToggle,
    handleProductMenuClose,
    handleProductMenuOpen,
    handleSampleMenuClose,
    handleSampleMenuOpen,
  } = handlers;
  const theme = useTheme();

  const quickMenuData = useMemo(
    () => (
      <>
        {headerMenu.map((data: IQuickMenu, index: number) => (
          <NavBox
            key={StringHelper.generateUID(data.text, index)}
            className={title === data.text ? 'active' : ''}
          >
            <ListItem>
              {(() => {
                switch (data.text) {
                  case PRODUCTS:
                    return (
                      <Typography
                        aria-owns={productOpenAnchor ? 'hover-menu' : undefined}
                        aria-haspopup="true"
                        sx={{
                          color: theme.palette.secondary.dark,
                          cursor: 'pointer',
                          zIndex: 1301,
                        }}
                        aria-controls="hover-menu"
                        onClick={handleProductMenuOpen}
                        onMouseOver={handleProductMenuOpen}
                      >
                        {data.text}
                      </Typography>
                    );
                  case SAMPLE_LETTERS:
                    return (
                      <Typography
                        aria-owns={sampleOpenAnchor ? 'hover-menu' : undefined}
                        aria-haspopup="true"
                        sx={{
                          color: theme.palette.secondary.dark,
                          cursor: 'pointer',
                          zIndex: 1301,
                        }}
                        aria-controls="hover-menu"
                        onClick={handleSampleMenuOpen}
                        onMouseOver={handleSampleMenuOpen}
                      >
                        {data.text}
                      </Typography>
                    );
                  default:
                    return <Link href={data.route}>{data.text}</Link>;
                }
              })()}
            </ListItem>
          </NavBox>
        ))}
        <ListItemWrapperButton>
          <Button
            variant="contained"
            startIcon={<FontAwesomeIcon icon={faUser} />}
            sx={{ whiteSpace: 'nowrap' }}
            onClick={handleMyAccountClick}
          >
            My Account
          </Button>
        </ListItemWrapperButton>
      </>
    ),
    [
      handleMyAccountClick,
      handleProductMenuOpen,
      handleSampleMenuOpen,
      productOpenAnchor,
      sampleOpenAnchor,
      theme.palette.secondary.dark,
      title,
    ],
  );

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <MenuList>{quickMenuData} </MenuList>
    </Box>
  );

  return (
    <HeaderBox>
      <CustomContainer>
        <NavAppBar sx={{ p: 0 }}>
          <CustomToolbar>
            <DeskTopLogoBox>
              <Link href={RoutePathEnum.HOME}>
                <Image
                  alt="IAMPROSAY"
                  src={CommonCreditLogo}
                  width="300"
                  height="42"
                  title="IAMPROSAY"
                />
              </Link>
            </DeskTopLogoBox>
            <CustomList>{quickMenuData}</CustomList>
            {/* This IconButton is Visible in Mobile View */}
            {mobileDrawerOpen ? (
              <DrawerCancelBox>
                <Icon
                  icon={faXmark}
                  size="medium"
                  onClick={handleDrawerCloseToggle}
                />
              </DrawerCancelBox>
            ) : (
              <OpenDrawerIcon
                icon={faBars}
                size="medium"
                onClick={handleDrawerOpenToggle}
              />
            )}
          </CustomToolbar>
        </NavAppBar>
      </CustomContainer>
      {/* This is For Mobile View */}
      <DrawerBox component="nav">
        <CustomDrawer
          anchor="right"
          variant="persistent"
          open={mobileDrawerOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={handleDrawerCloseToggle}
        >
          {drawer}
        </CustomDrawer>
      </DrawerBox>
      {/* This is MyAccont Menu */}
      {myAccountOpen && (
        <MyAccountDropDownMenu
          myAccountOpen={myAccountOpen}
          handleClose={handleMyAccountClose}
          menu={MyAccountMenu}
        />
      )}
      {/* This is MyAccont Product Menu */}
      <ProductDropDownMenu
        handleClose={handleProductMenuClose}
        productOpenAnchor={productOpenAnchor}
        menu={ProductMenu}
      />

      {/* This is MyAccont Product Menu */}
      <SampleLettersDropDownMenu
        handleClose={handleSampleMenuClose}
        sampleOpenAnchor={sampleOpenAnchor}
        menu={SampleLettersMenu}
      />
    </HeaderBox>
  );
};

export default memo(Header);

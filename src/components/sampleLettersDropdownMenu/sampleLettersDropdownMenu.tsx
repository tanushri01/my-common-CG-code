import React from 'react';
import Link from 'next/link';
import { Fade } from '@mui/material';

import { ISampleLettersMenu } from '@/json';
import { StringHelper } from '@/helper';
import { Typography } from '@/components';

import {
  DropDownMenuBox,
  DropDownMenuItem,
  AccountMenu,
} from './sampleLettersDropdownMenu.style';

interface IProps
  extends Readonly<{
    menu: ISampleLettersMenu[];
    handleClose: () => void;
    sampleOpenAnchor: HTMLElement | null;
  }> {}

/**
 * @component {SampleLettersDropDownMenu} - This component is for Sample Letters DropDown Menu.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const SampleLettersDropDownMenu = (props: IProps): JSX.Element => {
  const { handleClose, menu, sampleOpenAnchor } = props;

  return (
    <AccountMenu
      id="hover-menu"
      anchorEl={sampleOpenAnchor}
      open={Boolean(sampleOpenAnchor)}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose }}
      TransitionComponent={Fade}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {menu.map((data: ISampleLettersMenu, index: number) => (
        <DropDownMenuItem
          onClick={handleClose}
          key={StringHelper.generateUID(data.text, index)}
        >
          <DropDownMenuBox>
            <Link
              style={{ textDecoration: 'none' }}
              href={data.link}
              target="_blank"
            >
              <Typography variant="body2">{data.text}</Typography>
            </Link>
          </DropDownMenuBox>
        </DropDownMenuItem>
      ))}
    </AccountMenu>
  );
};

export default SampleLettersDropDownMenu;

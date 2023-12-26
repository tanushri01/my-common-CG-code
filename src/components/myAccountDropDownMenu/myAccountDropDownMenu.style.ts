import { Box, styled, MenuItem, Menu } from '@mui/material';

export const DropDownMenuBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 1),

  '&:hover': {
    color: theme.palette.primary.main,
  },

  a: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

export const DropDownMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',

  svg: {
    minWidth: '20px',
  },

  li: { [theme.breakpoints.down('sm')]: { padding: theme.spacing(0, 1) } },
}));

export const DropDownMenu = styled(Menu)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

export const AccountMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    overflow: 'visible',
    marginTop: theme.spacing(1.5),
    backgroundColor: theme.palette.background.default,
    width: '170px',
    border: '0',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: ' 0px',
      right: '14px',
      width: ' 10px',
      height: ' 10px',
      backgroundColor: theme.palette.background.default,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
      boxShadow: theme.shadows[24],
    },

    [theme.breakpoints.down('sm')]: {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: ' 0px',
        right: '14px',
        width: ' 10px',
        height: ' 10px',
        backgroundColor: theme.palette.background.default,
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
        boxShadow: theme.shadows[24],
      },
    },
  },
}));

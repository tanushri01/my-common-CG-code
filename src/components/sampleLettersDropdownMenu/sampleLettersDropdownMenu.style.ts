import { Box, styled, MenuItem, Menu } from '@mui/material';

export const DropDownMenuBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  display: 'block',
  width: '100%',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  a: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  p: {
    color: theme.palette.text.primary,
  },
}));

export const DropDownMenuItem = styled(MenuItem)({
  display: 'flex',

  svg: {
    minWidth: '20px',
  },
});

export const DropDownMenu = styled(Menu)(({ theme }) => ({
  padding: theme.spacing(10, 2),
}));

export const AccountMenu = styled(Menu)(({ theme }) => ({
  padding: theme.spacing(2, 2, 0),
  cursor: 'pointer',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  '& .MuiMenu-paper': {
    overflow: 'visible',
    marginTop: theme.spacing(1.5),
    backgroundColor: theme.palette.background.default,
    width: '270px',
    border: '0',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '0px',
      right: '14px',
      width: ' 10px',
      height: ' 10px',
      backgroundColor: theme.palette.background.default,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
      boxShadow: theme.shadows[24],
    },

    [theme.breakpoints.down('sm')]: {
      width: '255px',

      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '0px',
        left: ' 14px',
        width: '10px',
        height: '10px',
        backgroundColor: theme.palette.background.default,
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
        boxShadow: theme.shadows[24],
      },
    },
  },
}));

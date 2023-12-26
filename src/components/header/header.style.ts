import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  styled,
  Toolbar,
  ListItem,
} from '@mui/material';

import Icon from '@/components/icon';

export const DrawerBox = styled(Box)(() => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '300px',
  },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2, 0),
  position: 'fixed',
  zIndex: '1',
  width: '100%',
  top: '0px',
  left: '0px',
  background: theme.palette.background.default,

  header: {
    padding: `${theme.spacing(0)} !important`,
  },
}));

export const NavAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  position: 'inherit',
}));

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: `${theme.spacing(0)} !important`,
}));

export const DeskTopLogoBox = styled(Box)({
  display: 'flex',
});

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block',

    '.MuiDrawer-paperAnchorRight': {
      background: theme.palette.primary.light,
      margin: theme.spacing(11, 0, 0),
      width: ' 100%',
      height: 'auto',
    },
  },
}));

export const CustomList = styled(List)(({ theme }) => ({
  display: 'flex',

  a: {
    textDecoration: 'none',
    color: theme.palette.secondary.dark,
    whiteSpace: 'nowrap',
  },

  p: {
    whiteSpace: 'nowrap',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const OpenDrawerIcon = styled(Icon)(({ theme }) => ({
  display: 'none',
  color: theme.palette.primary.main,
  background: theme.palette.backgroundColor,
  padding: theme.spacing(0),
  height: '28px',
  width: '28px',
  borderRadius: '5px',

  svg: {
    height: '16px',
    width: '18px',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

export const MenuList = styled(List)(({ theme }) => ({
  a: {
    textDecoration: 'none',
    color: theme.palette.secondary.dark,
  },
}));

export const DividerBox = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.border.main,
}));

export const DrawerCancelBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(0),

  button: {
    background: theme.palette.backgroundColor,
    padding: theme.spacing(0),
    height: '28px',
    width: '28px',
    borderRadius: '5px',
  },

  svg: {
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.primary.main,
    },
  },
}));

export const ListItemWrapperButton = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 3),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 3, 3),
  },
}));

export const NavBox = styled(Box)(({ theme }) => ({
  '&.active': {
    a: {
      color: theme.palette.primary.main,

      '&:after': {
        transform: 'translateX(-50%) scaleX(1)',
      },
    },
  },

  li: {
    padding: theme.spacing(2, 3),

    p: {
      cursor: 'pointer',
    },

    a: {
      '&:after': {
        content: '""',
        position: 'absolute',
        height: '2px',
        width: '70%',
        background: theme.palette.primary.main,
        bottom: '10px',
        left: '50%',
        transform: 'translateX(0%) scaleX(0)',
        transformOrigin: 'bottom left',
        transition: 'transform 0.25s ease-out',

        [theme.breakpoints.down('sm')]: {
          width: '87%',
        },
      },

      '&:hover': {
        color: theme.palette.primary.main,

        '&:after': {
          transform: 'translateX(-50%) scaleX(1)',
        },
      },
    },
  },
}));

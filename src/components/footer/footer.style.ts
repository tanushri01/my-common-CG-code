import { List, ListItem, styled, Box, Grid } from '@mui/material';

import BGImage from '../../assets/images/common/footer-bg.png';

export const CustomList = styled(List)(({ theme }) => ({
  padding: theme.spacing(0),

  a: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.subtitle2.fontSize,
  },

  p: {
    fontSize: theme.typography.subtitle2.fontSize,
  },
}));

export const FooterMenu = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4.5),

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
  },
}));

export const FooterBg = styled(Box, {
  shouldForwardProp: (props: string) => props !== 'isPadding',
})<{ isPadding?: boolean }>(({ theme, isPadding }) => ({
  background: `${theme.palette.black} url(${BGImage.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: theme.palette.primary.contrastText,
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    padding: isPadding ? theme.spacing(6, 0, 0) : theme.spacing(0, 0),
  },
}));

export const FooterMenuListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(0),

  a: {
    padding: theme.spacing(0),
  },
}));

export const FooterIconLogo = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-36px',
  right: '30px',
  borderRadius: '50%',
  background: theme.palette.primary.contrastText,
  width: '83px',
  height: '81px',
  padding: theme.spacing(0.625),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const FooterDescGrid = styled(Grid)(({ theme }) => ({
  paddingRight: theme.spacing(12),

  [theme.breakpoints.down('sm')]: {
    paddingRight: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const FooterDesignByBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(1),

  a: {
    marginLeft: theme.spacing(1),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textDecoration: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const MindpathBox = styled(Box)(({ theme }) => ({
  a: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.h6.fontWeight,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textDecoration: 'none',
  },
}));

export const DesignBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  borderLeft: '1px solid',
  borderColor: theme.palette.primary.contrastText,

  p: {
    marginLeft: theme.spacing(1),
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(0),
    border: 'none',

    p: {
      marginLeft: theme.spacing(0),
    },
  },
}));

export const FooterDescBox = styled(Box)({
  display: 'flex',
});

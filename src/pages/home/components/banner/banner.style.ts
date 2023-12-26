import { Box, styled } from '@mui/material';

import BannerDesktop from '../../../../assets/images/pages/home/banner-desktop.png';
import BannerMobile from '../../../../assets/images/pages/home/banner-mobile.png';

export const BannerWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url("${BannerDesktop.src}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '765px',
  marginBottom: theme.spacing(4),
  position: 'relative',
  backgroundPosition: 'center',

  [theme.breakpoints.down('lg')]: {
    height: '665px',
  },
  [theme.breakpoints.down('md')]: {
    height: '555px',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url("${BannerMobile.src}")`,
    height: '260px',
  },
}));

export const CenterBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  color: theme.palette.getContrastText(theme.palette.primary.main),
  textAlign: 'center',
  width: '100%',

  h1: {
    textTransform: 'uppercase',

    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },

  h6: {
    fontWeight: theme.typography.fontWeightRegular,

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));

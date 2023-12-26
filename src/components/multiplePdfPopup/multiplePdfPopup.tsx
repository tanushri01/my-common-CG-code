/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Slider from 'react-slick';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box } from '../muiImport';

interface IProps
  extends Readonly<{
    open: boolean;
    handleClose: () => void;
  }> {}

const MultiplePdfDialog = (props: IProps) => {
  const { open, handleClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          background: theme.palette.background.default,
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle id="responsive-dialog-title">Sample PDF</DialogTitle>
      <DialogContent sx={{ backgrounColor: theme.palette.background.default }}>
        <Slider {...settings}>
          <Box>
            <iframe
              title="pdf"
              src="/Bank-of-America_Redacted.pdf#toolbar=0"
              width="700"
              height="800"
            />
          </Box>
          <Box>
            <iframe
              title="pdf"
              src="/Equifax-Settlement_Redacted.pdf#toolbar=0"
              width="700"
              height="800"
            />
          </Box>
        </Slider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default MultiplePdfDialog;

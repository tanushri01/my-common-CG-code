/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface IProps
  extends Readonly<{
    open: boolean;
    handleClose: () => void;
  }> {}

const PdfDialog = (props: IProps) => {
  const { open, handleClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
        <iframe
          title="pdf"
          src="/sampleLetter1.pdf#toolbar=0"
          width="700"
          height="800"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PdfDialog;

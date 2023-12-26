import {
  Box,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  styled,
} from '@mui/material';

export const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  flexWrap: 'wrap',
  gap: '5px',
  justifyContent: 'center',

  span: {
    textAlign: 'center',

    '.Mui-active': {
      '.MuiStepIcon-text': {
        fill: theme.palette.getContrastText(theme.palette.primary.main),
      },
    },

    svg: {
      color: theme.palette.background.paper,
      height: '40px',
      width: '40px',

      [theme.breakpoints.down('sm')]: {
        height: '30px',
        width: '30px',
      },

      '.MuiStepIcon-text': {
        fontSize: theme.typography.caption2.fontSize,
        fill: theme.palette.secondary.main,

        [theme.breakpoints.down('sm')]: {
          fontSize: theme.typography.caption1.fontSize,
        },
      },
    },
  },

  '.MuiStepLabel-label': {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.secondary.main,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    '&.Mui-active': {
      color: theme.palette.primary.main,
    },
  },
}));

export const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 18,
    left: 'calc(-50% + 35px)',
    right: 'calc(50% + 35px)',

    [theme.breakpoints.down('sm')]: {
      top: 15,
      left: 'calc(-50% + 0px)',
      right: 'calc(50% + 40px)',
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.border.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.border.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 1,
    borderRadius: 1,
  },
}));

export const StepsContentBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(10, 'auto'),
  maxWidth: '100%',

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(5, 0, 2),
  },
}));

export const CustomStep = styled(Step)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0),

    '&:first-of-type': {
      '.MuiStepLabel-alternativeLabel': {
        margin: theme.spacing(0),
      },
    },

    '.MuiStepLabel-alternativeLabel': {
      width: '30px',
    },
  },
}));

export const PrevNextButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  margin: theme.spacing(5, 0),
  justifyContent: 'space-between',
}));
